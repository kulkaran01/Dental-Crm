# 📁 Dental CRM - Project Structure

## Quick Launch
```bash
# Linux/WSL
./start_crm.sh

# Windows
Double-click: launch_crm.bat
```
Opens at: `http://localhost:3000`

---

## Folder Structure

```
personal-crm/
│
├── index.html                 # Main app interface
├── data.json                  # Your clinic data (auto-created)
│
├── src/
│   ├── css/
│   │   └── style.css         # All styling (modern gradient design)
│   ├── js/
│   │   ├── script.js         # Core logic (search, filters, CRUD)
│   │   └── config.js         # DeepSeek API key
│   └── assets/
│       └── screenshots/      # App images
│
├── server/
│   └── server.js             # Node.js backend (serves files, saves data)
│
├── docs/                      # Old documentation (can delete)
├── backups/                   # Manual data backups
│
├── launch_crm.bat            # Windows launcher
├── start_crm.sh              # Linux launcher
└── backup_data.sh            # Backup script
```

---

## Key Files Explained

### Frontend (What Users See)

**`index.html`** - Structure
- Header with stats and filters
- Kanban board columns
- Clinic form modal
- WhatsApp templates section

**`src/css/style.css`** - Styling
- CSS variables for colors/themes
- Responsive grid layout
- Card hover effects
- Chip styles (location, priority, specialization)
- Modal animations

**`src/js/script.js`** - Logic (1000+ lines)
- Data fetching/saving
- Rendering board and cards
- Search and filter functions
- Specialization management
- Form handling
- Stats calculations

**`src/js/config.js`** - Configuration
```javascript
const config = {
    DEEPSEEK_API_KEY: 'your_api_key_here'
};
```

### Backend

**`server/server.js`** - Node.js Server
- Serves static files
- GET `/api/clinics` - Returns data
- POST `/api/clinics` - Saves data
- Runs on port 3000

### Data

**`data.json`** - Database
```json
[
  {
    "id": "clinic_1234567890",
    "name": "Clinic Name",
    "doctorName": "Dr. Name",
    "location": "City",
    "priority": "hot",
    "specializations": ["Implants", "Cosmetic"],
    "contacts": [
      {"type": "Receptionist", "number": "9876543210"}
    ],
    "website": "https://...",
    "clientType": "A",
    "status": "Morning (Contact)",
    "notes": "...",
    "coldCallChecklist": {
      "0": false,
      "1": true,
      "2": false
    }
  }
]
```

---

## Important Variables & Functions

### Global State (script.js)

```javascript
// Workflow stages
const COLUMNS = [
    "Night (Preparation)",
    "Morning (Contact)",
    "Follow-up (2hr)",
    "Follow-up (Next Day)",
    "Follow-up (3 Day)",
    "Interested",
    "Closed - Won",
    "Closed - Lost"
];

// Current specializations being edited
let currentSpecializations = [];
```

### Key Functions

**Data Operations:**
- `getClinics()` - Fetch from server
- `saveClinics(clinics)` - Save to server
- `saveClinic(e)` - Save single clinic
- `deleteClinic()` - Delete clinic

**Rendering:**
- `renderBoard()` - Draw all columns and cards
- `createClinicCard(clinic)` - Create single card
- `renderSpecializationChips()` - Show specialization chips in form

**Filtering:**
- `applyFilters()` - Apply all active filters
- `updateLocationFilter()` - Rebuild location dropdown
- `updateSpecializationFilter()` - Rebuild specialization dropdown

**Stats:**
- `updateStats()` - Calculate and display metrics

**Modal:**
- `openModal(clinicId)` - Open form (add/edit)
- `closeModal()` - Close form

**Specializations:**
- `addSpecialization(spec)` - Add tag
- `renderSpecializationChips()` - Display tags

---

## How Data Flows

### Loading App
1. Browser requests `index.html`
2. Server serves HTML, CSS, JS
3. `script.js` runs `initialize()`
4. Calls `getClinics()` → Server returns `data.json`
5. Calls `renderBoard()` → Cards appear
6. Calls `updateStats()` → Metrics display

### Adding Clinic
1. Click "+ Add Clinic"
2. `openModal()` runs
3. Fill form, add specializations (press Enter)
4. Click "Save"
5. `saveClinic()` collects data
6. Calls `saveClinics()` → POST to server
7. Server writes to `data.json`
8. `renderBoard()` refreshes display

### Filtering
1. Type in search or select filter
2. `applyFilters()` runs
3. Loops through all cards
4. Shows/hides based on criteria
5. Updates column counts

### Specializations
1. Type in field → Press Enter
2. `addSpecialization()` → Pushes to array
3. `renderSpecializationChips()` → Shows purple chips
4. Click Save → Included in clinic data
5. Card displays chips on reload

---

## CSS Architecture

### Variables (Customizable)
```css
:root {
    --primary-color: #3b82f6;      /* Blue */
    --success-color: #10b981;      /* Green */
    --warning-color: #f59e0b;      /* Orange */
    --danger-color: #ef4444;       /* Red */
    --hot-color: #ff6b6b;          /* Hot priority */
}
```

### Key Classes
- `.clinic-card` - Individual clinic
- `.chip` - Base chip style
- `.chip-location` - Blue location chip
- `.chip-priority.hot` - Red pulsing chip
- `.chip-specialization` - Purple specialty chip
- `.modal-container` - Form overlay
- `.stats-bar` - Header metrics

---

## Adding New Features

### New Clinic Field

1. **Add to HTML** (`index.html`)
```html
<label for="clinic-newfield">New Field:</label>
<input type="text" id="clinic-newfield">
```

2. **Save in JS** (`script.js` → `saveClinic()`)
```javascript
const clinicData = {
    // ... existing fields
    newField: document.getElementById('clinic-newfield').value,
};
```

3. **Load in JS** (`script.js` → `openModal()`)
```javascript
document.getElementById('clinic-newfield').value = clinic.newField || '';
```

4. **Display on Card** (`createClinicCard()`)
```javascript
card.innerHTML = `
    <h4>${clinic.name}</h4>
    <p>${clinic.newField}</p>
`;
```

### New Filter

1. **Add Dropdown** (`index.html`)
```html
<select id="newfield-filter">
    <option value="">All</option>
</select>
```

2. **Populate Options** (`script.js`)
```javascript
const updateNewFieldFilter = (clinics) => {
    const filter = document.getElementById('newfield-filter');
    const values = [...new Set(clinics.map(c => c.newField))];
    filter.innerHTML = '<option value="">All</option>';
    values.forEach(val => {
        filter.innerHTML += `<option value="${val}">${val}</option>`;
    });
};
```

3. **Apply Filter** (in `applyFilters()`)
```javascript
const newFieldFilter = document.getElementById('newfield-filter').value;
const matchesNewField = !newFieldFilter || clinic.newField === newFieldFilter;
```

4. **Add Event Listener**
```javascript
document.getElementById('newfield-filter').addEventListener('change', applyFilters);
```

### New Stat

1. **Calculate** (in `updateStats()`)
```javascript
const newStat = clinics.filter(c => c.someCondition).length;
document.getElementById('stat-newstat').textContent = newStat;
```

2. **Add to HTML**
```html
<div class="stat-item">
    <span class="stat-label">New Stat</span>
    <span class="stat-value" id="stat-newstat">0</span>
</div>
```

---

## Debugging Tips

### Console Logging
Already added to key functions:
- Specialization add
- Clinic save
- Server communication

Open DevTools (F12) → Console tab

### Check Data File
```bash
cat data.json | jq .  # Pretty print
```

### Server Logs
Watch the terminal where server is running

### Network Tab
Check API calls in DevTools → Network

---

## Performance Notes

- **~1000 lines JS** - Consider splitting if grows
- **No pagination** - Fine for <100 clinics
- **File-based DB** - Simple, no SQL needed
- **Client-side filtering** - Fast for small datasets

---

## Backup & Recovery

### Manual Backup
```bash
./backup_data.sh
# Creates: backups/data_backup_YYYYMMDD_HHMMSS.json
```

### Restore
```bash
cp backups/data_backup_20XX.json data.json
```

### Migration
If changing structure, write migration script:
```javascript
const clinics = require('./data.json');
clinics.forEach(c => {
    c.newField = c.oldField || 'default';
    delete c.oldField;
});
fs.writeFileSync('data.json', JSON.stringify(clinics, null, 2));
```

---

## Quick Reference

### Start Server
```bash
cd "personal crm"
node server/server.js
```

### API Endpoints
- `GET /api/clinics` - Fetch all
- `POST /api/clinics` - Save all

### Common File Paths
- Data: `./data.json`
- Config: `./src/js/config.js`
- Styles: `./src/css/style.css`
- Logic: `./src/js/script.js`

---

This structure keeps the app simple, maintainable, and easy to extend!
