# 🚀 Dental CRM - Complete User Guide

## What This CRM Does

Track dental clinic leads through your sales pipeline with powerful filtering, tagging, and organization.

---

## Quick Start

### Launch
```bash
./start_crm.sh              # Linux/WSL
# OR
Double-click launch_crm.bat # Windows
```
Opens at: `http://localhost:3000`

### First Time Setup
1. Open `src/js/config.js`
2. Add your DeepSeek API key (for AI summaries)
3. Save and reload

---

## Features Overview

### 🎯 Priority Tags
Mark urgency level:
- **🔥 Hot Lead** - Urgent, pulsing red chip
- **⭐ High Priority** - Important, orange chip
- **👍 Warm** - Interested, green chip
- **❄️ Cold** - Low priority, gray chip

### 📍 Location Tags
Track where clinics are:
- Add city/area (e.g., "Mumbai", "Bangalore")
- Blue chips with pin icon
- Filter by location

### 🦷 Specialization Tags
Track what they do:
- Type and press Enter: "Implants", "Aligners", "Cosmetic"
- Purple chips with tooth icon
- Filter by specialization
- Add multiple per clinic

### 🔍 Search & Filters
- **Search bar** - Type anything, searches everywhere
- **Location filter** - Show specific cities
- **Priority filter** - Focus on urgency
- **Specialization filter** - Find by specialty
- **Combine filters** - Ultimate power

### 📊 Stats Dashboard
Real-time metrics:
- **Active** - Leads in progress
- **Won** - Closed deals
- **Rate** - Conversion %
- **High Priority** - Urgent leads count

---

## Daily Workflow

### Morning Routine
1. Open CRM
2. Check "High Priority" stat
3. Filter by "🔥 Hot Lead"
4. See specializations on cards
5. Call with targeted pitch

### During Calls
1. Click clinic card to open
2. Take notes
3. Update priority based on interest
4. Add specializations you learn
5. Save

### End of Day
1. Review "Warm" leads
2. Plan tomorrow's priorities
3. Move cards through pipeline
4. Backup data: `./backup_data.sh`

---

## How to Use Everything

### Adding a Clinic

1. Click **"+ Add Clinic"**
2. Fill in:
   - Clinic Name ✓
   - Doctor's Name
   - Location (city/area)
   - Priority (if urgent)
   - Specializations (type and press Enter)
   - Contact Numbers (+ button for more)
   - Website
   - Client Type (A/B/C)
   - Notes
3. Click **"💾 Save"**

### Adding Specializations

**In the Form:**
1. Find "🦷 Specializations" field
2. Type "Implants"
3. Press **Enter** (not Save!)
4. Purple chip appears
5. Repeat for more
6. Click × to remove

**Common Specializations:**
- Implants
- Aligners / Invisalign
- Cosmetic Dentistry
- Veneers
- Orthodontics
- Teeth Whitening
- Smile Makeover
- Root Canal Treatment
- Pediatric Dentistry
- Periodontics

### Editing a Clinic

1. Click any clinic card
2. Update fields
3. Add/remove specializations
4. Save

### Moving Through Pipeline

**Option 1:** Edit clinic
- Click card → Change "Status" → Save

**Option 2:** Visual tracking
- Use status to know where they are
- Update during daily review

### Filtering

**Single Filter:**
- Select from any dropdown
- Cards show/hide instantly

**Multi-Filter (Power Mode):**
- Hot + Mumbai + Implants = Urgent local implant leads
- High Priority + Cosmetic + Type B = Upgrade opportunities
- Warm + Aligners = Aligner prospects to nurture

**Search:**
- Type clinic name, doctor, location, or specialization
- Real-time results

### Using Stats

- **High Priority** - How many urgent calls today?
- **Active** - Current workload
- **Won** - Celebrate wins!
- **Rate** - Track improvement

---

## Card Visual Guide

```
┌──────────────────────────────────────┐
│ Premium Dental Clinic                │  ← Clinic name
│ Dr. Mehta | Receptionist: 9876543210 │  ← Doctor & contact
│                                      │
│ 📍 Mumbai  🔥 Hot Lead               │  ← Location & priority
│ 🦷 Implants  🦷 Cosmetic  🦷 Veneers │  ← Specializations
└──────────────────────────────────────┘
```

**Color Meanings:**
- **Left border** - Red (Type A), Yellow (Type B), Green (Type C)
- **Blue chips** - Location
- **Red/Orange/Green/Gray chips** - Priority
- **Purple chips** - Specializations

---

## Power User Tips

### Tip 1: Geographic Calling
1. Filter by location "Mumbai"
2. Call all Mumbai clinics together
3. More efficient use of time
4. Better energy management

### Tip 2: Priority Triage
- New lead → Hot
- Interested → High Priority
- Maybe later → Warm
- Not interested → Cold (or Closed - Lost)

### Tip 3: Specialization Strategy
- Filter by high-value specializations (Implants, Cosmetic)
- Customize pitch per specialty
- Show relevant portfolio pieces
- Higher conversion rates

### Tip 4: Search Everything
Can't remember clinic name?
- Search doctor name
- Search location
- Search specialization
- Instant results

### Tip 5: Combine for Gold
**Example Combos:**
- Hot + Implants + Type B = High-value urgent upgrades
- High + Cosmetic + Mumbai = Local cosmetic opportunities
- Warm + Aligners = Nurture aligner prospects

### Tip 6: Daily Review
End of day:
- Move cards that progressed
- Update priorities
- Add notes from calls
- Plan tomorrow's focus

---

## Client Types Explained

### Type A - No Website
**Red border**
- They have NO website at all
- Easiest to close
- High need, low objections

**Your Pitch:**
- "You need online presence"
- "Competitors have sites"
- "Patients search online first"

### Type B - Bad/Outdated Website
**Yellow border**
- Existing site is terrible
- Best conversion rate
- Visual comparison works

**Your Pitch:**
- "Your clinic looks premium, site doesn't"
- Show before/after
- "High-ticket patients judge in 3 seconds"

### Type C - Good Website
**Green border**
- Already have good site
- Hardest to convert
- Need specific value add

**Your Pitch:**
- Landing pages
- Treatment-specific pages
- Better conversions
- Advanced features

---

## Pipeline Stages

### Night (Preparation)
Research phase:
- Found clinic
- Preparing preview
- Not yet contacted

### Morning (Contact)
First contact:
- Called/messaged today
- Waiting for response
- Sent preview

### Follow-up (2hr)
Short-term:
- Sent 2hr follow-up
- Checking interest
- Offering full version

### Follow-up (Next Day)
Medium-term:
- Day 2 follow-up
- Asking preferences
- Comparison offers

### Follow-up (3 Day)
Final push:
- Day 3 soft close
- Urgency message
- Last chance

### Interested
Hot prospects:
- Expressed interest
- Discussing details
- Negotiating price

### Closed - Won
Success! 🎉
- Deal closed
- Payment received
- Project starting

### Closed - Lost
Not this time:
- Rejected offer
- No budget
- Not interested

---

## WhatsApp Templates

Scroll to bottom of CRM for pre-written messages:
- Initial preview
- 2hr follow-up
- Next day follow-up
- 3-day soft close

**Usage:**
1. Click "Copy" button
2. Paste in WhatsApp
3. Personalize with name/specifics
4. Send

---

## AI Assistant

**Use Case:** Summarize long conversation transcripts

1. Open clinic modal
2. Scroll to "🤖 AI Assistant"
3. Paste conversation
4. Click "✨ Summarize with AI"
5. Review bullet points
6. Auto-appends to notes

**Requires:** DeepSeek API key in `config.js`

---

## Cold Call Checklist

Built-in call script:
- [ ] Ask who handles website
- [ ] Mention preview
- [ ] Get WhatsApp number

**Usage:**
1. Open clinic before calling
2. Check off as you go
3. Saves with clinic

---

## Troubleshooting

### Specializations Not Saving
1. Open browser console (F12)
2. Check for error messages
3. Verify server is running
4. Try refreshing page

### Server Not Starting
```bash
# Check if Node.js is installed
node --version

# Check if port 3000 is free
lsof -i :3000  # Linux
netstat -ano | findstr :3000  # Windows
```

### Data Lost
```bash
# Restore from backup
cp backups/data_backup_20XX.json data.json
```

### Filters Not Working
- Refresh page
- Check browser console
- Verify data.json is valid JSON

---

## Keyboard Shortcuts

- **Enter** - Add specialization (when in spec field)
- **Escape** - Close modal (click outside)
- **Tab** - Navigate form fields

---

## Best Practices

### Daily
- Update priorities after calls
- Add notes immediately
- Move cards through stages
- Use filters to focus

### Weekly
- Review conversion rates
- Backup data
- Update stale leads
- Clean up duplicates

### Monthly
- Analyze what converts best
- Adjust strategy
- Archive closed leads
- Celebrate wins

---

## Data Management

### Backup
```bash
./backup_data.sh
```
Creates timestamped file in `backups/`

### Export
`data.json` is human-readable JSON
- Import to Excel/Sheets
- Use for reports
- Migrate to other systems

### Clean Up
Periodically:
- Delete old lost leads
- Archive won deals
- Update stale information

---

## Quick Reference Card

### Essential Actions
| Action | How |
|--------|-----|
| Add clinic | + Add Clinic button |
| Edit clinic | Click card |
| Add specialization | Type, press Enter |
| Filter | Use dropdowns |
| Search | Type in search bar |
| Save | 💾 Save button |
| Backup | `./backup_data.sh` |

### Chip Colors
| Color | Meaning |
|-------|---------|
| 🔴 Red | Type A (no site) or Hot priority |
| 🟡 Yellow | Type B (bad site) |
| 🟢 Green | Type C (good site) or Warm priority |
| 🔵 Blue | Location |
| 🟣 Purple | Specializations |
| ⚫ Gray | Cold priority |

### Filter Combos
| Goal | Filters |
|------|---------|
| Today's urgent calls | Hot priority |
| Geographic planning | Location |
| High-value leads | Hot + Implants/Cosmetic |
| Easy wins | Type A + High Priority |
| Nurture list | Warm priority |

---

## Support

### Issues
- Check browser console (F12)
- Verify server is running
- Check `data.json` is valid
- Review `PROJECT_STRUCTURE.md` for technical details

### Extending
See `PROJECT_STRUCTURE.md` for:
- Adding new fields
- Creating new filters
- Customizing styles
- Database structure

---

**You're all set! This CRM will help you close more deals, faster. Use the filters, track specializations, and stay organized. Good luck! 🚀**
