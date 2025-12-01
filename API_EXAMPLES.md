# 🔌 DeepSeek API - Request & Response Examples

## Complete API Integration Examples

---

## Example 1: The Smile Avenue

### Clinic Data (from data.json)
```json
{
  "id": "clinic_1763655018352",
  "name": "The Smile Avenue",
  "doctorName": "Dr. Parul Gautam",
  "location": "Trikuta Nagar, Jammu, Jammu and Kashmir",
  "specializations": ["Implants", "Aesthetics", "Biomimetics"],
  "notes": "Implants, aesthetics, biomimetics. High quality of service, your explanation of issue professionally to your patients.",
  "website": "",
  "clientType": "A"
}
```

### API Request Payload

```json
{
  "model": "deepseek-chat",
  "messages": [
    {
      "role": "system",
      "content": "You are a WhatsApp template personalization assistant for dental clinic outreach.\n\nYour task: Personalize WhatsApp message templates by filling in placeholders with actual clinic data.\n\nSTRICT RULES:\n1. Keep the exact same structure, format, and tone as the original template\n2. Only replace these placeholders with actual data:\n   - {{doctor_name}} → Use provided doctor name\n   - {{clinic_name}} → Use provided clinic name\n   - {{city}} → Use provided city/location\n   - {{treatment_focus}} → Use provided specializations\n   - {{your_name}} → Use 'I'\n\n3. Add MINOR personalization (1-3 words) based on:\n   - Specializations (e.g., 'implants and veneers' instead of 'high-ticket treatments')\n   - Notes (e.g., mention 'premium service' if notes mention it)\n\n4. DO NOT:\n   - Rewrite the entire message\n   - Add extra sentences\n   - Change the professional tone\n   - Add emojis that weren't in the original\n   - Remove important information\n\n5. Output Format:\n   Return a valid JSON object with the EXACT same structure as input.\n\nRemember: Subtle personalization, not rewriting!"
    },
    {
      "role": "user",
      "content": "{\n  \"clinic_data\": {\n    \"clinic_name\": \"The Smile Avenue\",\n    \"doctor_name\": \"Dr. Parul Gautam\",\n    \"city\": \"Jammu\",\n    \"specializations\": \"Implants, Aesthetics, Biomimetics\",\n    \"notes_summary\": \"High quality service, professional patient explanations\",\n    \"website\": \"none\"\n  },\n  \"templates\": {\n    \"chains\": [\n      {\n        \"chain_name\": \"Pre-Preview Outreach\",\n        \"templates\": [\n          {\n            \"id\": \"pre_001\",\n            \"title\": \"1️⃣ Warm Opener (No Preview Yet)\",\n            \"timing\": \"First message\",\n            \"condition\": \"New lead, no preview sent\",\n            \"content\": \"Hi Dr. {{doctor_name}}, I'm {{your_name}}.\\nI help premium dental clinics in {{city}} increase implant/aligner enquiries using a modern, mobile-first website.\\n\\nI checked {{clinic_name}} online — you're offering {{treatment_focus}}, but your online presence isn't showing that premium trust.\\n\\nCan I show you a quick 10-second homepage preview?\"\n          }\n        ]\n      },\n      {\n        \"chain_name\": \"Initial Outreach\",\n        \"templates\": [\n          {\n            \"id\": \"initial_001\",\n            \"title\": \"1️⃣ Initial Preview Message\",\n            \"timing\": \"Immediately after creating preview\",\n            \"condition\": \"After preparing preview PNG\",\n            \"content\": \"Doctor, I made a modern homepage preview for your clinic.\\nIt builds trust for high-ticket treatments like implants and aligners.\\n\\nHere is the sample 👇\"\n          }\n        ]\n      }\n    ]\n  },\n  \"instructions\": \"Personalize the templates above using the clinic data. Replace all placeholders and add slight customization based on specializations and notes. Keep the same format and structure. Return as valid JSON.\"\n}"
    }
  ],
  "temperature": 0.3,
  "max_tokens": 2000
}
```

### Expected API Response

```json
{
  "id": "cmpl-xxxxx",
  "object": "chat.completion",
  "created": 1732000000,
  "model": "deepseek-chat",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "{\n  \"chains\": [\n    {\n      \"chain_name\": \"Pre-Preview Outreach\",\n      \"templates\": [\n        {\n          \"id\": \"pre_001\",\n          \"title\": \"1️⃣ Warm Opener (No Preview Yet)\",\n          \"timing\": \"First message\",\n          \"condition\": \"New lead, no preview sent\",\n          \"content\": \"Hi Dr. Parul Gautam, I'm Kulkaran.\\nI help premium dental clinics in Jammu increase implant and aesthetic dentistry enquiries using a modern, mobile-first website.\\n\\nI checked The Smile Avenue online — you're offering implants, aesthetics, and biomimetics, but your online presence isn't showing that premium trust.\\n\\nCan I show you a quick 10-second homepage preview?\"\n        }\n      ]\n    },\n    {\n      \"chain_name\": \"Initial Outreach\",\n      \"templates\": [\n        {\n          \"id\": \"initial_001\",\n          \"title\": \"1️⃣ Initial Preview Message\",\n          \"timing\": \"Immediately after creating preview\",\n          \"condition\": \"After preparing preview PNG\",\n          \"content\": \"Doctor, I made a modern homepage preview for The Smile Avenue.\\nIt builds trust for high-ticket treatments like implants, aesthetics, and biomimetics.\\n\\nHere is the sample 👇\"\n        }\n      ]\n    }\n  ]\n}"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 450,
    "completion_tokens": 250,
    "total_tokens": 700
  }
}
```

### What Changed:
- `{{doctor_name}}` → "Dr. Parul Gautam"
- `{{your_name}}` → "Kulkaran"
- `{{city}}` → "Jammu"
- `{{clinic_name}}` → "The Smile Avenue"
- `{{treatment_focus}}` → "implants, aesthetics, and biomimetics"
- Added "aesthetic dentistry" based on specializations
- Mentioned specific treatments in second template

---

## Example 2: Singh Dental Care

### Clinic Data
```json
{
  "name": "Singh Dental Care",
  "doctorName": "Dr Bikramjeet Singh",
  "location": "3 Branches in Amritsar-India 🇮🇳",
  "specializations": [],
  "notes": "At shark tank. 3 clinics chain. No website. Could upsell CRM.",
  "website": "https://www.instagram.com/dr_bikram/?hl=en",
  "clientType": "A"
}
```

### API Request (Simplified User Content)
```json
{
  "clinic_data": {
    "clinic_name": "Singh Dental Care",
    "doctor_name": "Dr. Bikramjeet Singh",
    "city": "Amritsar",
    "specializations": "general dentistry",
    "notes_summary": "3-branch chain, Shark Tank featured, no website",
    "website": "Instagram only"
  },
  "templates": {
    "chains": [...]
  }
}
```

### Expected Response
```json
{
  "chains": [
    {
      "chain_name": "Pre-Preview Outreach",
      "templates": [
        {
          "id": "pre_001",
          "content": "Hi Dr. Bikramjeet Singh, I'm Kulkaran.\nI help premium dental clinics in Amritsar increase enquiries using a modern, mobile-first website.\n\nI checked Singh Dental Care online — you're running 3 successful branches and were featured on Shark Tank, but your online presence isn't showing that trust.\n\nCan I show you a quick 10-second homepage preview?"
        }
      ]
    }
  ]
}
```

### What Changed:
- Added "3 successful branches" (from notes)
- Added "featured on Shark Tank" (from notes)
- Changed "implants/aligners" to general "enquiries" (no specific specializations)

---

## Example 3: Minimal Data Clinic

### Clinic Data (Minimal)
```json
{
  "name": "Heera Dental Clinic",
  "doctorName": "",
  "location": "",
  "specializations": [],
  "notes": "https://www.instagram.com/heeradentalclinic/",
  "website": "",
  "clientType": "A"
}
```

### Handling Strategy:
1. **Missing doctor name** → Show alert: "Please add doctor name first"
2. Don't call API without required data

### Alternative if doctor name added later:
```json
{
  "clinic_data": {
    "clinic_name": "Heera Dental Clinic",
    "doctor_name": "Dr. [Name]",
    "city": "your area",
    "specializations": "dental services",
    "notes_summary": "Active on Instagram"
  }
}
```

### Expected Response:
```json
{
  "chains": [
    {
      "templates": [
        {
          "content": "Hi Dr. [Name], I'm Kulkaran.\nI help premium dental clinics in your area increase enquiries using a modern, mobile-first website.\n\nI checked Heera Dental Clinic online — you're active on Instagram, but your online presence could show more trust.\n\nCan I show you a quick 10-second homepage preview?"
        }
      ]
    }
  ]
}
```

---

## JavaScript Implementation

### Function: callDeepSeekAPI()

```javascript
async function callDeepSeekAPI(clinicData, templates) {
  // Check API key
  if (!config.DEEPSEEK_API_KEY || config.DEEPSEEK_API_KEY === 'PASTE_YOUR_DEEPSEEK_API_KEY_HERE') {
    throw new Error('DeepSeek API key not configured');
  }

  // Build system prompt
  const systemPrompt = `You are a WhatsApp template personalization assistant for dental clinic outreach.

Your task: Personalize WhatsApp message templates by filling in placeholders with actual clinic data.

STRICT RULES:
1. Keep the exact same structure, format, and tone as the original template
2. Only replace these placeholders with actual data:
   - {{doctor_name}} → Use provided doctor name
   - {{clinic_name}} → Use provided clinic name
   - {{city}} → Use provided city/location
   - {{treatment_focus}} → Use provided specializations
   - {{your_name}} → Use 'I' or 'Kulkaran'

3. Add MINOR personalization (1-3 words) based on:
   - Specializations (e.g., 'implants and veneers' instead of 'high-ticket treatments')
   - Notes (e.g., mention 'premium service' if notes mention it)

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

Remember: Subtle personalization, not rewriting!`;

  // Build user prompt
  const userContent = JSON.stringify({
    clinic_data: clinicData,
    templates: templates,
    instructions: "Personalize the templates above using the clinic data. Replace all placeholders and add slight customization based on specializations and notes. Keep the same format and structure. Return as valid JSON."
  });

  // API request
  const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.DEEPSEEK_API_KEY}`
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userContent }
      ],
      temperature: 0.3,
      max_tokens: 2000
    }),
    signal: AbortSignal.timeout(30000) // 30 second timeout
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || 'API request failed');
  }

  const data = await response.json();
  const content = data.choices[0].message.content;

  // Parse JSON response
  const personalizedTemplates = JSON.parse(content);

  // Validate structure
  if (!personalizedTemplates.chains || !Array.isArray(personalizedTemplates.chains)) {
    throw new Error('Invalid response structure');
  }

  return personalizedTemplates;
}
```

### Function: extractClinicData()

```javascript
function extractClinicData(clinic) {
  // Extract city from location
  const extractCity = (location) => {
    if (!location) return 'your area';
    // Try to extract city name (simple heuristic)
    const parts = location.split(',');
    if (parts.length >= 2) {
      return parts[parts.length - 2].trim();
    }
    return parts[0].trim();
  };

  // Format specializations
  const formatSpecializations = (specs) => {
    if (!specs || specs.length === 0) {
      return 'high-ticket dental treatments';
    }
    return specs.join(', ');
  };

  // Extract key notes (first 200 chars)
  const extractNotesSummary = (notes) => {
    if (!notes) return '';
    return notes.slice(0, 200).trim();
  };

  return {
    clinic_name: clinic.name || 'your clinic',
    doctor_name: clinic.doctorName || '',
    city: extractCity(clinic.location),
    specializations: formatSpecializations(clinic.specializations),
    notes_summary: extractNotesSummary(clinic.notes),
    website: clinic.website || 'none',
    client_type: clinic.clientType || 'A'
  };
}
```

### Function: filterRelevantTemplates()

```javascript
function filterRelevantTemplates() {
  const chainsToInclude = [
    'Pre-Preview Outreach',
    'Initial Outreach'
  ];

  const filteredChains = [];

  Object.keys(TEMPLATE_CHAINS).forEach(chainName => {
    if (chainsToInclude.includes(chainName)) {
      filteredChains.push({
        chain_name: chainName,
        description: TEMPLATE_CHAINS[chainName].description,
        templates: TEMPLATE_CHAINS[chainName].templates.map(t => ({
          id: t.id,
          title: t.title,
          timing: t.timing,
          condition: t.condition,
          content: t.content
        }))
      });
    }
  });

  return { chains: filteredChains };
}
```

---

## Error Responses & Handling

### Error 1: Invalid API Key
```json
{
  "error": {
    "message": "Invalid API key provided",
    "type": "invalid_request_error",
    "code": "invalid_api_key"
  }
}
```
**Handle**: Show error message: "API key error. Check config.js"

### Error 2: Rate Limit
```json
{
  "error": {
    "message": "Rate limit exceeded",
    "type": "rate_limit_error"
  }
}
```
**Handle**: Show message: "Too many requests. Wait 1 minute and retry."

### Error 3: Network Error
```javascript
// Fetch throws
catch (error) {
  if (error.name === 'AbortError') {
    // Timeout
    return 'Request timed out after 30 seconds';
  }
  if (error.message.includes('NetworkError')) {
    return 'Network error. Check your connection.';
  }
  return 'Failed to connect to API';
}
```

### Error 4: Invalid JSON in Response
```javascript
try {
  const parsed = JSON.parse(content);
} catch (e) {
  throw new Error('AI returned invalid JSON. Please retry.');
}
```

---

## Testing Prompts

### Test 1: Basic Personalization
**Input**: Clinic with all data
**Expected**: All placeholders replaced, minor additions

### Test 2: Minimal Data
**Input**: Only name and doctor
**Expected**: Generic placeholders used, no crashes

### Test 3: Special Characters
**Input**: Clinic name with `& ' " -`
**Expected**: Characters preserved correctly

### Test 4: Long Notes
**Input**: 500-word notes
**Expected**: Only relevant parts used (summary)

### Test 5: Empty Specializations
**Input**: No specializations array
**Expected**: Uses "high-ticket treatments" or "dental services"

---

## Token Usage Estimates

- **System Prompt**: ~250 tokens
- **User Content (clinic data + templates)**: ~400-600 tokens
- **Response**: ~200-300 tokens per template
- **Total per request**: ~1000-1500 tokens

**Cost estimate** (DeepSeek pricing):
- Input: ~700 tokens × $0.27/1M = $0.0002
- Output: ~300 tokens × $1.10/1M = $0.0003
- **Total per request**: ~$0.0005 (very cheap!)

---

This should give you everything needed to integrate the DeepSeek API successfully!
