# 📋 TODO: Personalized WhatsApp Templates Feature

## Overview
Add ability to generate personalized WhatsApp templates for each clinic using DeepSeek AI, while keeping global templates intact.

---

## ✅ Phase 1: UI/UX Changes

### 1.1 Add Button in Clinic Modal
- [ ] Add "🤖 Generate Personalized Templates" button in clinic modal
- [ ] Place it near the AI Assistant section or as a separate action button
- [ ] Style it to match existing button design
- [ ] Add icon and clear label

### 1.2 Create Personalized Templates Modal/Subpage
- [ ] Design new modal overlay that opens when button clicked
- [ ] Add header: "Personalized Templates for [Clinic Name]"
- [ ] Add close button (X)
- [ ] Add loading state: "AI is personalizing templates..."
- [ ] Design template cards layout (similar to existing template display)
- [ ] Each template card needs:
  - Template title
  - Timing information
  - Condition/use case
  - Personalized content
  - Copy button with success feedback

---

## ✅ Phase 2: Data Preparation

### 2.1 Extract Relevant Templates
- [ ] Filter TEMPLATE_CHAINS to get only:
  - "Pre-Preview Outreach" chain
  - "Initial Outreach" chain
- [ ] Convert to clean JSON structure for API
- [ ] Format: `{ chain_name, templates: [{id, title, timing, condition, content}] }`

### 2.2 Extract Clinic Data
- [ ] Gather from modal form:
  - Clinic name
  - Doctor name
  - Location/city
  - Specializations array
  - Notes (important insights)
  - Client type (A/B/C)
  - Website URL (if exists)
  - Contact numbers
- [ ] Format as clean JSON object
- [ ] Handle missing/empty fields gracefully

---

## ✅ Phase 3: DeepSeek API Integration

### 3.1 Create Personalization Function
- [ ] Create new function: `personalizeTemplatesWithAI(clinicData, templates)`
- [ ] Build API request payload:
  ```json
  {
    "model": "deepseek-chat",
    "messages": [
      {
        "role": "system",
        "content": "You are an AI assistant that personalizes WhatsApp templates for dental clinic outreach..."
      },
      {
        "role": "user",
        "content": {
          "templates": [...],
          "clinic_data": {...},
          "instructions": "Personalize by filling placeholders and adding slight customization based on clinic data. Keep the exact format and structure. Do not completely rewrite."
        }
      }
    ]
  }
  ```
- [ ] Parse API response
- [ ] Handle errors gracefully
- [ ] Add retry logic if needed

### 3.2 Prompt Engineering
- [ ] Write clear system prompt that explains:
  - Keep message structure identical
  - Replace placeholders like {{doctor_name}} with actual data
  - Add minor personalization based on specializations/notes
  - Maintain professional tone
  - Do NOT change format or add extra content
  - Return JSON with same structure as input

### 3.3 Response Parsing
- [ ] Validate API response structure
- [ ] Extract personalized templates
- [ ] Map back to display format
- [ ] Handle edge cases (incomplete data, API failures)

---

## ✅ Phase 4: Display Personalized Templates

### 4.1 Render Templates in Modal
- [ ] Loop through personalized templates
- [ ] Create template cards with:
  - Chain name/category
  - Template title
  - Timing info
  - Personalized content (formatted with line breaks)
  - Copy button
- [ ] Style to match existing template display
- [ ] Add visual indicator that these are "Personalized"

### 4.2 Copy Functionality
- [ ] Add click handler to each copy button
- [ ] Use `navigator.clipboard.writeText()`
- [ ] Show success feedback: "✅ Copied!"
- [ ] Animate button color change
- [ ] Reset after 1.5 seconds

### 4.3 Close Modal
- [ ] Add close button handler
- [ ] Clear personalized templates state
- [ ] Return to clinic modal view

---

## ✅ Phase 5: Error Handling & Edge Cases

### 5.1 API Errors
- [ ] Handle network failures
- [ ] Handle API key missing
- [ ] Handle rate limits
- [ ] Show user-friendly error messages
- [ ] Add "Retry" button

### 5.2 Missing Data
- [ ] Check if required fields exist (name, doctor name)
- [ ] Show warning if critical data missing
- [ ] Use placeholder text for optional missing fields
- [ ] Inform user what data is missing

### 5.3 Loading States
- [ ] Show spinner/loading animation while API calls
- [ ] Disable button during loading
- [ ] Add timeout (30 seconds)
- [ ] Show progress indicator

---

## ✅ Phase 6: Testing & Validation

### 6.1 Unit Testing
- [ ] Test with complete clinic data
- [ ] Test with minimal clinic data
- [ ] Test with special characters in names
- [ ] Test with empty specializations
- [ ] Test with very long notes
- [ ] Test API failure scenarios

### 6.2 UI/UX Testing
- [ ] Test modal open/close
- [ ] Test copy buttons
- [ ] Test on mobile view
- [ ] Test with different clinic types (A/B/C)
- [ ] Test visual feedback

### 6.3 Integration Testing
- [ ] Test full flow: open clinic → generate → copy → close
- [ ] Test with multiple clinics in sequence
- [ ] Test browser compatibility
- [ ] Test clipboard permissions

---

## ✅ Phase 7: Optimization & Polish

### 7.1 Performance
- [ ] Cache API responses (optional)
- [ ] Optimize API payload size
- [ ] Debounce button clicks
- [ ] Lazy load templates

### 7.2 UX Improvements
- [ ] Add keyboard shortcuts (ESC to close)
- [ ] Add "Copy All" button
- [ ] Add "Regenerate" button
- [ ] Add preview before generating
- [ ] Save generated templates to clinic record (optional)

### 7.3 Documentation
- [ ] Update USER_GUIDE.md
- [ ] Add screenshots of new feature
- [ ] Document API usage
- [ ] Add troubleshooting section

---

## 📊 Success Criteria

✅ User can click "Generate Personalized Templates" on any clinic
✅ Modal opens with loading state
✅ DeepSeek API personalizes templates correctly
✅ Personalized templates display with copy buttons
✅ Original global templates remain unchanged
✅ Copy buttons work reliably
✅ Error handling is graceful
✅ UI is responsive and polished

---

## 🎯 Timeline Estimate

- **Phase 1 (UI)**: 2-3 hours
- **Phase 2 (Data)**: 1 hour
- **Phase 3 (API)**: 3-4 hours
- **Phase 4 (Display)**: 2 hours
- **Phase 5 (Errors)**: 2 hours
- **Phase 6 (Testing)**: 2-3 hours
- **Phase 7 (Polish)**: 1-2 hours

**Total**: ~15-20 hours of development time

---

## 🚀 Next Steps

1. Review and approve this plan
2. Clarify any ambiguous requirements
3. Start with Phase 1 (UI mockup)
4. Test API prompt with sample data
5. Iterate based on results
