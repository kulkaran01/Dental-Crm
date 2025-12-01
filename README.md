# 🦷 Dental Client CRM

A modern, locally-run CRM for managing dental clinic sales with powerful filtering, tagging, and organization.

---

## 🚀 Quick Start

### Launch
```bash
./start_crm.sh              # Linux/WSL
# OR
Double-click launch_crm.bat # Windows
```
Opens at: `http://localhost:3000`

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- That's it!

---

## ✨ Features

- **🎯 Priority System** - Hot/High/Warm/Cold tags with pulsing animations
- **📍 Location Tracking** - City/area tags with geographic filtering
- **🦷 Specialization Tags** - Track what clinics specialize in (Implants, Aligners, etc.)
- **🔍 Advanced Filtering** - Search + Location + Priority + Specialization filters
- **📊 Real-time Stats** - Active leads, Won deals, Conversion rate, High priority count
- **💬 WhatsApp Templates** - Pre-written messages to copy/paste
- **🤖 AI Assistant** - Summarize conversations with DeepSeek AI
- **📋 Cold Call Checklist** - Built-in call script tracker
- **🎨 Beautiful UI** - Modern gradient design with smooth animations

---

## 📖 Documentation

### For Users
**`USER_GUIDE.md`** - Complete guide for using the CRM
- Daily workflow
- How to add/edit clinics
- Using filters and search
- Power user tips
- Troubleshooting

### For Developers
**`PROJECT_STRUCTURE.md`** - Technical documentation
- File structure explained
- Key functions and variables
- How to add new features
- Data flow diagrams
- Debugging tips

---

## 💡 Quick Tips

**Adding Specializations:**
1. Open clinic form
2. Type "Implants" in specialization field
3. Press **Enter** (not Save!)
4. Purple chip appears
5. Repeat for more

**Power Filtering:**
- Hot + Mumbai + Implants = Your best leads today
- High Priority + Cosmetic = High-value opportunities
- Type in search bar = Find anything instantly

**Daily Workflow:**
1. Check "High Priority" stat
2. Filter by "Hot Lead"
3. Call with targeted pitch
4. Update priorities and notes
5. Plan tomorrow

---

## 🔧 Configuration

Edit `src/js/config.js` to add your DeepSeek API key:
```javascript
const config = {
    DEEPSEEK_API_KEY: 'your_api_key_here'
};
```

---

## 💾 Backup

```bash
./backup_data.sh
```
Creates timestamped backup in `backups/` folder

---

## 📁 Key Files

- `index.html` - Main interface
- `src/css/style.css` - All styling
- `src/js/script.js` - Core logic
- `server/server.js` - Backend
- `data.json` - Your clinic data

---

## 🆘 Troubleshooting

**Server won't start?**
- Check Node.js is installed: `node --version`
- Verify port 3000 is free

**Data not saving?**
- Check browser console (F12) for errors
- Verify server is running
- Check file permissions on data.json

**Need help?**
- Read `USER_GUIDE.md` for usage questions
- Read `PROJECT_STRUCTURE.md` for technical details

---

Built to help you close more dental clinic deals, faster! 🚀
