# 📘 SOP: Personalized WhatsApp Templates System

## Purpose
This SOP defines how the personalized WhatsApp template generation feature works, including data flow, API integration, and user experience.

---

## 1. System Overview

### 1.1 Goal
Generate clinic-specific, personalized WhatsApp templates using DeepSeek AI while maintaining:
- Original template structure and format
- Professional tone
- Data accuracy
- Global templates unchanged

### 1.2 Architecture
```
User Action → Extract Data → API Call → Parse Response → Display → Copy
```

### 1.3 Key Components
- **UI Layer**: Modal + Button + Display
- **Data Layer**: Clinic data extraction + Template filtering
- **API Layer**: DeepSeek integration
- **Display Layer**: Personalized template rendering

---

## 2. User Flow

### 2.1 Entry Point
1. User clicks on a clinic card in the CRM board
2. Clinic modal opens (existing behavior)
3. User sees clinic details and form fields
4. User sees new button: **"🤖 Generate Personalized Templates"**

### 2.2 Trigger Action
**Button Location**: Below or near the existing "AI Assistant" section

**Button States**:
- Normal: `🤖 Generate Personalized Templates`
- Loading: `⏳ Generating... (disabled)`
- Error: `❌ Failed - Retry`

### 2.3 Generation Process
1. Click button
2. System validates clinic data (name + doctor required)
3. Loading modal appears
4. API call to DeepSeek
5. Response parsed
6. Personalized templates modal opens
7. User can copy individual templates
8. User closes modal and returns to clinic view

---

## 3. Data Extraction

### 3.1 Required Fields
**Must have** (show error if missing):
- Clinic Name
- Doctor Name

**Optional** (use placeholder if missing):
- Location/City
- Specializations
- Notes
- Website
- Client Type

### 3.2 Data Structure
```json
{
  "clinic_name": "The Smile Avenue",
  "doctor_name": "Dr. Parul Gautam",
  "location": "Trikuta Nagar, Jammu",
  "city": "Jammu",  // Extracted from location
  "specializations": ["Implants", "Aesthetics", "Biomimetics"],
  "notes": "High quality of service, professional explanation to patients",
  "website": "",
  "client_type": "A",
  "contacts": [
    {"type": "Other", "number": "9717197567"}
  ]
}
```

### 3.3 Data Cleaning
- Trim whitespace
- Remove special characters from names
- Extract city from location string
- Convert specializations array to comma-separated string
- Extract key insights from notes (first 200 chars)

---

## 4. Template Selection

### 4.1 Chains to Include
Only these two chains:
1. **"Pre-Preview Outreach"** (all templates in this chain)
2. **"Initial Outreach"** (all templates in this chain)

### 4.2 Template Structure
```json
{
  "chains": [
    {
      "chain_name": "Pre-Preview Outreach",
      "description": "Messages BEFORE you share a preview",
      "templates": [
        {
          "id": "pre_001",
          "title": "1️⃣ Warm Opener",
          "timing": "First message",
          "condition": "New lead, no preview sent",
          "content": "Hi Dr. {{doctor_name}}..."
        }
      ]
    }
  ]
}
```

### 4.3 Placeholder Mapping
Templates may contain:
- `{{doctor_name}}` → Replace with actual doctor name
- `{{clinic_name}}` → Replace with actual clinic name
- `{{city}}` → Replace with extracted city
- `{{your_name}}` → Replace with user's name (configurable)
- `{{treatment_focus}}` → Replace with specializations

---

## 5. DeepSeek API Integration

### 5.1 API Configuration
- **Endpoint**: `https://api.deepseek.com/v1/chat/completions`
- **Model**: `deepseek-chat`
- **Method**: POST
- **Headers**:
  - `Content-Type: application/json`
  - `Authorization: Bearer ${API_KEY}`

### 5.2 Request Payload
```json
{
  "model": "deepseek-chat",
  "messages": [
    {
      "role": "system",
      "content": "You are a WhatsApp template personalization assistant for dental clinic outreach. Your job is to personalize templates by filling in placeholders with actual clinic data and adding SLIGHT contextual personalization based on the clinic's specializations and notes. IMPORTANT RULES: 1) Keep the exact same structure and format as the original template. 2) Only replace placeholders like {{doctor_name}}, {{clinic_name}}, {{city}}, {{treatment_focus}} with actual data. 3) Add minor personalization based on specializations or notes (1-2 words max). 4) Do NOT rewrite the message completely. 5) Do NOT add extra sentences. 6) Do NOT change the tone. 7) Return the response as a valid JSON object with the same structure as input."
    },
    {
      "role": "user",
      "content": "{\n  \"clinic_data\": {...},\n  \"templates\": {...},\n  \"instructions\": \"Personalize these templates using the clinic data. Replace placeholders and add slight customization. Return as JSON with same structure.\"\n}"
    }
  ],
  "temperature": 0.3,
  "max_tokens": 2000
}
```

### 5.3 Temperature Setting
- **0.3**: Low creativity, more consistent with data
- Ensures templates stay professional and close to original

### 5.4 Max Tokens
- **2000**: Enough for ~10-15 templates
- Adjust if more templates added

---

## 6. Prompt Engineering

### 6.1 System Prompt (Critical)
```
You are a WhatsApp template personalization assistant for dental clinic outreach.

Your task: Personalize WhatsApp message templates by filling in placeholders with actual clinic data.

STRICT RULES:
1. Keep the exact same structure, format, and tone as the original template
2. Only replace these placeholders with actual data:
   - {{doctor_name}} → Use provided doctor name
   - {{clinic_name}} → Use provided clinic name
   - {{city}} → Use provided city/location
   - {{treatment_focus}} → Use provided specializations
   - {{your_name}} → Use "I" or the sender's name

3. Add MINOR personalization (1-3 words) based on:
   - Specializations (e.g., "implants and veneers" instead of "high-ticket treatments")
   - Notes (e.g., mention "premium service" if notes mention it)

4. DO NOT:
   - Rewrite the entire message
   - Add extra sentences
   - Change the professional tone
   - Add emojis that weren't in the original
   - Remove important information

5. Output Format:
   Return a valid JSON object with the EXACT same structure as input:
   {
     "chains": [
       {
         "chain_name": "...",
         "templates": [
           {
             "id": "...",
             "title": "...",
             "timing": "...",
             "condition": "...",
             "content": "PERSONALIZED MESSAGE HERE"
           }
         ]
       }
     ]
   }

Remember: Subtle personalization, not rewriting!
```

### 6.2 User Prompt Format
```json
{
  "clinic_data": {
    "clinic_name": "The Smile Avenue",
    "doctor_name": "Dr. Parul Gautam",
    "city": "Jammu",
    "specializations": "Implants, Aesthetics, Biomimetics",
    "notes_summary": "High quality service, professional patient explanations",
    "website": "none"
  },
  "templates": {
    "chains": [...]
  },
  "instructions": "Personalize the templates above using the clinic data. Replace all placeholders and add slight customization based on specializations and notes. Keep the same format and structure. Return as valid JSON."
}
```

---

## 7. Response Parsing

### 7.1 Expected Response Format
```json
{
  "chains": [
    {
      "chain_name": "Pre-Preview Outreach",
      "templates": [
        {
          "id": "pre_001",
          "title": "1️⃣ Warm Opener",
          "timing": "First message",
          "condition": "New lead, no preview sent",
          "content": "Hi Dr. Parul Gautam, I'm [Your Name].\nI help premium dental clinics in Jammu increase implant and aesthetic dentistry enquiries using a modern, mobile-first website.\n\nI checked The Smile Avenue online — you're offering implants and biomimetics, but your online presence isn't showing that premium trust.\n\nCan I show you a quick 10-second homepage preview?"
        }
      ]
    }
  ]
}
```

### 7.2 Validation Steps
1. Check if response is valid JSON
2. Check if `chains` array exists
3. Check if each chain has `templates` array
4. Check if each template has required fields: `id`, `title`, `content`
5. If validation fails, show error and allow retry

### 7.3 Error Handling
| Error Type | Action |
|------------|--------|
| Network error | Show: "Network error. Check connection and retry." |
| API key invalid | Show: "API key error. Check config.js file." |
| Invalid JSON response | Show: "AI response format error. Retry." |
| Missing data | Show: "Please fill in clinic name and doctor name." |
| Rate limit | Show: "Too many requests. Wait 1 minute." |

---

## 8. Display Layer

### 8.1 Personalized Templates Modal

**Header**:
```
🎯 Personalized Templates for [Clinic Name]
[X] Close
```

**Body Layout**:
```
┌─────────────────────────────────────────────┐
│ Pre-Preview Outreach                         │
├─────────────────────────────────────────────┤
│                                              │
│ ┌────────────────────────────────────────┐  │
│ │ 1️⃣ Warm Opener           [📋 Copy]    │  │
│ │ ⏰ First message                        │  │
│ │ 📌 New lead, no preview sent            │  │
│ │                                          │  │
│ │ Hi Dr. Parul Gautam, I'm [Your Name].  │  │
│ │ I help premium dental clinics...        │  │
│ └────────────────────────────────────────┘  │
│                                              │
│ ┌────────────────────────────────────────┐  │
│ │ 2️⃣ Next Template...                    │  │
│ └────────────────────────────────────────┘  │
│                                              │
├─────────────────────────────────────────────┤
│ Initial Outreach                             │
├─────────────────────────────────────────────┤
│ ... more templates ...                       │
└─────────────────────────────────────────────┘
```

### 8.2 Template Card Styling
- **Background**: Light gray (#f8f9fa)
- **Border**: 1px solid #e0e0e0
- **Padding**: 15px
- **Margin**: 10px 0
- **Border-radius**: 8px
- **Shadow**: 0 2px 4px rgba(0,0,0,0.1)

### 8.3 Copy Button Behavior
**States**:
1. **Normal**: `📋 Copy` (blue background)
2. **Copying**: `⏳ Copying...` (gray)
3. **Success**: `✅ Copied!` (green, 1.5s)
4. **Back to Normal**: After 1.5s

**Code**:
```javascript
copyBtn.addEventListener('click', async (e) => {
  const content = template.content;
  try {
    await navigator.clipboard.writeText(content);
    e.target.textContent = '✅ Copied!';
    e.target.style.backgroundColor = '#10b981';
    setTimeout(() => {
      e.target.textContent = '📋 Copy';
      e.target.style.backgroundColor = '';
    }, 1500);
  } catch (err) {
    e.target.textContent = '❌ Failed';
    setTimeout(() => {
      e.target.textContent = '📋 Copy';
    }, 1500);
  }
});
```

---

## 9. Edge Cases & Handling

### 9.1 Missing Required Data
**Scenario**: Clinic has no doctor name
**Action**:
- Show alert: "⚠️ Please add a doctor name before generating templates."
- Focus on doctor name field
- Don't call API

### 9.2 Empty Specializations
**Scenario**: Clinic has no specializations
**Action**:
- Use generic term: "high-ticket dental treatments"
- Or: "premium dental services"

### 9.3 No Notes
**Scenario**: Clinic notes are empty
**Action**:
- Skip note-based personalization
- Only use name/location/specialization data

### 9.4 Very Long Content
**Scenario**: API returns extremely long template
**Action**:
- Add scrollable div
- Max height: 300px
- Show "Read more" if needed

### 9.5 API Timeout
**Scenario**: API takes >30 seconds
**Action**:
- Cancel request
- Show: "Request timed out. Please try again."
- Add retry button

---

## 10. Testing Checklist

### 10.1 Functional Tests
- [ ] Button appears in clinic modal
- [ ] Button triggers API call
- [ ] Loading state shows correctly
- [ ] API receives correct data
- [ ] Response is parsed correctly
- [ ] Templates display in modal
- [ ] Copy buttons work for each template
- [ ] Close button closes modal
- [ ] Can generate for multiple clinics sequentially

### 10.2 Data Tests
- [ ] Works with complete clinic data
- [ ] Works with minimal data (name + doctor only)
- [ ] Handles empty specializations
- [ ] Handles empty notes
- [ ] Handles special characters in names
- [ ] Handles long location strings

### 10.3 Error Tests
- [ ] API key missing → Shows error
- [ ] Network failure → Shows error + retry
- [ ] Invalid JSON response → Shows error
- [ ] Missing required fields → Shows alert
- [ ] Timeout → Shows error

### 10.4 UI Tests
- [ ] Modal is responsive
- [ ] Copy buttons have visual feedback
- [ ] Scrolling works for long templates
- [ ] Close button accessible
- [ ] Loading spinner visible
- [ ] Error messages readable

---

## 11. Configuration

### 11.1 API Settings (config.js)
```javascript
const config = {
    DEEPSEEK_API_KEY: 'your_key_here',
    DEEPSEEK_MODEL: 'deepseek-chat',
    DEEPSEEK_TEMPERATURE: 0.3,
    DEEPSEEK_MAX_TOKENS: 2000,
    API_TIMEOUT: 30000  // 30 seconds
};
```

### 11.2 Template Chains to Include
Edit in script.js:
```javascript
const CHAINS_TO_PERSONALIZE = [
    "Pre-Preview Outreach",
    "Initial Outreach"
];
```

### 11.3 Your Name (Placeholder)
```javascript
const YOUR_NAME = "Kulkaran";  // Or make it configurable per user
```

---

## 12. Maintenance & Updates

### 12.1 Adding New Templates
1. Update global TEMPLATE_CHAINS
2. No changes needed to personalization system
3. Templates automatically included if in selected chains

### 12.2 Changing Prompt
1. Edit system prompt in script.js
2. Test with sample data
3. Validate output format

### 12.3 Monitoring
- Log API calls (success/failure)
- Track usage count
- Monitor token usage
- Check error rates

---

## 13. Security & Privacy

### 13.1 API Key Protection
- Store in config.js (not in version control)
- Add config.js to .gitignore
- Use environment variables in production

### 13.2 Data Privacy
- Clinic data sent to DeepSeek API
- Only send necessary fields
- Don't send sensitive contact info to API
- Consider data retention policies

### 13.3 Rate Limiting
- Implement client-side throttling
- Max 10 requests per minute
- Show warning if limit reached

---

## 14. Success Metrics

Track:
- Number of personalizations generated
- Copy button click rate
- Error rate
- User feedback
- Time saved vs manual personalization

---

## 15. Future Enhancements

Consider adding:
- Save personalized templates to clinic record
- Export templates as PDF
- Batch generate for multiple clinics
- Template A/B testing
- WhatsApp integration (direct send)
- Template versioning
- Undo/redo personalization

---

## 16. Support & Troubleshooting

### Common Issues:

**"API key not found"**
→ Check config.js file, ensure key is valid

**"Network error"**
→ Check internet connection, firewall settings

**"Invalid JSON"**
→ DeepSeek returned malformed data, retry with clearer prompt

**"Templates not personalizing correctly"**
→ Review system prompt, adjust temperature, add more examples

---

## Appendix: Code Structure

### Files to Modify:
1. `src/js/script.js` - Main logic
2. `src/css/style.css` - Modal styling
3. `index.html` - Modal HTML (if separate modal needed)
4. `src/js/config.js` - API configuration

### New Functions to Add:
- `generatePersonalizedTemplates(clinicId)`
- `extractClinicData(clinic)`
- `filterRelevantTemplates()`
- `callDeepSeekAPI(clinicData, templates)`
- `parseAPIResponse(response)`
- `displayPersonalizedTemplates(templates)`
- `copyTemplateToClipboard(content)`

---

**Document Version**: 1.0
**Last Updated**: 2025-12-01
**Owner**: Kulkaran
