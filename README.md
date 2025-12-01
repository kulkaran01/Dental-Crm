# 🦷 Dental Client CRM

A dual-mode CRM system for managing dental clinic sales with AI-powered personalization. Edit locally, view anywhere.

## 🌟 Overview

This CRM helps you manage high-ticket dental clinic leads with:
- **Local Mode**: Full editing capabilities on your computer
- **Netlify Mode**: Read-only viewing from any device
- **AI-Powered Templates**: Personalized WhatsApp messages using DeepSeek AI
- **Smart Caching**: Generated templates saved for offline access

---

## 🏗️ Dual-Mode Architecture

### Local Mode (Development)
Run on your computer for full editing:
```bash
node server/server.js
# Opens at http://localhost:3000
```

**Features Enabled:**
- ✅ Add/Edit/Delete clinics
- ✅ Generate AI personalized templates
- ✅ Save changes to data.json
- ✅ Full CRM functionality

### Netlify Mode (Production)
Access from anywhere (read-only):
```
https://kulokaran-crm.netlify.app
```

**Features Enabled:**
- ✅ View all clinic data
- ✅ View saved personalized templates
- ✅ Search and filter clinics
- ❌ Cannot edit or save changes
- ❌ Cannot generate new templates

**How It Works:**
- Fetches data from: `https://raw.githubusercontent.com/kulkaran01/Dental-Crm/main/data.json`
- Environment detection in `src/js/environment.js`
- Automatically disables editing features in production

---

## ✨ Key Features

### 1. Kanban Board
Drag-and-drop cards across sales pipeline stages:
- 🔵 Lead
- 📞 Contacted
- 💬 In Discussion
- 📝 Proposal Sent
- ✅ Won
- ❌ Lost

### 2. Priority System
Visual priority indicators:
- 🔥 **Hot Lead** - Red pulsing animation
- ⭐ **High Priority** - Yellow highlight
- 👍 **Warm** - Green indicator
- ❄️ **Cold** - Blue indicator

### 3. Advanced Filtering
Multi-dimensional filtering:
- 🔍 **Search**: Clinic name, doctor, location, notes
- 📍 **Location Filter**: City/area dropdown
- 🎯 **Priority Filter**: Hot/High/Warm/Cold
- 🦷 **Specialization Filter**: Implants, Aligners, Cosmetic, etc.

### 4. AI-Powered Personalized Templates
**The main feature of this CRM!**

Generate custom WhatsApp messages for each clinic:
- Uses clinic data (name, doctor, location, specializations)
- Powered by DeepSeek AI
- Templates saved and cached locally
- View from anywhere on Netlify

**How It Works:**
1. Click a clinic card
2. Click "🤖 Generate Personalized Templates"
3. AI creates 6 customized messages:
   - **Pre-Preview Outreach** (3 variations)
   - **Initial Outreach** (3 variations)
4. Templates saved to clinic data
5. Button turns green: "👁️ View Personalized Templates"
6. View anytime without regenerating

### 5. Real-Time Statistics
Dashboard stats:
- **Active**: Total leads in pipeline
- **Won**: Closed deals
- **Rate**: Win percentage
- **High Priority**: Urgent leads count

### 6. Cold Call Checklist
Built-in call script tracker:
- ☑️ Greeting & Introduction
- ☑️ Qualify Current Website
- ☑️ Pain Point Discovery
- ☑️ Value Proposition
- ☑️ Portfolio Showcase
- ☑️ Close & Next Steps

### 7. Contact Management
Multiple contact numbers per clinic:
- Primary, Secondary, WhatsApp
- One-click download clinic data as JSON

### 8. AI Conversation Summarizer
Paste call transcripts, get AI summaries

---

## 🔑 Key Functions & Architecture

### Environment Detection
**File:** `src/js/environment.js`

```javascript
const envConfig = {
    isProduction: window.location.hostname !== 'localhost',
    dataUrl: isProduction
        ? 'https://raw.githubusercontent.com/kulkaran01/Dental-Crm/main/data.json'
        : '/api/clinics',
    features: {
        canEdit: !isProduction,
        canGenerateTemplates: !isProduction,
        canSave: !isProduction
    }
};
```

**Purpose:** Detects if running locally or on Netlify, adjusts features accordingly

---

### Data Flow

#### Local Mode:
```
User → Frontend → Node.js Server → data.json → Save
```

#### Netlify Mode:
```
User → Frontend → GitHub Raw URL → data.json → Read-Only
```

---

### Main Functions

#### 1. `getClinics()`
**Location:** `src/js/script.js:697`

Fetches clinic data:
- **Local**: `fetch('/api/clinics')` → Node.js server
- **Production**: `fetch('https://raw.githubusercontent.com/...')` → GitHub

#### 2. `saveClinics(clinics)`
**Location:** `src/js/script.js:721`

Saves clinic data:
- **Local**: `POST /api/clinics` → Writes to data.json
- **Production**: Blocked with warning message

#### 3. `openModal(clinicId)`
**Location:** `src/js/script.js:1071`

Opens clinic details:
- **Local**: Full editing modal
- **Production**: Read-only view (all inputs disabled)

#### 4. `handleGeneratePersonalizedTemplates()`
**Location:** `src/js/script.js:1765`

Generates AI templates:
- Checks for cached templates first
- Calls DeepSeek API if needed
- Saves templates to clinic data
- Shows in modal with copy buttons

**Caching Logic:**
```javascript
// Check cache
if (!forceRegenerate && clinicId) {
    const saved = await getSavedPersonalizedTemplates(clinicId);
    if (saved) {
        displayPersonalizedTemplates(saved, clinicName, true);
        return; // Skip API call
    }
}

// Generate new
const templates = await callDeepSeekAPI(clinicData, templateChains);
await savePersonalizedTemplates(clinicId, templates);
```

#### 5. `callDeepSeekAPI(clinicData, templates)`
**Location:** `src/js/script.js:1388`

Calls DeepSeek AI:
- Sends clinic data + template chains
- AI fills placeholders and personalizes
- Returns 6 customized templates
- Handles JSON parsing and errors

#### 6. `displayPersonalizedTemplates(templates, name, cached)`
**Location:** `src/js/script.js:1520`

Displays templates:
- Shows cached or newly generated templates
- Adds "🔄 Regenerate" button if cached
- Copy-to-clipboard for each template
- Responsive modal design

#### 7. `createClinicCard(clinic)`
**Location:** `src/js/script.js:748`

Creates clinic cards:
- Priority indicators (pulsing animations)
- Location and specialization chips
- Click to open modal
- Download button

---

## 📊 Data Structure

### Clinic Object
```json
{
    "id": "unique-id",
    "name": "Smile Dental Clinic",
    "doctorName": "Dr. Sharma",
    "location": "Andheri, Mumbai, Maharashtra",
    "priority": "hot",
    "specializations": ["Implants", "Aligners"],
    "contacts": [
        { "type": "Primary", "number": "+91 98765 43210" },
        { "type": "WhatsApp", "number": "+91 98765 43210" }
    ],
    "website": "https://smiledental.com",
    "clientType": "B",
    "status": "In Discussion",
    "notes": "Interested in website redesign",
    "coldCallChecklist": { "0": true, "1": true },
    "personalizedTemplates": [
        {
            "name": "Pre-Preview 1",
            "content": "Hi Dr. Sharma! I'm reaching out from..."
        }
    ],
    "personalizedTemplatesGeneratedAt": "2025-12-01T10:30:00.000Z"
}
```

---

## 🚀 Deployment Workflow

### 1. Work Locally
```bash
# Start server
node server/server.js

# Open in browser
http://localhost:3000

# Make changes:
- Add/edit clinics
- Generate personalized templates
- Update priorities and notes
```

### 2. Push to GitHub
```bash
git add data.json
git commit -m "Updated clinic data"
git push
```

### 3. Netlify Auto-Deploys
- Takes ~1-2 minutes
- No manual action needed
- Changes live on Netlify URL

### 4. View Anywhere
```
https://kulokaran-crm.netlify.app
```
- All your updates visible
- Read-only mode
- View personalized templates

---

## 🔧 Configuration

### DeepSeek API Key
**File:** `src/js/config.js`

```javascript
const config = {
    DEEPSEEK_API_KEY: 'your_api_key_here'
};
```

**Get API Key:** https://platform.deepseek.com

---

## 📱 Mobile Access

### Add to Home Screen

**iPhone:**
1. Open Netlify URL in Safari
2. Tap Share → "Add to Home Screen"

**Android:**
1. Open Netlify URL in Chrome
2. Menu → "Add to Home screen"

---

## 🎯 Daily Workflow

### Morning Routine:
1. Open localhost:3000
2. Check "High Priority" stat
3. Filter by "Hot Lead"
4. Review personalized templates
5. Copy templates to WhatsApp
6. Make calls

### After Each Call:
1. Update clinic notes
2. Move card to next stage
3. Adjust priority if needed
4. Set follow-up reminders

### End of Day:
1. Review "In Discussion" column
2. Update priorities for tomorrow
3. Push changes to GitHub
4. Access from phone during evening

---

## 🛠️ Technical Stack

- **Frontend**: Vanilla JavaScript (no frameworks)
- **Backend**: Node.js + Express
- **Database**: JSON file (simple, portable)
- **AI**: DeepSeek API
- **Hosting**: Netlify (static)
- **Version Control**: GitHub
- **CSS**: Custom (no libraries)

---

## 📁 File Structure

```
personal crm/
├── index.html              # Main UI
├── src/
│   ├── css/
│   │   └── style.css       # All styling
│   └── js/
│       ├── environment.js  # Environment detection
│       ├── config.js       # API keys
│       └── script.js       # Main application logic
├── server/
│   └── server.js           # Node.js backend
├── data.json               # Clinic database
└── README.md               # This file
```

---

## 🔐 Security Notes

### GitHub Repository
- Currently **public** (required for Netlify data fetching)
- Clinic data visible to anyone with repo URL
- For private data, consider alternative setup

### API Key
- Stored in `config.js`
- Only used locally (not deployed to Netlify)
- Template generation disabled in production

---

## 🐛 Troubleshooting

### "Cannot load clinic data" on Netlify
**Check:**
- Is data.json in GitHub repo?
- Test raw URL: https://raw.githubusercontent.com/kulkaran01/Dental-Crm/main/data.json
- Is repo public?

**Fix:**
```bash
git add data.json
git commit -m "Add data.json"
git push
```

### Green button not clickable
**Check:**
- Wait for Netlify deploy to complete (~2 minutes)
- Hard refresh: Ctrl+F5

### Templates not generating
**Check:**
- API key configured in `config.js`
- Running on localhost (not Netlify)
- Clinic has name and doctor name filled

---

## 📈 Future Enhancements

Potential features to add:
- Email integration
- Calendar reminders
- Analytics dashboard
- Export to Excel
- Team collaboration
- Custom template chains

---

## 🎉 Summary

This CRM combines:
- ✅ Simple local editing
- ✅ Cloud accessibility
- ✅ AI personalization
- ✅ Zero hosting costs
- ✅ Full data ownership

**Local URL:** http://localhost:3000 (editing)
**Public URL:** https://kulokaran-crm.netlify.app (viewing)
**GitHub:** https://github.com/kulkaran01/Dental-Crm

---

Built to help you close more dental clinic deals, faster! 🚀
