#!/usr/bin/env node

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = process.env.BREVO_API_KEY;

if (!API_KEY) {
  console.error('❌ Error: BREVO_API_KEY not found in .env file');
  process.exit(1);
}

const htmlPath = process.argv[2];
const senderEmail = process.argv[3];
const senderName = process.argv[4];

if (!htmlPath || !senderEmail || !senderName) {
  console.error('❌ Usage: node brevo-push-campaign.js <html-file> <sender-email> <sender-name>');
  console.error('Example: node brevo-push-campaign.js ./CNS_Emailer/Email_1_Crunchlabs.html seattlewa@codeninjas.com "Code Ninjas Seattle"');
  process.exit(1);
}

if (!fs.existsSync(htmlPath)) {
  console.error(`❌ File not found: ${htmlPath}`);
  process.exit(1);
}

const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
const fileName = path.basename(htmlPath, '.html');

console.log(`📧 Creating Brevo campaign: "${fileName}"`);
console.log(`   From: ${senderName} <${senderEmail}>`);

const payload = {
  name: fileName,
  subject: "[EDIT ME] Subject line",
  htmlContent: htmlContent,
  sender: {
    name: senderName,
    email: senderEmail
  },
  status: "draft"
};

const body = JSON.stringify(payload);

const options = {
  hostname: 'api.brevo.com',
  port: 443,
  path: '/v3/emailCampaigns',
  method: 'POST',
  headers: {
    'api-key': API_KEY,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body)
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 201) {
      try {
        const response = JSON.parse(data);
        console.log('✅ Campaign created!');
        console.log(`🆔 Campaign ID: ${response.id}`);
        console.log(`\n📋 Next steps:`);
        console.log(`1. Go to Brevo → Campaigns → Emails`);
        console.log(`2. Find "${fileName}" draft`);
        console.log(`3. Edit: Add subject line, sender, mailing list`);
        console.log(`4. Send!\n`);
      } catch (e) {
        console.error('❌ Error parsing response:', e.message);
        process.exit(1);
      }
    } else {
      console.error(`❌ Request failed (${res.statusCode}):`);
      console.error(data);
      process.exit(1);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request error:', error.message);
  process.exit(1);
});

req.write(body);
req.end();
