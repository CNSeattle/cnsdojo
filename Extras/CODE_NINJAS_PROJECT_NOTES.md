# Code Ninjas Email Campaign Generator
## Project Notes & Documentation

**Last Updated:** April 2026  
**Owner:** Geo Rittenmyer (Code Ninjas Seattle)  
**Status:** Active

---

## Overview

A lightweight, no-cost email campaign tool for Code Ninjas Seattle. Reads contacts from Google Sheets, personalizes emails using templates, and outputs CSV files ready for Outlook mail merge.

**Why this exists:** Code Ninjas needed a free, controlled way to manage outreach to three distinct segments (Enrolled Students, Leads, PTAs) without relying on expensive CRM platforms or losing control over messaging.

---

## Tech Stack

- **Frontend:** Plain HTML + JavaScript (no dependencies, runs locally or in Claude Code)
- **Data Source:** Google Sheets (shared, read-only access)
- **Templates:** Stored in Google Doc (editable, version-controlled)
- **Output:** CSV files formatted for Outlook mail merge
- **Sending:** Outlook's native mail merge (free, built-in to Microsoft 365)

---

## Architecture

### Data Flow

```
Google Sheet (3 tabs)
    ↓
HTML Form (paste CSV data)
    ↓
JavaScript (personalize + merge)
    ↓
CSV Output
    ↓
Outlook Mail Merge
    ↓
Send via Outlook
```

### Contact Segments

**1. Enrolled** - Current Code Ninjas students  
Fields: `Parent First Name`, `Parent Last Name`, `Email`, `Child First Name`, `Programs Enrolled`

**2. Leads** - Interested parents, not yet enrolled  
Fields: `Parent First Name`, `Parent Last Name`, `Email`, `Child First Name`, `Program Interested`

**3. PTAs** - School PTAs/PTOs for partnership outreach  
Fields: `School Name`, `PTA/PTO Name`, `Contact First Name`, `Contact Last Name`, `Email`

---

## Templates

Each template uses merge fields enclosed in double curly braces: `{{FieldName}}`

### Active Templates

**E1: Program Update** (Enrolled segment)
- **Subject:** `{{ParentFirstName}}'s Progress in {{ProgramsEnrolled}}`
- **Use case:** Send progress updates, remind about sessions, celebrate milestones
- **Tone:** Warm, encouraging, personal

**L1: Free Game Building Session** (Leads segment)
- **Subject:** `Free Game Building Session for {{ChildFirstName}} at Code Ninjas`
- **Use case:** Warm invitation for free trial, soft pitch
- **Tone:** Friendly, exciting, low-pressure

**P1: School Partnership Intro** (PTAs segment)
- **Subject:** `Bring Code Ninjas to {{SchoolName}}`
- **Use case:** Cold outreach to PTA leaders, partnership pitch
- **Tone:** Professional, parent-to-parent, clear value prop
- **Details:** Fundraising splits, enrichment programs, event partnerships

### Adding New Templates

To add a template (e.g., E2, P2):

1. Edit the HTML file: Find the `TEMPLATES` object in the `<script>` section
2. Add new entry:
   ```javascript
   E2: {
     name: "E2: Your Template Name",
     subject: "Subject with {{MergeFields}}",
     body: `Multi-line template text with {{MergeFields}}`
   }
   ```
3. Add `<option>` to the template dropdown: `<option value="E2">E2: Your Template Name</option>`
4. Save and reload the HTML file

---

## How to Use

### Step 1: Prepare Data
1. Go to your Google Sheet (Enrolled, Leads, or PTAs tab)
2. Select all data (Ctrl+A or Cmd+A)
3. Copy (Ctrl+C or Cmd+C)

### Step 2: Generate Emails
1. Open `code_ninjas_email_generator.html` in a browser
2. Select the segment (Enrolled, Leads, or PTAs)
3. Select the template (E1, L1, P1, etc.)
4. Paste the CSV data into the text area
5. Click **Preview Emails** to verify personalization
6. Click **Download CSV** to save the output file

### Step 3: Send via Outlook
1. Open the downloaded CSV in Excel
2. In Word → Mailings → Start Mail Merge → Email Messages
3. Select the Excel file as data source
4. Insert merge fields in your message
5. Preview and send through Outlook

---

## Important Details

### CSV Format Requirements
- **First row must be headers** (e.g., "Email", "ParentFirstName", "SchoolName")
- **No empty rows** between contacts
- **Quotes around fields with commas** (if needed)
- **All merge fields must exist in the spreadsheet** (typos in field names = unpersonalized text)

### Merge Field Naming
Field names in your spreadsheet must **exactly match** the template merge fields:
- `{{ParentFirstName}}` → column header must be `Parent First Name`
- `{{ChildFirstName}}` → column header must be `Child First Name`
- `{{SchoolName}}` → column header must be `School Name`
- etc.

If a field is missing, the template will display the literal `{{FieldName}}` in the email.

### Outlook Mail Merge Limits
- Default limit: 10,000 emails per 24 hours per account
- Recommended: Send no more than 50-100 per hour to maintain sender reputation
- Always use BCC for large sends to preserve inbox space

---

## Google Sheet Structure

**Sheet ID:** `1Anu2u8gStGtTVGw9N700pmICcAPnPS3cwACvzyd5-YQ`

**Tabs:**
- `Enrolled` - Current students
- `Leads` - Prospective students
- `PTA/PTO` - School partnerships

Share settings: "Anyone with link can view"

---

## Google Doc (Templates)

**Doc ID:** `14P5m-ZopTAOBGyR2CTbOiAhEADJvMo-tCRBUCoEeNQo`

Contains full template text with merge fields. Can be edited and referenced by template ID.

---

## Troubleshooting

### "No contacts found"
- Check that first row contains headers
- Verify CSV formatting (text is comma-separated)
- Ensure no blank rows at top

### Email shows `{{FieldName}}` instead of value
- Field name in spreadsheet doesn't match template (case-sensitive)
- Check for extra spaces in header names
- Verify the column exists in your CSV

### CSV won't import to Excel
- Try opening as UTF-8 (File → Open → Encoding)
- Check for stray quote marks in data
- Re-download and try again

### Outlook mail merge not working
- Verify CSV has "To", "Subject", "Body" columns
- Check that email addresses are valid
- Try with 5-10 test emails first

---

## Future Enhancements

- [ ] Track which contacts have been emailed (history log)
- [ ] A/B testing (split templates to test open rates)
- [ ] Integration with Outlook directly (skip CSV step)
- [ ] Auto-follow-up scheduling
- [ ] Simple analytics dashboard
- [ ] Unsubscribe management

---

## Notes for Maintenance

- **Backup:** Keep a copy of the HTML file in your repo/Drive
- **Updates:** Test template changes with 2-3 test emails first
- **Data:** Periodically audit the Google Sheet for duplicates, bounces, opted-out contacts
- **Compliance:** Always include unsubscribe option in emails (use BCC wisely)

---

## Contact

Built for: **Geo Rittenmyer**, Code Ninjas Seattle  
Email: `geo@georittenmyer.com`  
Support: Updated and maintained via Claude Code
