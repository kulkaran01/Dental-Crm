# 🚀 Netlify Deployment SOP - Read-Only CRM

## 📋 Architecture Overview

**Goal**: Deploy CRM to Netlify where it's viewable anywhere, but editable only locally.

### Two Modes:

1. **Local Mode** (Your Computer):
   - ✅ Full editing: Add/edit clinics, generate templates
   - ✅ Node.js backend running (saves to data.json)
   - ✅ DeepSeek API calls work
   - ✅ All features enabled

2. **Deployed Mode** (Netlify - Public):
   - 👁️ Read-only: View clinics and templates
   - ❌ No editing (no save/delete buttons)
   - ❌ No API calls (view saved templates only)
   - ✅ Accessible from anywhere on any device
   - ✅ Auto-updates when you push to GitHub

### Data Flow:

```
Your Computer (Local)              GitHub              Netlify (Public)
─────────────────────             ──────              ────────────────

Make changes locally     →     Push to GitHub    →    Auto-deploys
(Add clinics, generate)         (data.json updated)   (Shows updated data)

                         ←     Fetch data.json   ←    Read-only view
```

---

## 🛠️ Setup Steps

### Prerequisites:
- [x] Git installed
- [x] GitHub account
- [x] Netlify account (free)
- [x] Your CRM working locally

---

## Step 1: Prepare CRM for Dual Mode

### 1.1 Create Environment Detection Script

Create `src/js/environment.js`:

```javascript
// Detect if running on Netlify (production) or locally (development)
const isProduction = window.location.hostname !== 'localhost' &&
                     window.location.hostname !== '127.0.0.1';

const config = {
    isProduction: isProduction,
    isLocalhost: !isProduction,

    // GitHub raw URL for production data
    // Replace with your actual repo details after creating it
    dataUrl: isProduction
        ? 'https://raw.githubusercontent.com/YOUR_USERNAME/dental-crm/main/data.json'
        : '/api/clinics',

    // Features enabled/disabled based on environment
    features: {
        canEdit: !isProduction,      // Only allow editing locally
        canGenerateTemplates: !isProduction, // Only generate locally
        canSave: !isProduction,       // Only save locally
        canDelete: !isProduction,     // Only delete locally
        showReadOnlyBanner: isProduction // Show banner on deployed version
    }
};

// Export for use in other files
window.ENV_CONFIG = config;
```

### 1.2 Update index.html

Add environment script BEFORE other scripts:

```html
<script src="src/js/environment.js"></script>
<script src="src/js/config.js"></script>
<script src="src/js/script.js"></script>
```

Add read-only banner (shows only on Netlify):

```html
<!-- Read-Only Banner (shows on deployed version) -->
<div id="readonly-banner" style="display: none; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 12px 24px; text-align: center; font-weight: 600;">
    👁️ READ-ONLY MODE - Viewing from Netlify. Run locally to make changes.
</div>
```

### 1.3 Update script.js

Modify getClinics() to fetch from GitHub in production:

```javascript
const getClinics = async () => {
    try {
        const url = window.ENV_CONFIG?.dataUrl || '/api/clinics';
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const clinics = await response.json();
        return clinics;
    } catch (error) {
        console.error('Error fetching clinics:', error);

        // On Netlify, if GitHub fetch fails, show friendly message
        if (window.ENV_CONFIG?.isProduction) {
            alert('Unable to load clinic data from GitHub. Please check your internet connection.');
        }

        return [];
    }
};
```

Disable editing in production:

```javascript
const initialize = async () => {
    // Show read-only banner if on Netlify
    if (window.ENV_CONFIG?.features.showReadOnlyBanner) {
        document.getElementById('readonly-banner').style.display = 'block';
    }

    // Hide add/edit buttons in production
    if (!window.ENV_CONFIG?.features.canEdit) {
        document.getElementById('add-clinic-btn').style.display = 'none';
    }

    populateStatusDropdown();
    populateMessageTemplates();
    populateWorkflowModal();
    await renderBoard();
};
```

Disable save functionality in cards:

```javascript
const createClinicCard = (clinic) => {
    // ... existing code ...

    // Only make cards clickable if editing is allowed
    if (window.ENV_CONFIG?.features.canEdit) {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('download-btn')) {
                openModal(clinic.id);
            }
        });
    } else {
        // In production, just show info tooltip
        card.style.cursor = 'default';
        card.title = 'Read-only mode - run locally to edit';
    }

    return card;
};
```

---

## Step 2: Create .gitignore File

Create `.gitignore` in your project root:

```
# Node modules
node_modules/

# Environment files
.env
.env.local

# Logs
*.log

# OS files
.DS_Store
Thumbs.db

# Backup files
backups/

# Don't ignore data.json - we WANT this in GitHub!
# data.json
```

**IMPORTANT**: We want data.json in GitHub so Netlify can fetch it!

---

## Step 3: Initialize Git Repository

```bash
cd "/home/kulkaran/Work/policies/notes/dental high ticket indian clinic/personal crm"

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Dental CRM with dual-mode support"
```

---

## Step 4: Create GitHub Repository

### 4.1 On GitHub.com:

1. Go to https://github.com
2. Click "+" → "New repository"
3. **Repository name**: `dental-crm` (or your choice)
4. **Visibility**: Choose:
   - **Private** (recommended - only you can see)
   - Public (anyone can view your clinic data!)
5. **Do NOT** initialize with README (we already have files)
6. Click "Create repository"

### 4.2 Push to GitHub:

Copy the commands from GitHub, should look like:

```bash
git remote add origin https://github.com/YOUR_USERNAME/dental-crm.git
git branch -M main
git push -u origin main
```

**IMPORTANT**: Replace `YOUR_USERNAME` with your actual GitHub username!

---

## Step 5: Update environment.js with Your GitHub URL

After creating the repo, update `src/js/environment.js`:

```javascript
dataUrl: isProduction
    ? 'https://raw.githubusercontent.com/YOUR_USERNAME/dental-crm/main/data.json'
    : '/api/clinics',
```

Replace:
- `YOUR_USERNAME` → Your GitHub username
- `dental-crm` → Your repo name (if different)

Commit this change:

```bash
git add src/js/environment.js
git commit -m "Update GitHub data URL"
git push
```

---

## Step 6: Deploy to Netlify

### 6.1 Sign up / Log in:

1. Go to https://www.netlify.com
2. Sign up with GitHub (easiest)

### 6.2 Create New Site:

1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Authorize Netlify to access GitHub
4. Select your **dental-crm** repository

### 6.3 Configure Build Settings:

**Build settings:**
- **Branch to deploy**: `main`
- **Build command**: Leave empty (we're deploying as-is)
- **Publish directory**: `.` (root directory)

Click **"Deploy site"**

### 6.4 Wait for Deployment:

- Takes ~1-2 minutes
- You'll see "Site is live" with a random URL like: `random-name-123456.netlify.app`

### 6.5 Custom Domain (Optional):

1. Click **"Domain settings"**
2. Click **"Edit site name"**
3. Change to something like: `yourname-dental-crm.netlify.app`

---

## Step 7: Test Deployment

### 7.1 Open Netlify URL:

Visit your new URL: `https://yourname-dental-crm.netlify.app`

### 7.2 Verify Read-Only Mode:

✅ Should see orange "READ-ONLY MODE" banner at top
✅ Should see all your clinics
✅ Should see personalized templates (saved ones)
✅ Should NOT see "Add Clinic" button
✅ Clicking cards should NOT open edit modal
✅ Should NOT be able to generate new templates

### 7.3 Test Local Mode:

On your computer: http://localhost:3000

✅ NO read-only banner
✅ CAN click "Add Clinic"
✅ CAN edit clinics
✅ CAN generate templates
✅ Changes save to data.json

---

## Step 8: Workflow - Making Changes

### When you want to add/update clinics:

1. **On your computer**, run:
   ```bash
   cd "personal crm"
   node server/server.js
   ```

2. **Open**: http://localhost:3000

3. **Make changes**:
   - Add new clinics
   - Generate personalized templates
   - Update information

4. **Commit to GitHub**:
   ```bash
   git add data.json
   git commit -m "Update: Added 3 new clinics"
   git push
   ```

5. **Netlify auto-deploys** (takes ~1 minute)

6. **View from anywhere**:
   - Open Netlify URL on phone/tablet/other computer
   - See your updates!

---

## 📊 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    YOUR COMPUTER (Local)                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  http://localhost:3000                                      │
│                                                             │
│  ┌─────────────────┐         ┌──────────────────┐         │
│  │   index.html    │────────▶│  Node.js Server  │         │
│  │   (Frontend)    │         │  (Backend)       │         │
│  └─────────────────┘         └──────────────────┘         │
│          │                            │                     │
│          │                            ▼                     │
│          │                    ┌──────────────┐            │
│          │                    │  data.json   │            │
│          │                    │  (Storage)   │            │
│          │                    └──────────────┘            │
│          │                            │                     │
│          ▼                            │                     │
│  ✅ Can Edit                          │                     │
│  ✅ Can Save                          │                     │
│  ✅ Can Generate Templates            │                     │
│                                       │                     │
└───────────────────────────────────────┼─────────────────────┘
                                        │
                                        │ git push
                                        ▼
┌─────────────────────────────────────────────────────────────┐
│                         GITHUB                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Repository: dental-crm                                     │
│                                                             │
│  ┌──────────────────────────────────────────────────┐     │
│  │  📁 index.html                                    │     │
│  │  📁 src/                                          │     │
│  │  📄 data.json  ◀── Updated when you push         │     │
│  └──────────────────────────────────────────────────┘     │
│                          │                                  │
└──────────────────────────┼──────────────────────────────────┘
                           │
                           │ Auto-deploy on push
                           │ Fetch raw data.json
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    NETLIFY (Production)                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  https://yourname-dental-crm.netlify.app                    │
│                                                             │
│  ┌─────────────────────────────────────────────────┐      │
│  │  Static HTML/CSS/JS                             │      │
│  │  Fetches data from GitHub raw URL              │      │
│  │                                                 │      │
│  │  fetch('https://raw.githubusercontent.com/      │      │
│  │         you/dental-crm/main/data.json')         │      │
│  └─────────────────────────────────────────────────┘      │
│                                                             │
│  🚫 READ-ONLY MODE                                          │
│  👁️ Can view clinics                                        │
│  👁️ Can view saved templates                                │
│  ❌ Cannot edit                                             │
│  ❌ Cannot save                                             │
│  ❌ Cannot generate new templates                           │
│                                                             │
│  Accessible from ANY device with internet                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔒 Security Considerations

### Data Privacy:

**⚠️ IMPORTANT**: If your repo is **public**, anyone can see:
- All clinic names, doctors, locations
- Phone numbers
- Notes
- Personalized templates

**Recommendations**:
1. Use **private** GitHub repo (free on GitHub)
2. Or anonymize sensitive data before committing
3. Don't commit API keys (already in .gitignore)

### API Key Protection:

Your DeepSeek API key in `config.js`:
- ✅ Only used locally (not on Netlify)
- ✅ Template generation disabled on Netlify
- ✅ No risk of key exposure on deployed site

---

## 🐛 Troubleshooting

### Issue: Netlify shows "Cannot fetch data"

**Cause**: GitHub URL wrong or data.json not in repo

**Fix**:
1. Check `src/js/environment.js` has correct URL
2. Verify data.json is in GitHub repo
3. Test URL manually in browser:
   ```
   https://raw.githubusercontent.com/YOUR_USERNAME/dental-crm/main/data.json
   ```

### Issue: Changes don't appear on Netlify

**Cause**: Didn't push to GitHub or Netlify didn't redeploy

**Fix**:
1. Make sure you pushed: `git push`
2. Check Netlify dashboard for latest deploy
3. Manually trigger deploy: Site settings → Deploys → Trigger deploy

### Issue: Can still edit on Netlify

**Cause**: `environment.js` not detecting production correctly

**Fix**:
1. Clear browser cache
2. Check console: `console.log(window.ENV_CONFIG)`
3. Verify `isProduction` is `true` on Netlify

### Issue: Templates not showing on Netlify

**Cause**: Template generation button still trying to call API

**Fix**:
- Templates must be generated locally first
- Then commit data.json with templates
- Netlify will show saved templates only

---

## 📱 Access from Mobile

Once deployed:

1. **Bookmark Netlify URL** on phone: `https://yourname-dental-crm.netlify.app`
2. **View clinics** anywhere
3. **Copy templates** directly on phone
4. **Read-only** - can't accidentally edit

---

## 🔄 Auto-Deploy Workflow

Netlify automatically rebuilds when you push to GitHub:

```
You make local changes
      ↓
Save clinics (data.json updates)
      ↓
git add data.json
      ↓
git commit -m "Added new clinic"
      ↓
git push
      ↓
GitHub receives push
      ↓
Webhook triggers Netlify
      ↓
Netlify rebuilds site (~1 min)
      ↓
New data appears on Netlify URL
```

**No manual deploy needed!** Just push to GitHub.

---

## 📈 Cost Breakdown

| Service | Cost | Limits |
|---------|------|--------|
| GitHub (Private repo) | FREE | Unlimited repos |
| Netlify (Free tier) | FREE | 100 GB bandwidth/month |
| DeepSeek API | ~$0.0005/request | Pay as you go |

**Total monthly cost**: $0 (unless you exceed free tiers)

---

## ✅ Final Checklist

Before going live:

- [ ] Created GitHub account
- [ ] Created Netlify account
- [ ] Added `environment.js` with GitHub URL
- [ ] Added read-only banner to index.html
- [ ] Updated script.js with environment checks
- [ ] Tested locally (can edit)
- [ ] Pushed to GitHub
- [ ] Deployed to Netlify
- [ ] Tested Netlify (read-only works)
- [ ] Verified auto-deploy (push → updates)
- [ ] Bookmarked Netlify URL
- [ ] Documented your workflow

---

## 📚 Resources Used

**Netlify Documentation:**
- [Build configuration overview](https://docs.netlify.com/build/configure-builds/overview/)
- [Create deploys](https://docs.netlify.com/deploy/create-deploys/)
- [A Step-by-Step Guide: Deploying on Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)

**GitHub Integration:**
- [GitHub Apps - Netlify](https://github.com/apps/netlify)
- [The Beginner's Guide to Netlify Continuous Deployment from Github for React Apps](https://hackernoon.com/netlify-continuous-deployment-github-react-lambdaschool-67f3ae658d31)

**Fetching Data from GitHub:**
- [HTML Automatically fetching JSON file from GitHub repo](https://stackoverflow.com/questions/22403218/html-automatically-fetching-json-file-from-github-repo)
- [Fetching JSON from GitHub](https://www.iozeey.com/blog/javascript/how-to-get-json-from-github-repo-as-raw-file.html)
- [Serve JSON Data from Github Pages](https://stackoverflow.com/questions/39199042/serve-json-data-from-github-pages)

**Static API Hosting:**
- [Delivering JSON Data with Netlify](https://dev.to/alexmercedcoder/delivering-json-data-with-netlify-1j96)
- [Deploying a Static API to Netlify](https://www.seancdavis.com/posts/deploy-static-api-netlify/)

---

**Created**: December 1, 2025
**Status**: Ready for Implementation
**Estimated Setup Time**: 30-45 minutes
