#!/usr/bin/env node

require('dotenv').config();
const https = require('https');

const API_KEY = process.env.BREVO_API_KEY;

if (!API_KEY) {
  console.error('❌ Error: BREVO_API_KEY not found in .env file');
  process.exit(1);
}

const nasUrl = process.argv[2];
const fileExt = process.argv[3]; // Optional: jpg, png, gif, bmp

if (!nasUrl) {
  console.error('❌ Usage: node brevo-upload-image.js <url> [extension]');
  console.error('Examples:');
  console.error('  node brevo-upload-image.js https://nas.home.local/code-ninjas/geo.jpg');
  console.error('  node brevo-upload-image.js "https://drive.google.com/uc?export=download&id=..." jpg');
  process.exit(1);
}

if (!nasUrl.startsWith('http')) {
  console.error('❌ Error: URL must start with http:// or https://');
  process.exit(1);
}

// If extension provided, append it to URL for Brevo detection
let finalUrl = nasUrl;
if (fileExt) {
  // Append extension in a way Brevo can detect
  finalUrl = `${nasUrl}#.${fileExt}`;
}

console.log(`📸 Sending to Brevo: ${nasUrl}`);

const payload = {
  imageUrl: finalUrl
};

const body = JSON.stringify(payload);

const options = {
  hostname: 'api.brevo.com',
  port: 443,
  path: '/v3/emailCampaigns/images',
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
        console.log('✅ Image added to Brevo gallery!');
        console.log(`📍 Brevo URL: ${response.imageUrl}`);
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
