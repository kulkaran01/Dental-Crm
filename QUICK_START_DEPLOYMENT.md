# 🚀 Quick Start - Deploy to Netlify

## ✅ Files Ready!

Your CRM is now ready for deployment with dual-mode support:
- ✅ `environment.js` created
- ✅ `.gitignore` created
- ✅ `index.html` updated (readonly banner + script)
- ✅ `script.js` updated (environment detection)

---

## 📝 Before You Deploy - Required Actions

### 1. Test Locally First

**Refresh your browser** and test:
```bash
# Make sure server is running
node server/server.js
```

Open: http://localhost:3000

**Check console** - you should see:
```
🌍 Environment: development
📍 Hostname: localhost
✅ CRM initialized in development mode
```

---

### 2. Update GitHub Username

**IMPORTANT**: Edit `src/js/environment.js` and replace:

```javascript
// Line 10-11: Change YOUR_USERNAME to your actual GitHub username
dataUrl: isProduction
    ? 'https://raw.githubusercontent.com/YOUR_USERNAME/dental-crm/main/data.json'
    //                                ^^^^^^^^^^^^
    //                                Replace this!
```

For example, if your GitHub username is `johndoe`:
```javascript
dataUrl: isProduction
    ? 'https://raw.githubusercontent.com/johndoe/dental-crm/main/data.json'
```

---

## 🔧 Deployment Steps (Copy & Paste)

### Step 1: Initialize Git

```bash
cd "/home/kulkaran/Work/policies/notes/dental high ticket indian clinic/personal crm"

# Initialize git repository
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Dental CRM with Netlify deployment support"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. **Repository name**: `dental-crm`
3. **Visibility**: **Private** (recommended for sensitive data)
4. **Do NOT** check "Initialize with README"
5. Click **"Create repository"**

### Step 3: Push to GitHub

**Copy the commands from GitHub** (they look like this):

```bash
# Link your local repo to GitHub
git remote add origin https://github.com/YOUR_USERNAME/dental-crm.git

# Push code
git branch -M main
git push -u origin main
```

### Step 4: Verify on GitHub

1. Refresh GitHub repo page
2. You should see all your files
3. **Important**: Check that `data.json` is there!

### Step 5: Update environment.js (if you haven't yet)

Edit `src/js/environment.js` with your actual GitHub username, then:

```bash
git add src/js/environment.js
git commit -m "Update GitHub username in environment config"
git push
```

### Step 6: Deploy to Netlify

1. Go to https://netlify.com
2. **Sign up/Login** with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **"Deploy with GitHub"**
5. Select your **`dental-crm`** repository
6. **Build settings**:
   - Branch: `main`
   - Build command: (leave empty)
   - Publish directory: `.` (dot = root)
7. Click **"Deploy site"**

### Step 7: Wait for Deployment

- Takes ~1-2 minutes
- You'll get a URL like: `random-name-123.netlify.app`

### Step 8: (Optional) Customize Domain

1. Go to **Site settings** → **Domain management**
2. Click **"Options"** → **"Edit site name"**
3. Change to: `your-dental-crm.netlify.app`

---

## 🧪 Testing Your Deployment

### Test 1: Read-Only Mode

Open your Netlify URL:
```
https://your-dental-crm.netlify.app
```

**Should see**:
- ✅ Orange "READ-ONLY MODE" banner at top
- ✅ All your clinics displayed
- ✅ Saved personalized templates viewable
- ❌ NO "Add Clinic" button
- ❌ Clicking cards shows tooltip (not edit modal)

**Console should show**:
```
🌍 Environment: production
📍 Hostname: your-dental-crm.netlify.app
📖 Running in READ-ONLY mode (Netlify deployment)
📡 Fetching clinics from: https://raw.githubusercontent.com/...
✅ Loaded X clinics
```

### Test 2: Local Mode (Still Works)

On your computer: http://localhost:3000

**Should see**:
- ❌ NO read-only banner
- ✅ "Add Clinic" button visible
- ✅ Can click cards to edit
- ✅ Can save changes
- ✅ Can generate templates

**Console should show**:
```
🌍 Environment: development
📍 Hostname: localhost
✅ CRM initialized in development mode
```

---

## 🔄 Making Changes (Workflow)

### When You Want to Add/Update Clinics:

**1. Work Locally:**
```bash
# Start server
node server/server.js
```

**2. Make Changes:**
- Open http://localhost:3000
- Add/edit clinics
- Generate templates
- Everything saves to data.json

**3. Push to GitHub:**
```bash
git add data.json
git commit -m "Added 3 new clinics from Punjab"
git push
```

**4. Wait ~1 Minute:**
- Netlify auto-deploys
- Check Netlify URL
- See your updates!

**5. View Anywhere:**
- Open Netlify URL on phone/tablet
- All your new data is there!
- Read-only - safe to share

---

## 🐛 Troubleshooting

### Issue: "Cannot load clinic data"

**Check**:
1. Is GitHub URL correct in `environment.js`?
2. Test the URL in browser:
   ```
   https://raw.githubusercontent.com/YOUR_USERNAME/dental-crm/main/data.json
   ```
3. Is your repo public or private? (Private repos need authentication)

**Fix**: Make repo public, or use Netlify environment variables

### Issue: Can still edit on Netlify

**Check console** - should see "production" mode

**Fix**:
1. Hard refresh: Ctrl+F5
2. Clear browser cache
3. Check `environment.js` loaded correctly

### Issue: Netlify not updating

**Check**:
1. Did you push to GitHub? (`git push`)
2. Check Netlify dashboard - latest deploy time
3. Manually trigger: **Deploys** → **Trigger deploy**

### Issue: Template generation not disabled

**Check**: `window.ENV_CONFIG.features.canGenerateTemplates`

Should be `false` in production

---

## 📱 Access from Mobile

1. **Open Netlify URL on phone**
2. **Bookmark it** (Add to Home Screen)
3. **View clinics & templates anywhere**
4. **Read-only** - can't accidentally change data

---

## 🔒 Security Notes

### Data Privacy:

If repo is **private**:
- ✅ Only you can see clinic data
- ✅ Safe to commit sensitive info
- ✅ Netlify needs to be configured for private repos

If repo is **public**:
- ⚠️ Anyone can see your data.json
- ⚠️ All clinic info visible
- ⚠️ Phone numbers exposed

**Recommendation**: Keep repo private!

### API Key Safety:

- ✅ DeepSeek key in `config.js`
- ✅ Only used locally
- ✅ Template generation disabled on Netlify
- ✅ No risk of key exposure

---

## ✅ Final Checklist

Before you're done:

- [ ] Tested locally (can edit)
- [ ] Updated `environment.js` with GitHub username
- [ ] Created GitHub repo (private recommended)
- [ ] Pushed code to GitHub
- [ ] Verified data.json is on GitHub
- [ ] Deployed to Netlify
- [ ] Tested Netlify URL (read-only mode works)
- [ ] Verified auto-deploy (push → updates)
- [ ] Bookmarked Netlify URL
- [ ] Tested on mobile device

---

## 🎉 You're Done!

**Local URL**: http://localhost:3000 (editing)
**Public URL**: https://your-dental-crm.netlify.app (viewing)

**Workflow**:
1. Edit locally
2. Push to GitHub
3. View anywhere!

---

**Questions?** Check the full SOP: `NETLIFY_DEPLOYMENT_SOP.md`
