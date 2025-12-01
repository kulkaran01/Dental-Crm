# 🐛 Debug Instructions - Template Caching Issue

## Steps to Debug:

1. **Refresh the browser** (Ctrl+F5 or Cmd+Shift+R to hard refresh)

2. **Open browser console** (F12 or Right-click → Inspect → Console tab)

3. **Clear console** (click the 🚫 icon or type `clear()`)

4. **Open a clinic** that you want to test

5. **Click "Generate Templates"** (first time)

6. **Watch the console** - You should see:
   ```
   Generate templates - forceRegenerate: false, clinicId: clinic_xxxxx
   Checking for saved templates...
   Getting saved templates for clinic: clinic_xxxxx
   Clinic found: [Clinic Name]
   Has saved templates: false
   No saved templates found, will generate new ones
   API call successful, templates generated
   Attempting to save templates...
   Saving templates for clinic: clinic_xxxxx
   Templates saved to clinic: [Clinic Name]
   Data saved to server
   ```

7. **Close the modal** and **reopen the same clinic**

8. **Click "View Templates"** (should be green button now)

9. **Watch console again** - You should see:
   ```
   Generate templates - forceRegenerate: false, clinicId: clinic_xxxxx
   Checking for saved templates...
   Getting saved templates for clinic: clinic_xxxxx
   Clinic found: [Clinic Name]
   Has saved templates: true
   Found saved templates! Loading without API call...
   ```

10. **Copy all console output** and send it to me

---

## What to Check:

❓ Does the button turn green after first generation?
❓ Does "Has saved templates: true" show up on second click?
❓ Do you see "Found saved templates! Loading without API call..."?
❓ Or does it say "No saved templates found" on second click?

---

## Possible Issues:

### Issue 1: clinicId is empty
- **Check**: Look for `clinicId:` in console
- **Fix**: Make sure you're editing an existing clinic, not a new one

### Issue 2: Templates not saving
- **Check**: Look for "Data saved to server" message
- **Check**: Open data.json and search for "personalizedTemplates"
- **Fix**: Check server has write permissions

### Issue 3: getClinics() returning stale data
- **Check**: Do you see "Clinic found: [name]"?
- **Fix**: May need to reload data from server

---

Please run this test and send me the console output!
