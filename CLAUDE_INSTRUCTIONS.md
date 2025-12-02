# 🤖 Claude Data Collection Workflow

## Purpose
This file contains instructions for Claude Code on how to collect dental clinic information from Instagram and Google Maps links and add them to the CRM system.

---

## When User Provides Links

### User Request Format
User will provide:
- Instagram profile links (e.g., @drabhisingh_32si, @32si_dental)
- Google Maps links for clinic locations
- Request to add clinic to CRM

### Automated Workflow

#### Step 1: Use Playwright MCP
- **ALWAYS** use Playwright MCP to visit links (not WebFetch)
- Instagram loads content dynamically - Playwright is required
- Use `mcp__playwright__browser_navigate` to visit each URL
- Use `mcp__playwright__browser_snapshot` to get page content

#### Step 2: Extract Information

**From Instagram Profiles:**
- Clinic name / Business name
- Doctor names (from bio or posts)
- Location information
- Phone numbers (in bio or contact button)
- Website links
- Follower count and post count
- Specializations mentioned
- Any relevant business information from bio

**From Google Maps:**
- Full clinic address
- Phone number(s)
- Website
- Google rating and review count
- Hours of operation
- Services listed
- Any special attributes (e.g., LGBTQ+ friendly, women-owned)
- Multiple locations if applicable

#### Step 2.5: Business Model Analysis (CRITICAL & DEEP)

**"High Context Deep" Analysis is Mandatory.**
If multiple links or branches are detected, or even for single high-value clinics, you MUST perform a deep strategic analysis. This is the most important part for the sales pitch.

**Do not just list facts. Tell the *story* of their business.**

**Analyze and include in 'notes' (Detailed Paragraphs, not just bullets):**
1.  **Structure & Ownership**: Who runs the show? Is it a "Husband-Wife Power Couple"? A "Corporate Chain"? A "Legacy Family Practice"?
2.  **The "Why" (Geographic Strategy)**: Decode *why* they are located there. (e.g., "They have a 'Hub-and-Spoke' model with a Surgical Hub in the city and a Cosmetic Boutique in the posh suburbs to capture different demographics.")
3.  **Operational Vibe**:
    *   **Flagship/Surgical**: High volume, serious, implants.
    *   **Boutique/Cosmetic**: Luxury, comfort, veneers, high-net-worth individuals.
    *   **Satellite/Rural**: Catchment area for outskirts.
4.  **The Marketing Machine**: How do they get patients? (e.g., "They are using a 'Thought Leader' strategy with podcasts to build authority before the patient walks in.")
5.  **🎯 THE KILLER SALES ANGLE**:
    *   Based on the above, what exactly should I pitch?
    *   *Example:* "They have 3 brands but a fragmented presence. Pitch a 'Unified Digital HQ' that makes them look like the corporate group they actually are."

**This context is vital for closing high-ticket deals. Go deep.**

#### Step 3: Structure Data

Create clinic entry with this format:
```json
{
  "name": "Clinic Name",
  "doctorName": "Dr. Name1, Dr. Name2",
  "location": "Full address from Google Maps",
  "priority": "",
  "specializations": ["Cosmetic Dentistry", "Orthodontics", "Implants", "Root Canal", etc.],
  "contacts": [
    {"type": "Clinic General", "number": "phone number"},
    {"type": "WhatsApp", "number": "whatsapp number"}
  ],
  "website": "https://website.com",
  "clientType": "A",
  "status": "Night (Preparation)",
  "notes": "Detailed notes including:\n- Instagram: @username (X posts, Y followers)\n- Google Maps rating: X stars (Y reviews)\n- Hours: timing\n- Services: list\n- Special notes",
  "coldCallChecklist": {"0": false, "1": false, "2": false},
  "id": "clinic_[timestamp]"
}
```

#### Step 4: Valid Status Columns

**CRITICAL**: Only use these status values:
- `"Night (Preparation)"` ← **Default for new leads**
- `"Morning (Contact)"`
- `"Follow-up (2hr)"`
- `"Follow-up (Next Day)"`
- `"Follow-up (3 Day)"`
- `"Interested"`
- `"Closed - Won"`
- `"Closed - Lost"`

**DO NOT use**: "New Lead", "Lead", or any other custom status - they won't appear in UI!

#### Step 5: Add to CRM

1. Read current data: `/home/kulkaran/Work/policies/notes/dental high ticket indian clinic/personal crm/data.json`
2. Add new clinic to the array
3. Write back to data.json
4. Verify by using Playwright to check localhost:3000 shows the new clinic

---

## Common Specializations

Extract these if mentioned:
- Cosmetic Dentistry
- Orthodontics
- Implants / Implantology
- Root Canal Therapy
- Oral Surgery
- Pediatric Dentistry
- Prosthodontics
- Periodontics
- Endodontics
- Teeth Whitening
- Aligners / Invisalign
- Dental Veneers
- Full Mouth Rehabilitation

---

## File Locations

- **CRM Data**: `/home/kulkaran/Work/policies/notes/dental high ticket indian clinic/personal crm/data.json`
- **Server**: Run at `localhost:3000` (already running)
- **UI**: Open browser to `http://localhost:3000` to verify

---

## Example User Request

```
User: @drabhisingh_32si, @32si_dental
https://maps.app.goo.gl/xyz
https://maps.app.goo.gl/abc
- add this clinic
```

**My Response:**
1. Launch Playwright MCP
2. Visit both Instagram profiles
3. Visit both Google Maps links
4. Extract all relevant information
5. Create structured clinic entry
6. Add to data.json
7. Verify in browser at localhost:3000
8. Confirm completion with summary

---

## Important Notes

- **Multiple branches**: If clinic has multiple locations, include all addresses and phone numbers in single entry
- **Multiple doctors**: List all doctors comma-separated in doctorName field
- **Detailed notes**: Include Instagram stats, Google ratings, hours, and any unique features
- **Always verify**: Use Playwright to check the clinic appears in UI after adding
- **Status default**: Always use "Night (Preparation)" for new leads

---

## Troubleshooting

### If clinic doesn't appear in UI:
- Check status is one of the valid column names
- Verify JSON syntax is correct
- Check server is running on localhost:3000
- Use Playwright to inspect the UI and console logs

### Data Synchronization & Troubleshooting
- **Concurrent Editing Risk**: The CRM UI saves the *entire* clinic list at once. If you modify `data.json` manually while the UI is open and the user saves (e.g., edits a note), your manual changes will be overwritten.
  - **Fix**: Ensure the user refreshes the CRM UI *after* you update `data.json` to load the new data.
- **Stale Server**: If `data.json` is correct but the UI (and `curl`) serves old data, the Node process may be stale.
  - **Fix**: Restart the server: `pkill -f "node server/server.js"` then `node server/server.js &`.

### If Playwright MCP fails:
- System dependencies already installed (libnspr4, libnss3, libasound2t64)
- Check browser isn't in use: `ps aux | grep chromium`
- If locked, may need to kill processes or restart Claude Code

---

## Summary

**Input**: Instagram + Google Maps links
**Process**: Playwright → Extract → Structure → Add to JSON
**Output**: New clinic in CRM at "Night (Preparation)" status
**Verify**: Check localhost:3000 shows the clinic card
