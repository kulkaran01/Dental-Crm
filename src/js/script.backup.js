document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURATION & INITIAL STATE ---

    const WORKFLOW_TEXT = `{
Here’s the **clear, practical, step-by-step daily workflow** for selling high-ticket dental websites — designed exactly for your strengths (fast design, good templates, respectful communication).

If you follow this routine for 7–14 days, you will close clients.

Let’s build the entire system.

---

# ⭐ **PART 1 — Your Daily Workflow (Exact Routine)**

### **⏰ NIGHT (Research + Create Free Samples)**

This is when you silently prepare your sales weapons.

### **STEP 1 — Pick ONLY 4–5 clinics**

Use Google Maps:

* “Dental clinic”
* “Cosmetic dentist”
* “Implant dentist”
* “Aligners dentist”
* “Smile makeover clinic”
* “Veneers specialist”

Select clinics where:
✔ Their website looks outdated
✔ Or they have **no website**
✔ Or their gallery is weak
✔ Or their design doesn’t match the clinic quality
✔ Or they have good photos but poor site

Pick the ones with:

* Good Google reviews (≥4.3)
* Good interior photos
* High-ticket keywords (aligners/implants/cosmetic)

These convert best.

---

### **STEP 2 — Create ONE Homepage Mockup (10–15 mins each)**

Using Figma AI or your usual builder, make:

* Hero section
* Doctor photo
* Before/After section
* Reviews section
* WhatsApp CTA
* Premium colour palette

Not full website — just ONE SECTION.
Small preview = enough to impress.

Export as screenshot.

---

### **STEP 3 — Prepare personalized message**

Write a note for each doctor:

“Doctor, I saw your reviews and your clinic looks premium — but your website doesn’t show that quality.
So I made a modern sample preview to show what’s possible for your high-ticket patients.”

---

### **Your goal at night:**

✔ Prepare 4–5 previews
✔ Prepare 4–5 messages
✔ Save 4–5 clinic WhatsApp numbers

---

# ⭐ **PART 2 — MORNING / AFTERNOON (Calling + Sending Previews)**

### **STEP 1 — Call the clinic (4–5 calls total)**

When receptionist answers:

**You say:**
“Ma’am, who handles your clinic’s website or online enquiries? The doctor or the clinic manager?”

→ This gives you the decision maker name.

If they say:
“Doctor is busy.”

**You say:**
“Perfectly fine ma’am. I made a small 10-second homepage preview for your clinic.
Could I send it to your WhatsApp number?”

They ALWAYS give WhatsApp.

---

### **STEP 2 — Immediately send your preview**

Send:

\`\`\`
Doctor, I made a modern homepage preview for your clinic.
It builds trust for high-ticket treatments like implants and aligners.

Here is the sample 👇
\`\`\`

Attach screenshot.

---

### **STEP 3 — Ask ONE tiny question**

Within 30 seconds, send:

\`\`\`
Do you want me to create a full homepage version for you? I can share it for free.
\`\`\`

This is bait — easy to say yes to.

---

# ⭐ **PART 3 — Follow-Up Workflow (How many messages, when to send, what to say)**

### **AFTER 2 HOURS**

Send:

\`\`\`
Doctor, did you get a chance to see the preview?
I can upgrade your high-ticket treatment pages too — implants, veneers, aligners.
\`\`\`

---

### **NEXT MORNING (if no reply)**

Send:

\`\`\`
Doctor, one quick question:
Do you want a premium or simple website style?

I can show you both options with your clinic photos.
\`\`\`

This boosts reply rate massively because doctors like comparison choices.

---

### **AFTER 3 DAYS (final soft close)**

Send:

\`\`\`
Doctor, I’ll close your preview file today. 
Should I keep it ready if you plan to upgrade this month?
\`\`\`

This triggers urgency without pressure.

---

# ⭐ **PART 4 — What type of clients you'll face & how to handle each**

You’ll face **3 types** of dental clinics.

---

## **TYPE A — They have NO website**

They know they need one but have been delaying.

**What they fear:**

* Cost
* Technical hassle
* Wasting money

**What to say:**

“Doctor, I’ll handle everything — content, design, photos, hosting.
You just approve layout. You get a website that helps convert high-ticket cases.”

These close FAST.

---

## **TYPE B — They have a BAD / outdated website**

This is your best target.

**Pain points:**

* Looks old
* Weak gallery
* No credibility
* No mobile responsiveness
* Slow site
* No treatment pages

**What to say:**

“Doctor, your clinic looks premium but the website doesn’t show that.
High-ticket patients judge within 3 seconds. That’s why I made you a preview.”

These close with **visual comparison**.

---

## **TYPE C — They have a GOOD website (rare)**

But usually:

* They want landing pages
* They want appointment flow improvement
* They want treatment-specific pages
* They want better branding

**What to say:**

“Doctor, I’ll rebuild only your high-ticket pages (aligners/implants/veneers) to increase case acceptance.”

These pay high.

---

# ⭐ **PART 5 — How much time will clients engage?**

### **Doctors are busy → they reply late**

They work:

* Mornings
* Evenings

They reply mostly:

* Night 9 PM–11 PM
* Early morning 7 AM–9 AM

Don't panic if they don’t reply — it's normal.

---

### **They don’t get fed up**

Many clients reply after:

* 2 days
* 4 days
* Even 1 week

As long as your messages are:

* respectful
* short
* helpful
* not needy

You’re fine.

---

# ⭐ **PART 6 — When should you aim to close?**

### **Not Day 1.**

Day 1 is for:

* showing value
* building trust
* proving you understand their clinic

### **Day 2–4 is perfect for closing.**

If they show interest on Day 1: great.
If not: Day 2 follow-up usually converts.

---

# ⭐ **PART 7 — What should you offer free vs paid?**

### **FREE**

✔ 1 homepage preview screenshot
✔ 1 second preview (treatment or gallery) if needed
✔ Light color branding suggestions
✔ 1–2 WhatsApp messages answering questions

### **PAID (Your actual service)**

✔ full website
✔ full copywriting
✔ full treatment pages (aligners, implants, veneers)
✔ gallery optimization
✔ WhatsApp automation
✔ booking integration
✔ hosting/domain setup
✔ SEO structure

Never give the full prototype for free.

Only give **one section**.
This is your bait to open the conversation.

---

# ⭐ **PART 8 — Your Perfect Daily Schedule (Simple version)**

### **⏰ NIGHT (1–2 hours)**

* Find 4–5 clinics
* Make 4–5 previews
* Prepare personalized messages

### **⏰ MORNING (45–60 minutes)**

* Call 4–5 clinics
* Get WhatsApp
* Send previews

### **⏰ AFTERNOON (15 minutes)**

* Send soft follow-up
* Ask for feedback

### **⏰ EVENING (20 minutes)**

* Offer full homepage
* Offer treatment pages
* Soft close
`

    // TEMPLATE CHAINS - Multiple sequences for different scenarios
    const TEMPLATE_CHAINS = {
        "Pre-Preview Outreach": {
            description: "Messages BEFORE you share a preview (to pre-sell value)",
            color: "#0ea5e9",
            templates: [
                {
                    title: "1️⃣ Warm Opener (No Preview Yet)",
                    timing: "First message",
                    condition: "New lead, no preview sent",
                    content: `Hi Dr. {{doctor_name}}, I'm {{your_name}}.\nI help premium dental clinics in {{city}} increase implant/aligner enquiries using a modern, mobile-first website.\n\nI checked {{clinic_name}} online — you're offering {{treatment_focus}}, but your online presence isn't showing that premium trust.\n\nCan I show you a quick 10-second homepage preview?`
                },
                {
                    title: "2️⃣ If They Say 'We Don't Need Website'",
                    timing: "When objection appears early",
                    condition: "They say it's going fine without website",
                    content: `Totally fair doctor — many clinics feel that way.\n\nThe only reason I reached out is because high-ticket services like {{treatment_focus}} usually convert better when patients see:\n• before/after results\n• clear treatment trust\n• WhatsApp booking\n• premium clinic branding\n\nIf you're open, I'll share a small preview so you can see the difference.`
                }
            ]
        },

        "Initial Outreach": {
            description: "First contact WITH preview",
            color: "#3b82f6",
            templates: [
                {
                    title: "1️⃣ Preview Delivery Message",
                    timing: "Immediately after creating preview",
                    condition: "Preview PNG ready",
                    content: `Dr. {{doctor_name}}, I made a modern homepage preview for {{clinic_name}}.\nIt's designed to build instant trust for high-ticket cases like {{treatment_focus}}.\n\nHere's the sample 👇\n{{preview_link_or_text}}`
                },
                {
                    title: "2️⃣ Micro-Commitment Question",
                    timing: "5-10 minutes after preview",
                    condition: "They viewed image",
                    content: `Should I expand this into a full homepage mockup for you?\nI'll show 2 styles so you can pick what matches your clinic.`
                },
                {
                    title: "3️⃣ Value Follow-Up (2 Hours)",
                    timing: "2 hours after preview",
                    condition: "No response",
                    content: `Just checking doctor — did you get a chance to see it?\nIf you like the direction, I can also design a dedicated {{treatment_focus}} page that converts more enquiries.`
                },
                {
                    title: "4️⃣ Next Morning Nudge",
                    timing: "Next morning 7-9 AM",
                    condition: "Still silent",
                    content: `Good morning Dr. {{doctor_name}} 🙂\nQuick yes/no — should I keep working on your homepage mockup, or pause it for now?`
                },
                {
                    title: "5️⃣ Soft Close (Day 3)",
                    timing: "After 3 days",
                    condition: "No commitment",
                    content: `Doctor, I'm closing showroom previews today to focus on active projects.\nShould I keep {{clinic_name}}'s preview on hold if you plan to upgrade this month?`
                }
            ]
        },

        "Qualification": {
            description: "Figure out if they are the right paying clinic",
            color: "#22c55e",
            templates: [
                {
                    title: "✅ Ask Treatment Priority",
                    timing: "After positive reply",
                    condition: "They liked preview",
                    content: `Great doctor 🙂\nWhich treatments bring your best cases right now?\n1) Implants\n2) Aligners / Invisalign\n3) Smile design / Veneers\n4) All of the above`
                },
                {
                    title: "✅ Ask Growth Signal",
                    timing: "After they share treatments",
                    condition: "They answered priority",
                    content: `Perfect.\nAre you currently getting most patients via referrals, or are you also trying to get online enquiries through Google/Instagram?`
                }
            ]
        },

        "Sales Sequence": {
            description: "After doctor says YES to proceed",
            color: "#10b981",
            templates: [
                {
                    title: "✅ Step 1: Confirm Style Direction",
                    timing: "Immediately after YES",
                    condition: "Doctor agrees to full homepage",
                    content: `Awesome Dr. {{doctor_name}}.\nBefore I complete the homepage, which style fits you best?\n\nA) Clean white premium\nB) Modern blue/teal dental\n\nI'll build around your choice.`
                },
                {
                    title: "✅ Step 2: Gather Assets",
                    timing: "After style chosen",
                    condition: "Style confirmed",
                    content: `Perfect.\nPlease share:\n1) Clinic logo (if available)\n2) 4–6 best clinic / chair / doctor photos\n3) Top 3 treatments you want highlighted ({{treatment_focus}})\n\nIf you don't have photos ready, no issue — I can pick from your Google/Instagram for the mockup.`
                },
                {
                    title: "✅ Step 3: Bridge to Pricing",
                    timing: "After assets/treatments clarified",
                    condition: "They shared focus",
                    content: `Got it doctor — that helps me tailor the site exactly for your clinic.\n\nI'll share package options so you can choose what matches your goal.`
                },
                {
                    title: "💰 Step 4: Pricing (Range Frame)",
                    timing: "Immediately after bridge",
                    condition: "Ready to quote",
                    content: `Here are the options, doctor:\n\n✔ Starter Clinic Website – ₹{{price_starter}} (approx.)\n• Homepage + 2 pages\n• WhatsApp booking button\n• Google map + reviews\n\n✔ Growth High-Ticket Clinic – ₹{{price_growth}} (approx.)\n• Homepage + 1 detailed {{treatment_focus}} page\n• Before/After gallery + reviews\n• Strong conversion layout\n+ ₹2,000 per extra treatment page\n\n✔ Premium Implants/Aligners Clinic – ₹{{price_premium}} (approx.)\n• Full premium website\n• Copywriting + design polish\n• Gallery + booking flow setup\n\nWhich one fits your clinic vision best?`
                },
                {
                    title: "🔒 Step 5: Close & Advance",
                    timing: "After package selected",
                    condition: "Doctor chooses plan",
                    content: `Perfect doctor.\nTo begin, I take a 40% advance.\nOnce that's done, I start work immediately and share the first draft in a few days.\n\nHow would you like to proceed — UPI or bank transfer?`
                }
            ]
        },

        "Social Proof": {
            description: "When they need trust/examples",
            color: "#a855f7",
            templates: [
                {
                    title: "📌 Share Portfolio",
                    timing: "When they ask for samples",
                    condition: "Doctor wants references",
                    content: `Sure doctor — here are 2 recent premium clinic designs:\n1) {{portfolio_link_1}}\n2) {{portfolio_link_2}}\n\nNotice how they highlight {{treatment_focus}} with trust + WhatsApp booking.\nI'll build the same premium feel for {{clinic_name}}.`
                }
            ]
        },

        "Objection Handlers": {
            description: "Common objection responses",
            color: "#f59e0b",
            templates: [
                {
                    title: "❌ 'Send full homepage first'",
                    timing: "When they ask for more free work",
                    condition: "They want full work before paying",
                    content: `I understand doctor.\nThe preview is only to show direction.\n\nFull homepage + treatment pages + gallery + booking system is part of the paid build, because it takes real production time.\n\nWhich package are you considering? I'll recommend the right one for your clinic.`
                },
                {
                    title: "❌ 'Too expensive'",
                    timing: "Price pushback",
                    condition: "They say cost is high",
                    content: `I get it doctor.\nQuick question — even 1–2 extra {{treatment_focus}} cases per month covers the site cost.\n\nThese websites are designed to convert high-ticket patients, not just look good.\nIf you want, I can suggest the most cost-effective package for your goal.`
                },
                {
                    title: "❌ 'I'll think about it'",
                    timing: "Stall",
                    condition: "They delay decision",
                    content: `No problem doctor.\nJust letting you know I'm holding your design slot till {{slot_deadline}}.\nAfter that I'll assign it to another clinic.\n\nShall I keep it reserved for you?`
                },
                {
                    title: "❌ 'Already have a website'",
                    timing: "They mention existing site",
                    condition: "Old/outdated site exists",
                    content: `That's good doctor.\nUsually older sites miss conversion pieces like WhatsApp booking, strong {{treatment_focus}} pages, and modern trust visuals.\n\nIf you want, I can quickly point out 2–3 improvements that will increase enquiries.`
                },
                {
                    title: "❌ 'Need to ask partner'",
                    timing: "Approval needed",
                    condition: "Not sole decision maker",
                    content: `Sure doctor.\nShould I send the preview + packages directly to them on WhatsApp?\nOr I can explain in a 2-minute call with both of you.`
                }
            ]
        },

        "Negotiation": {
            description: "When they want cheaper option",
            color: "#f97316",
            templates: [
                {
                    title: "💬 Smart Downsell",
                    timing: "When budget is tight",
                    condition: "They want lower price",
                    content: `Understood doctor.\nTo fit budget, we can start with Starter now, then upgrade to Growth later when you want more {{treatment_focus}} pages.\n\nShall we begin with Starter so your online trust is live immediately?`
                }
            ]
        },

        "Follow-Up Timeline": {
            description: "When they go silent",
            color: "#8b5cf6",
            templates: [
                {
                    title: "⏱️ 2 Hours",
                    timing: "2 hours after silence",
                    condition: "Viewed but no reply",
                    content: `Doctor, any thoughts on the preview direction? 🙂\nIf you want, I'll show 2 style options for {{clinic_name}}.`
                },
                {
                    title: "🌅 Next Morning",
                    timing: "Next morning 7-9 AM",
                    condition: "Still silent",
                    content: `Good morning doctor.\nShould I keep your slot open for this week, or pause the project for now?`
                },
                {
                    title: "⏳ 48 Hours",
                    timing: "2 days after initial contact",
                    condition: "No commitment",
                    content: `Doctor, if helpful I can explain the 3 packages in a 2-minute call.\nWant me to call after clinic hours?`
                },
                {
                    title: "🗓️ Day 4-5",
                    timing: "After 4-5 days",
                    condition: "Long silence",
                    content: `Doctor, I'll close your preview file today to focus on active builds.\nIf you plan to upgrade soon, tell me and I'll keep {{clinic_name}} on priority.`
                },
                {
                    title: "📁 Day 7-10",
                    timing: "After 7-10 days",
                    condition: "Final follow-up",
                    content: `Doctor, I'll archive this chat for now.\nWhenever you want a premium website for better {{treatment_focus}} conversions, just message me — happy to help 🙂`
                }
            ]
        },

        "Call Scripts": {
            description: "Phone outreach scripts",
            color: "#06b6d4",
            templates: [
                {
                    title: "📞 Call After Preview Silence",
                    timing: "After 24-48h (they saw preview)",
                    condition: "Viewed but no reply",
                    content: `Hello Dr. {{doctor_name}}, hope I'm not disturbing you.\nJust following up on the preview I sent for {{clinic_name}}.\n\nIf you like the direction, would you prefer:\nA) Starter for basic trust\nB) Growth for more {{treatment_focus}} conversions\n\nWhich one feels right for you?`
                },
                {
                    title: "📞 Cold Call (New Lead)",
                    timing: "First call",
                    condition: "No WhatsApp yet",
                    content: `Hello, this is {{your_name}}. Am I speaking with Dr. {{doctor_name}}?\nDoctor, I build modern websites for premium dental clinics offering {{treatment_focus}}.\nI prepared a quick preview for {{clinic_name}}.\nCan I send it to your WhatsApp? It's a 10-second look.`
                }
            ]
        },

        "Closing Scripts": {
            description: "Final push / urgency",
            color: "#ef4444",
            templates: [
                {
                    title: "🎯 Slot Scarcity Close",
                    timing: "Day 4-5",
                    condition: "Interested but delaying",
                    content: `Doctor, I'm starting 2 clinic builds this week.\nI can take only 1 more in {{city}} this month.\nIf you want me to work on {{clinic_name}}, shall I reserve your slot?`
                }
            ]
        },

        "Post-Sale": {
            description: "After payment and during build",
            color: "#14b8a6",
            templates: [
                {
                    title: "✅ Payment Received Confirmation",
                    timing: "Immediately after advance",
                    condition: "Advance paid",
                    content: `Thanks doctor — advance received.\nI'm starting your build today.\n\nI'll share first draft in 3–5 days.\nAfter your feedback, final site goes live quickly.`
                },
                {
                    title: "✅ Draft Share Message",
                    timing: "When draft ready",
                    condition: "First draft complete",
                    content: `Dr. {{doctor_name}}, here's your first draft homepage 👇\n{{draft_link}}\n\nPlease share feedback on:\n1) colors/style\n2) treatment sections\n3) photos\n\nI'll update in the next revision.`
                }
            ]
        },

        "Referral Requests": {
            description: "Ask for leads after success",
            color: "#84cc16",
            templates: [
                {
                    title: "🙏 Referral Ask",
                    timing: "After site goes live",
                    condition: "Client happy",
                    content: `Doctor, glad the website is live 🙂\nIf you know any implant/aligner clinic friends who need a premium site, feel free to connect me.\nI'll take good care of them like {{clinic_name}}.`
                }
            ]
        },

        "Psychology & Rules": {
            description: "Internal strategy reminders",
            color: "#ec4899",
            templates: [
                {
                    title: "🧠 Doctor Psychology",
                    timing: "Always",
                    condition: "Mindset",
                    content: `✅ NO REPLY ≠ REJECTION\nDoctors are busy.\nPrime reply windows:\n• 7–9 AM\n• 9–11 PM\nDeals close 3–7 days later often.`
                },
                {
                    title: "🚫 Non-Negotiables",
                    timing: "Always",
                    condition: "Rules",
                    content: `❌ Don't build full homepage before payment.\n❌ Don't design extra pages free.\n✅ Preview only as bait.\n✅ 40% advance mandatory.`
                }
            ]
        }
    };

    const CONTACT_TYPES = ["Receptionist", "Doctor Personal", "Clinic General", "Emergency", "Other"];

    // Specialization management
    let currentSpecializations = [];

    const COLD_CALL_SCRIPT = [
        "Ask who handles the clinic’s website or online enquiries (Doctor or Manager).",
        "If doctor is busy, ask to send a 10-second homepage preview to their WhatsApp.",
        "Get the WhatsApp number.",
    ];

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

    // --- DOM ELEMENT REFERENCES ---
    
    const board = document.getElementById('board');
    const addClinicBtn = document.getElementById('add-clinic-btn');
    const modal = document.getElementById('clinic-modal');
    const modalTitle = document.getElementById('modal-title');
    const form = document.getElementById('clinic-form');
    const saveBtn = document.getElementById('save-clinic-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const deleteBtn = document.getElementById('delete-clinic-btn');
    const clinicStatusSelect = document.getElementById('clinic-status');
    const contactNumbersContainer = document.getElementById('contact-numbers-container'); // Added
    const addContactNumberBtn = document.getElementById('add-contact-number-btn'); // Added

    const workflowModal = document.getElementById('workflow-modal');
    const viewWorkflowBtn = document.getElementById('view-workflow-btn');
    const closeWorkflowBtn = document.getElementById('close-workflow-btn');
    const workflowContent = document.getElementById('workflow-content');

    const messageTemplatesContainer = document.getElementById('message-templates');
    
    const aiSummarizeBtn = document.getElementById('ai-summarize-btn');
    const aiInput = document.getElementById('ai-input');
    const aiOutput = document.getElementById('ai-output');

    // Personalized templates elements
    const generatePersonalizedBtn = document.getElementById('generate-personalized-templates-btn');
    const personalizedModal = document.getElementById('personalized-modal');
    const closePersonalizedBtn = document.getElementById('close-personalized-btn');


    // --- DATA HANDLING ---

    const getClinics = async () => {
        try {
            // Use environment-specific data URL
            const url = window.ENV_CONFIG?.dataUrl || '/api/clinics';
            console.log('📡 Fetching clinics from:', url);

            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch clinics');
            const clinics = await response.json();

            console.log(`✅ Loaded ${clinics.length} clinics`);
            return clinics;
        } catch (error) {
            console.error('❌ Error fetching clinics:', error);

            // On Netlify, show user-friendly message if GitHub fetch fails
            if (window.ENV_CONFIG?.isProduction) {
                alert('Unable to load clinic data. Please check your internet connection.');
            }

            return []; // Return empty array on error
        }
    };

    const saveClinics = async (clinics) => {
        // Prevent saving in production (read-only mode)
        if (window.ENV_CONFIG?.isProduction) {
            console.warn('⚠️ Cannot save in read-only mode (Netlify deployment)');
            return;
        }

        try {
            console.log('💾 Saving to server:', clinics);
            const response = await fetch('/api/clinics', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(clinics, null, 2) // Pretty-print the JSON
            });
            console.log('Save response:', response.ok ? '✅ Success' : '❌ Failed');
        } catch (error) {
            console.error('Failed to save clinics:', error);
        }
    };

    // --- CORE APPLICATION LOGIC ---

    const updateStats = async () => {
        let clinics = await getClinics();

        // Calculate active leads (not won or lost)
        const activeClinics = clinics.filter(c =>
            !c.status.includes('Closed')
        );

        // Calculate won this week (you can enhance this with actual date tracking)
        const wonClinics = clinics.filter(c => c.status === 'Closed - Won');

        // Calculate conversion rate
        const totalClosed = clinics.filter(c => c.status.includes('Closed'));
        const conversionRate = totalClosed.length > 0
            ? Math.round((wonClinics.length / totalClosed.length) * 100)
            : 0;

        // Calculate priority clinics
        const priorityClinics = clinics.filter(c =>
            (c.priority === 'hot' || c.priority === 'high') && !c.status.includes('Closed')
        );

        // Update DOM
        document.getElementById('stat-active').textContent = activeClinics.length;
        document.getElementById('stat-won').textContent = wonClinics.length;
        document.getElementById('stat-rate').textContent = conversionRate + '%';
        document.getElementById('stat-priority').textContent = priorityClinics.length;

        // Update location filter dropdown
        updateLocationFilter(clinics);

        // Update specialization filter dropdown
        await updateSpecializationFilter();
    };

    const updateLocationFilter = (clinics) => {
        const locationFilter = document.getElementById('location-filter');
        const currentValue = locationFilter.value;

        // Get unique locations
        const locations = [...new Set(clinics.map(c => c.location).filter(l => l && l.trim()))];
        locations.sort();

        // Rebuild dropdown
        locationFilter.innerHTML = '<option value="">All Locations</option>';
        locations.forEach(location => {
            const option = document.createElement('option');
            option.value = location;
            option.textContent = location;
            if (location === currentValue) option.selected = true;
            locationFilter.appendChild(option);
        });
    };

    const renderBoard = async () => {
        board.innerHTML = '';
        let clinics = await getClinics();

        COLUMNS.forEach(columnName => {
            const columnEl = document.createElement('div');
            columnEl.className = 'column';

            const filteredClinics = clinics.filter(c => c.status === columnName);
            const count = filteredClinics.length;

            columnEl.innerHTML = `
                <div class="column-header">${columnName} <span style="opacity: 0.7; font-weight: 600;">(${count})</span></div>
                <div class="clinic-cards" data-status="${columnName}"></div>
            `;

            const cardsContainer = columnEl.querySelector('.clinic-cards');

            filteredClinics.forEach(clinic => {
                const card = createClinicCard(clinic);
                cardsContainer.appendChild(card);
            });

            board.appendChild(columnEl);
        });

        // Update stats after rendering board
        await updateStats();
    };

    const createClinicCard = (clinic) => {
        const card = document.createElement('div');
        card.className = `clinic-card card-type-${clinic.clientType}`;
        card.setAttribute('data-id', clinic.id);
        card.setAttribute('data-location', clinic.location || '');
        card.setAttribute('data-priority', clinic.priority || '');
        card.setAttribute('data-name', clinic.name.toLowerCase());
        card.setAttribute('data-doctor', (clinic.doctorName || '').toLowerCase());
        card.setAttribute('data-specializations',
            (clinic.specializations && Array.isArray(clinic.specializations))
                ? clinic.specializations.join(',')
                : ''
        );

        let contactInfo = 'N/A';
        if (clinic.contacts && clinic.contacts.length > 0) {
            const primaryContact = clinic.contacts[0];
            contactInfo = `${primaryContact.type}: ${primaryContact.number}`;
        }

        // Priority chip configs
        const priorityLabels = {
            'hot': '🔥 Hot Lead',
            'high': '⭐ High Priority',
            'warm': '👍 Warm',
            'cold': '❄️ Cold'
        };

        // Build chips HTML
        let chipsHTML = '<div class="card-chips">';
        if (clinic.location) {
            chipsHTML += `<span class="chip chip-location">📍 ${clinic.location}</span>`;
        }
        if (clinic.priority) {
            chipsHTML += `<span class="chip chip-priority ${clinic.priority}">${priorityLabels[clinic.priority]}</span>`;
        }
        // Add specialization chips
        if (clinic.specializations && Array.isArray(clinic.specializations)) {
            clinic.specializations.forEach(spec => {
                chipsHTML += `<span class="chip chip-specialization">🦷 ${spec}</span>`;
            });
        }
        chipsHTML += '</div>';

        card.innerHTML = `
            <div class="card-header">
                <h4>${clinic.name}</h4>
                <button class="download-btn" title="Download clinic data">⬇️</button>
            </div>
            <div class="card-details">
                <p><strong>Doctor:</strong> ${clinic.doctorName || 'N/A'}</p>
                <p><strong>Contact:</strong> ${contactInfo}</p>
            </div>
            ${chipsHTML}
        `;

        // Add click handler for card (but not the download button)
        // Allow viewing in both development and production modes
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('download-btn')) {
                openModal(clinic.id);
            }
        });

        // Add download button handler
        const downloadBtn = card.querySelector('.download-btn');
        downloadBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            downloadClinicData(clinic);
        });

        return card;
    };
    
    const renderColdCallChecklist = (savedState = {}) => {
        const container = document.getElementById('cold-call-checklist');
        container.innerHTML = '';
        COLD_CALL_SCRIPT.forEach((item, index) => {
            const isChecked = savedState[index] === true;
            const el = document.createElement('div');
            el.className = 'checklist-item';
            el.innerHTML = `
                <input type="checkbox" id="checklist-${index}" data-index="${index}" ${isChecked ? 'checked' : ''}>
                <label for="checklist-${index}">${item}</label>
            `;
            container.appendChild(el);
        });
    };

    const renderContactNumbers = (contacts = []) => {
        contactNumbersContainer.innerHTML = ''; // Clear existing fields
        if (contacts.length === 0) {
            addContactNumberField(); // Add one blank field if none exist
            return;
        }
        contacts.forEach(contact => addContactNumberField(contact.type, contact.number));
    };

    const addContactNumberField = (type = '', number = '') => {
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'contact-number-group'; // For potential styling

        const typeSelect = document.createElement('select');
        typeSelect.className = 'contact-type-select';
        CONTACT_TYPES.forEach(contactType => {
            const option = document.createElement('option');
            option.value = contactType;
            option.textContent = contactType;
            if (contactType === type) {
                option.selected = true;
            }
            typeSelect.appendChild(option);
        });

        const numberInput = document.createElement('input');
        numberInput.type = 'tel';
        numberInput.className = 'contact-number-input';
        numberInput.value = number;
        numberInput.placeholder = 'Phone number';

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'remove-contact-number-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => removeContactNumberField(fieldGroup));

        fieldGroup.appendChild(typeSelect);
        fieldGroup.appendChild(numberInput);
        fieldGroup.appendChild(removeBtn);
        contactNumbersContainer.appendChild(fieldGroup);
    };

    const removeContactNumberField = (fieldGroup) => {
        fieldGroup.remove();
    };

    // --- DOWNLOAD CLINIC DATA ---

    const downloadClinicData = (clinic) => {
        // Create a clean copy of clinic data
        const clinicData = {
            id: clinic.id,
            name: clinic.name,
            doctorName: clinic.doctorName,
            location: clinic.location,
            priority: clinic.priority,
            specializations: clinic.specializations || [],
            contacts: clinic.contacts || [],
            website: clinic.website,
            clientType: clinic.clientType,
            status: clinic.status,
            notes: clinic.notes,
            coldCallChecklist: clinic.coldCallChecklist || {}
        };

        // Convert to JSON string
        const jsonString = JSON.stringify(clinicData, null, 2);

        // Create blob
        const blob = new Blob([jsonString], { type: 'application/json' });

        // Create download link
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;

        // Create filename from clinic name and date
        const date = new Date().toISOString().split('T')[0];
        const safeName = clinic.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        a.download = `${safeName}_${date}.json`;

        // Trigger download
        document.body.appendChild(a);
        a.click();

        // Cleanup
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        console.log('Downloaded clinic data:', clinic.name);
    };

    // --- SPECIALIZATION MANAGEMENT ---

    const renderSpecializationChips = () => {
        const container = document.getElementById('specialization-chips');
        container.innerHTML = '';

        currentSpecializations.forEach((spec, index) => {
            const chip = document.createElement('span');
            chip.className = 'chip';
            chip.innerHTML = `
                ${spec}
                <span class="remove-spec" data-index="${index}">×</span>
            `;
            container.appendChild(chip);
        });

        // Add click listeners to remove buttons
        container.querySelectorAll('.remove-spec').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                currentSpecializations.splice(index, 1);
                renderSpecializationChips();
            });
        });
    };

    const addSpecialization = (spec) => {
        const trimmed = spec.trim();
        if (trimmed && !currentSpecializations.includes(trimmed)) {
            currentSpecializations.push(trimmed);
            console.log('Added specialization:', trimmed);
            console.log('Current specializations:', currentSpecializations);
            renderSpecializationChips();
        }
    };

    const updateSpecializationFilter = async () => {
        const clinics = await getClinics();
        const specFilter = document.getElementById('specialization-filter');
        const currentValue = specFilter.value;

        // Get all unique specializations
        const allSpecs = new Set();
        clinics.forEach(clinic => {
            if (clinic.specializations && Array.isArray(clinic.specializations)) {
                clinic.specializations.forEach(spec => allSpecs.add(spec));
            }
        });

        const sortedSpecs = Array.from(allSpecs).sort();

        // Rebuild dropdown
        specFilter.innerHTML = '<option value="">All Specializations</option>';
        sortedSpecs.forEach(spec => {
            const option = document.createElement('option');
            option.value = spec;
            option.textContent = `🦷 ${spec}`;
            if (spec === currentValue) option.selected = true;
            specFilter.appendChild(option);
        });
    };

    const openModal = async (clinicId = null) => {
        form.reset();
        deleteBtn.style.display = 'none';
        aiInput.value = '';
        aiOutput.innerHTML = ''; // Ensure innerHTML for AI output
        currentSpecializations = []; // Reset specializations

        const isReadOnly = !window.ENV_CONFIG?.features.canEdit;

        if (clinicId) {
            // Editing existing clinic (or viewing in read-only mode)
            modalTitle.textContent = isReadOnly ? 'View Clinic Details' : 'Edit Clinic';
            let clinics = await getClinics();
            const clinic = clinics.find(c => c.id === clinicId);

            document.getElementById('clinic-id').value = clinic.id;
            document.getElementById('clinic-name').value = clinic.name;
            document.getElementById('doctor-name').value = clinic.doctorName;
            document.getElementById('clinic-location').value = clinic.location || '';
            document.getElementById('clinic-priority').value = clinic.priority || '';

            // Load specializations
            if (clinic.specializations && Array.isArray(clinic.specializations)) {
                currentSpecializations = [...clinic.specializations];
            }
            renderSpecializationChips();

            renderContactNumbers(clinic.contacts); // Render dynamic contact fields

            document.getElementById('clinic-website').value = clinic.website;
            document.getElementById('client-type').value = clinic.clientType;
            document.getElementById('clinic-status').value = clinic.status;
            document.getElementById('clinic-notes').value = clinic.notes;

            renderColdCallChecklist(clinic.coldCallChecklist);
            deleteBtn.style.display = isReadOnly ? 'none' : 'inline-block';

            // Update generate button text based on whether templates exist
            const generateBtn = document.getElementById('generate-personalized-templates-btn');
            if (clinic.personalizedTemplates) {
                generateBtn.textContent = '👁️ View Personalized Templates';
                generateBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                generateBtn.disabled = false; // Always enable when templates exist
            } else {
                if (isReadOnly) {
                    generateBtn.textContent = '📭 No Templates Generated Yet';
                    generateBtn.style.background = '#9ca3af';
                    generateBtn.disabled = true;
                } else {
                    generateBtn.textContent = '🤖 Generate Personalized Templates';
                    generateBtn.style.background = 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)';
                    generateBtn.disabled = false;
                }
            }
        } else {
            // Adding new clinic
            modalTitle.textContent = 'Add New Clinic';
            document.getElementById('clinic-id').value = '';
            document.getElementById('clinic-location').value = '';
            document.getElementById('clinic-priority').value = '';
            document.getElementById('clinic-status').value = COLUMNS[0]; // Default to first column
            renderSpecializationChips(); // Render empty chips
            renderContactNumbers(); // Render one blank field
            renderColdCallChecklist(); // Render empty checklist

            // Reset button text for new clinic
            const generateBtn = document.getElementById('generate-personalized-templates-btn');
            generateBtn.textContent = '🤖 Generate Personalized Templates';
            generateBtn.style.background = 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)';
            generateBtn.disabled = false;
        }

        // Make form read-only in production
        if (isReadOnly) {
            // Disable all form inputs
            form.querySelectorAll('input, textarea, select, button').forEach(element => {
                if (element.id !== 'generate-personalized-templates-btn' &&
                    element.id !== 'cancel-btn') {
                    element.disabled = true;
                }
            });

            // Hide Save, Delete, AI Assist, and Add Contact buttons
            document.getElementById('save-clinic-btn').style.display = 'none';
            document.getElementById('delete-clinic-btn').style.display = 'none';
            document.getElementById('ai-assist-section').style.display = 'none';
            document.getElementById('add-contact-number-btn').style.display = 'none';

            // Change Cancel button to Close
            document.getElementById('cancel-btn').textContent = 'Close';
        } else {
            // Re-enable all form inputs in development mode
            form.querySelectorAll('input, textarea, select, button').forEach(element => {
                element.disabled = false;
            });

            // Show all buttons
            document.getElementById('save-clinic-btn').style.display = 'inline-block';
            document.getElementById('ai-assist-section').style.display = 'block';
            document.getElementById('add-contact-number-btn').style.display = 'block';

            // Reset Cancel button text
            document.getElementById('cancel-btn').textContent = 'Cancel';
        }

        modal.style.display = 'flex';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };
    
    const saveClinic = async (e) => {
        e.preventDefault();
        let clinics = await getClinics();
        const id = document.getElementById('clinic-id').value;

        // Collect dynamic contact numbers
        const contacts = [];
        document.querySelectorAll('.contact-number-group').forEach(group => {
            const type = group.querySelector('.contact-type-select').value;
            const number = group.querySelector('.contact-number-input').value.trim();
            if (number) { // Only save if number is not empty
                contacts.push({ type, number });
            }
        });

        // Save checklist state
        const coldCallChecklist = {};
        document.querySelectorAll('#cold-call-checklist input[type="checkbox"]').forEach(checkbox => {
            coldCallChecklist[checkbox.dataset.index] = checkbox.checked;
        });

        const clinicData = {
            name: document.getElementById('clinic-name').value,
            doctorName: document.getElementById('doctor-name').value,
            location: document.getElementById('clinic-location').value.trim(),
            priority: document.getElementById('clinic-priority').value,
            specializations: [...currentSpecializations], // Save specializations
            contacts: contacts, // Use the new dynamic contacts array
            website: document.getElementById('clinic-website').value,
            clientType: document.getElementById('client-type').value,
            status: document.getElementById('clinic-status').value,
            notes: document.getElementById('clinic-notes').value,
            coldCallChecklist: coldCallChecklist,
        };

        console.log('Saving clinic with specializations:', clinicData.specializations);
        console.log('Full clinic data:', clinicData);

        if (id) {
            // Update existing
            const index = clinics.findIndex(c => c.id === id);
            clinics[index] = { ...clinics[index], ...clinicData, id: id };
        } else {
            // Create new
            clinicData.id = `clinic_${Date.now()}`;
            clinics.push(clinicData);
        }

        await saveClinics(clinics);
        await renderBoard();
        closeModal();
    };

    const deleteClinic = async () => {
        const id = document.getElementById('clinic-id').value;
        if (confirm('Are you sure you want to delete this clinic?')) {
            let clinics = await getClinics();
            clinics = clinics.filter(c => c.id !== id);
            await saveClinics(clinics);
            await renderBoard();
            closeModal();
        }
    };
    
    const populateStatusDropdown = () => {
        clinicStatusSelect.innerHTML = '';
        COLUMNS.forEach(col => {
            const option = document.createElement('option');
            option.value = col;
            option.textContent = col;
            clinicStatusSelect.appendChild(option);
        });
    };

    let activeTemplateChain = "Initial Outreach"; // Default chain

    const populateMessageTemplates = () => {
        messageTemplatesContainer.innerHTML = '';

        // Create tabs for each chain
        const tabsContainer = document.createElement('div');
        tabsContainer.className = 'template-tabs';

        Object.keys(TEMPLATE_CHAINS).forEach(chainName => {
            const chain = TEMPLATE_CHAINS[chainName];
            const tab = document.createElement('button');
            tab.className = `template-tab ${activeTemplateChain === chainName ? 'active' : ''}`;
            tab.style.borderBottomColor = chain.color;
            tab.innerHTML = `
                <div class="tab-title">${chainName}</div>
                <div class="tab-description">${chain.description}</div>
            `;
            tab.addEventListener('click', () => {
                activeTemplateChain = chainName;
                populateMessageTemplates();
            });
            tabsContainer.appendChild(tab);
        });

        messageTemplatesContainer.appendChild(tabsContainer);

        // Create templates for active chain
        const activeChain = TEMPLATE_CHAINS[activeTemplateChain];
        const templatesContainer = document.createElement('div');
        templatesContainer.className = 'templates-list';

        activeChain.templates.forEach(template => {
            const el = document.createElement('div');
            el.className = 'template';
            el.innerHTML = `
                <div class="template-header">
                    <div class="template-title">${template.title}</div>
                    <button class="copy-btn">📋 Copy</button>
                </div>
                <div class="template-meta">
                    <span class="template-timing">⏰ ${template.timing}</span>
                    <span class="template-condition">📌 ${template.condition}</span>
                </div>
                <div class="template-content">${template.content.replace(/\n/g, '<br>')}</div>
            `;

            el.querySelector('.copy-btn').addEventListener('click', (e) => {
                navigator.clipboard.writeText(template.content);
                const btn = e.target;
                const originalText = btn.textContent;
                btn.textContent = '✅ Copied!';
                btn.style.backgroundColor = '#10b981';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                }, 1500);
            });

            templatesContainer.appendChild(el);
        });

        messageTemplatesContainer.appendChild(templatesContainer);
    };

    const populateWorkflowModal = () => {
        workflowContent.textContent = WORKFLOW_TEXT;
    };
    
    // --- AI INTEGRATION ---
    
    /**
     * This is a placeholder for calling the DeepSeek API.
     * You need to replace 'DEEPSEEK_API_KEY' with your actual key from the config.js file.
     */
    async function getAiSummary(text) {
        // Check if the API key is set
        if (!config.DEEPSEEK_API_KEY || config.DEEPSEEK_API_KEY === 'PASTE_YOUR_DEEPSEEK_API_KEY_HERE') {
            return "Error: DeepSeek API key not found. Please add it to the config.js file.";
        }

        const prompt = `Summarize the following conversation with a dental clinic. Format the output as a concise list of bullet points. Extract key points, the client's sentiment (positive, negative, neutral), and suggest a next step based on the sales workflow provided.

Conversation:
${text}`;
        
        try {
            const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.DEEPSEEK_API_KEY}`
                },
                body: JSON.stringify({
                    model: "deepseek-chat", // Or another model you prefer
                    messages: [
                        { "role": "system", "content": "You are a helpful assistant for a salesperson selling websites to dental clinics. You always respond in clear, concise bullet points." },
                        { "role": "user", "content": prompt }
                    ],
                    max_tokens: 200,
                    temperature: 0.5,
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("DeepSeek API Error:", errorData);
                return `Error from API: ${errorData.error.message}`;
            }

            const data = await response.json();
            // Convert markdown-style bullets to HTML
            return data.choices[0].message.content.trim().replace(/\* /g, '<li>').replace(/\n/g, '</li>');

        } catch (error) {
            console.error('Failed to fetch from DeepSeek API:', error);
            return 'Failed to connect to the AI service. Check the console for details.';
        }
    }

    const handleAiSummarize = async () => {
        const text = aiInput.value.trim();
        if (!text) {
            aiOutput.innerHTML = 'Please paste a conversation transcript first.';
            return;
        }

        aiOutput.innerHTML = 'AI is thinking...';
        const summary = await getAiSummary(text);
        aiOutput.innerHTML = `<ul>${summary}</ul>`;

        // Optional: Append to notes
        const notesField = document.getElementById('clinic-notes');
        notesField.value += `\n\n--- AI Summary ---\n${summary.replace(/<li>/g, '\n* ').replace(/<\/li>/g, '')}\n--------------------`;
    };


    // --- PERSONALIZED TEMPLATES FUNCTIONALITY ---

    /**
     * Extract clinic data from the form for API personalization
     */
    const extractClinicData = () => {
        const name = document.getElementById('clinic-name').value.trim();
        const doctorName = document.getElementById('doctor-name').value.trim();
        const location = document.getElementById('clinic-location').value.trim();
        const notes = document.getElementById('clinic-notes').value.trim();
        const website = document.getElementById('clinic-website').value.trim();
        const clientType = document.getElementById('client-type').value;

        // Extract specializations
        const specializations = currentSpecializations.length > 0
            ? currentSpecializations.join(', ')
            : 'dental services';

        // Extract city from location (simple heuristic)
        let city = 'your area';
        if (location) {
            const parts = location.split(',');
            if (parts.length >= 2) {
                city = parts[parts.length - 2].trim();
            } else {
                city = parts[0].trim();
            }
        }

        // Extract notes summary (first 200 chars)
        const notesSummary = notes.slice(0, 200).trim();

        return {
            clinic_name: name || 'your clinic',
            doctor_name: doctorName,
            location: location,
            city: city,
            specializations: specializations,
            notes_summary: notesSummary,
            website: website || 'none',
            client_type: clientType
        };
    };

    /**
     * Filter only the relevant template chains
     */
    const filterRelevantTemplates = () => {
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
                    color: TEMPLATE_CHAINS[chainName].color,
                    templates: TEMPLATE_CHAINS[chainName].templates.map(t => ({
                        id: t.id || '',
                        title: t.title,
                        timing: t.timing,
                        condition: t.condition,
                        content: t.content
                    }))
                });
            }
        });

        return { chains: filteredChains };
    };

    /**
     * Call DeepSeek API to personalize templates
     */
    const callDeepSeekAPI = async (clinicData, templates) => {
        // Check API key
        if (!config.DEEPSEEK_API_KEY || config.DEEPSEEK_API_KEY === 'PASTE_YOUR_DEEPSEEK_API_KEY_HERE') {
            throw new Error('DeepSeek API key not configured. Please add it to src/js/config.js');
        }

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
         "description": "...",
         "color": "...",
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

        const userContent = JSON.stringify({
            clinic_data: clinicData,
            templates: templates,
            instructions: "Personalize the templates above using the clinic data. Replace all placeholders and add slight customization based on specializations and notes. Keep the same format and structure. Return as valid JSON."
        });

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

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
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
            }

            const data = await response.json();
            let content = data.choices[0].message.content;

            // Remove markdown code blocks if present
            content = content.trim();
            if (content.startsWith('```json')) {
                content = content.replace(/^```json\s*/, '').replace(/```\s*$/, '');
            } else if (content.startsWith('```')) {
                content = content.replace(/^```\s*/, '').replace(/```\s*$/, '');
            }

            // Parse JSON response
            let personalizedTemplates;
            try {
                personalizedTemplates = JSON.parse(content.trim());
            } catch (e) {
                console.error('Failed to parse AI response. Raw content:', content);
                console.error('Parse error:', e);
                throw new Error('AI returned invalid JSON format. Please try again.');
            }

            // Validate structure
            if (!personalizedTemplates.chains || !Array.isArray(personalizedTemplates.chains)) {
                throw new Error('Invalid response structure from AI');
            }

            return personalizedTemplates;

        } catch (error) {
            if (error.name === 'AbortError') {
                throw new Error('Request timed out after 30 seconds. Please try again.');
            }
            throw error;
        }
    };

    /**
     * Display personalized templates in modal
     */
    const displayPersonalizedTemplates = (templatesData, clinicName, isSaved = false) => {
        const container = document.getElementById('personalized-templates-container');
        const modalTitle = document.getElementById('personalized-modal-title');

        modalTitle.textContent = `🎯 Personalized Templates for ${clinicName}`;
        container.innerHTML = '';

        // Add regenerate button if showing saved templates
        if (isSaved) {
            const regenerateSection = document.createElement('div');
            regenerateSection.style.cssText = 'padding: 16px; background: #f0f9ff; border-radius: 8px; margin-bottom: 20px; border: 1px solid #bfdbfe;';
            regenerateSection.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 16px;">
                    <div>
                        <p style="margin: 0; font-size: 14px; color: #0369a1;">
                            ✅ <strong>Using saved templates</strong> (no API call needed)
                        </p>
                        <p style="margin: 4px 0 0 0; font-size: 12px; color: #64748b;">
                            Want to update with latest clinic data?
                        </p>
                    </div>
                    <button id="regenerate-templates-btn" style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-size: 14px; font-weight: 600; cursor: pointer; white-space: nowrap;">
                        🔄 Regenerate
                    </button>
                </div>
            `;
            container.appendChild(regenerateSection);

            // Add event listener to regenerate button
            setTimeout(() => {
                const regenerateBtn = document.getElementById('regenerate-templates-btn');
                if (regenerateBtn) {
                    regenerateBtn.addEventListener('click', () => {
                        closePersonalizedModal();
                        setTimeout(() => handleGeneratePersonalizedTemplates(true), 100);
                    });
                }
            }, 0);
        }

        if (!templatesData.chains || templatesData.chains.length === 0) {
            container.innerHTML += `
                <div class="personalized-empty-state">
                    <h3>No templates generated</h3>
                    <p>Please try again.</p>
                </div>
            `;
            return;
        }

        templatesData.chains.forEach(chain => {
            const chainSection = document.createElement('div');
            chainSection.className = 'personalized-chain-section';

            const chainTitle = document.createElement('div');
            chainTitle.className = 'personalized-chain-title';
            chainTitle.style.borderLeftColor = chain.color || '#3b82f6';
            chainTitle.innerHTML = `
                <span style="color: ${chain.color || '#3b82f6'}">●</span>
                ${chain.chain_name}
            `;

            const chainDesc = document.createElement('div');
            chainDesc.className = 'personalized-chain-description';
            chainDesc.textContent = chain.description || '';

            chainSection.appendChild(chainTitle);
            if (chain.description) {
                chainSection.appendChild(chainDesc);
            }

            chain.templates.forEach(template => {
                const card = document.createElement('div');
                card.className = 'personalized-template-card';

                card.innerHTML = `
                    <div class="personalized-template-header">
                        <h4 class="personalized-template-title">${template.title}</h4>
                        <button class="personalized-copy-btn" data-content="${encodeURIComponent(template.content)}">📋 Copy</button>
                    </div>
                    <div class="personalized-template-meta">
                        <span class="personalized-template-timing">⏰ ${template.timing}</span>
                        <span class="personalized-template-condition">📌 ${template.condition}</span>
                    </div>
                    <div class="personalized-template-content">${template.content.replace(/\n/g, '<br>')}</div>
                `;

                chainSection.appendChild(card);
            });

            container.appendChild(chainSection);
        });

        // Add copy button listeners
        container.querySelectorAll('.personalized-copy-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const content = decodeURIComponent(e.target.getAttribute('data-content'));
                await copyPersonalizedTemplate(content, e.target);
            });
        });
    };

    /**
     * Copy personalized template to clipboard
     */
    const copyPersonalizedTemplate = async (content, button) => {
        try {
            await navigator.clipboard.writeText(content);
            const originalText = button.textContent;
            button.textContent = '✅ Copied!';
            button.classList.add('copied');
            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('copied');
            }, 1500);
        } catch (err) {
            console.error('Failed to copy:', err);
            button.textContent = '❌ Failed';
            setTimeout(() => {
                button.textContent = '📋 Copy';
            }, 1500);
        }
    };

    /**
     * Save personalized templates to clinic data
     */
    const savePersonalizedTemplates = async (clinicId, personalizedTemplates) => {
        try {
            console.log('Saving templates for clinic:', clinicId);
            const clinics = await getClinics();
            const clinic = clinics.find(c => c.id === clinicId);

            if (clinic) {
                clinic.personalizedTemplates = personalizedTemplates;
                clinic.personalizedTemplatesGeneratedAt = new Date().toISOString();
                console.log('Templates saved to clinic:', clinic.name);
                await saveClinics(clinics);
                console.log('Data saved to server');
            } else {
                console.error('Clinic not found for ID:', clinicId);
            }
        } catch (error) {
            console.error('Failed to save personalized templates:', error);
        }
    };

    /**
     * Get saved personalized templates for a clinic
     */
    const getSavedPersonalizedTemplates = async (clinicId) => {
        try {
            const clinics = await getClinics();
            const clinic = clinics.find(c => c.id === clinicId);
            console.log('Getting saved templates for clinic:', clinicId);
            console.log('Clinic found:', clinic?.name);
            console.log('Has saved templates:', !!clinic?.personalizedTemplates);
            return clinic?.personalizedTemplates || null;
        } catch (error) {
            console.error('Failed to get saved templates:', error);
            return null;
        }
    };

    /**
     * Main function to generate personalized templates
     */
    const handleGeneratePersonalizedTemplates = async (forceRegenerate = false) => {
        const generateBtn = document.getElementById('generate-personalized-templates-btn');
        const errorDiv = document.getElementById('personalized-error');
        const personalizedModal = document.getElementById('personalized-modal');
        const loadingDiv = document.getElementById('personalized-loading');
        const templatesContainer = document.getElementById('personalized-templates-container');

        // Clear previous errors
        errorDiv.style.display = 'none';
        errorDiv.textContent = '';

        // Validate required fields
        const clinicName = document.getElementById('clinic-name').value.trim();
        const doctorName = document.getElementById('doctor-name').value.trim();
        const clinicId = document.getElementById('clinic-id').value;

        if (!clinicName) {
            errorDiv.textContent = '⚠️ Please add a clinic name before generating templates.';
            errorDiv.style.display = 'block';
            document.getElementById('clinic-name').focus();
            return;
        }

        if (!doctorName) {
            errorDiv.textContent = '⚠️ Please add a doctor name before generating templates.';
            errorDiv.style.display = 'block';
            document.getElementById('doctor-name').focus();
            return;
        }

        try {
            // Open modal first
            personalizedModal.style.display = 'flex';
            templatesContainer.innerHTML = '';

            console.log('Generate templates - forceRegenerate:', forceRegenerate, 'clinicId:', clinicId);

            // Check if templates already exist (and not forcing regenerate)
            if (!forceRegenerate && clinicId) {
                console.log('Checking for saved templates...');
                const savedTemplates = await getSavedPersonalizedTemplates(clinicId);

                if (savedTemplates) {
                    console.log('Found saved templates! Loading without API call...');
                    // Show saved templates directly without API call
                    loadingDiv.style.display = 'none';
                    displayPersonalizedTemplates(savedTemplates, clinicName, true);
                    return;
                } else {
                    console.log('No saved templates found, will generate new ones');
                }
            } else {
                console.log('Skipping saved templates check - forceRegenerate:', forceRegenerate, 'clinicId:', clinicId);
            }

            // Disable button and show loading
            generateBtn.disabled = true;
            generateBtn.textContent = '⏳ Generating...';
            loadingDiv.style.display = 'block';

            // Extract data
            const clinicData = extractClinicData();
            const templates = filterRelevantTemplates();

            // Call API
            const personalizedTemplates = await callDeepSeekAPI(clinicData, templates);
            console.log('API call successful, templates generated');

            // Save to clinic data
            if (clinicId) {
                console.log('Attempting to save templates...');
                await savePersonalizedTemplates(clinicId, personalizedTemplates);
            } else {
                console.warn('No clinicId - templates will not be saved (new clinic not yet saved)');
            }

            // Hide loading and display templates
            loadingDiv.style.display = 'none';
            displayPersonalizedTemplates(personalizedTemplates, clinicName, false);

        } catch (error) {
            console.error('Error generating templates:', error);
            loadingDiv.style.display = 'none';
            templatesContainer.innerHTML = `
                <div class="personalized-empty-state">
                    <h3>❌ Error</h3>
                    <p>${error.message}</p>
                    <button onclick="document.getElementById('personalized-modal').style.display='none'" style="margin-top: 16px; padding: 8px 16px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer;">Close</button>
                </div>
            `;
        } finally {
            // Re-enable button
            generateBtn.disabled = false;
            generateBtn.textContent = '🤖 Generate Personalized Templates';
        }
    };

    /**
     * Close personalized templates modal
     */
    const closePersonalizedModal = () => {
        const personalizedModal = document.getElementById('personalized-modal');
        personalizedModal.style.display = 'none';
    };


    // --- SEARCH AND FILTER FUNCTIONALITY ---

    const applyFilters = () => {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const locationFilter = document.getElementById('location-filter').value;
        const priorityFilter = document.getElementById('priority-filter').value;
        const specializationFilter = document.getElementById('specialization-filter').value;

        const allCards = document.querySelectorAll('.clinic-card');

        allCards.forEach(card => {
            const name = card.getAttribute('data-name') || '';
            const doctor = card.getAttribute('data-doctor') || '';
            const location = card.getAttribute('data-location') || '';
            const priority = card.getAttribute('data-priority') || '';
            const specializations = card.getAttribute('data-specializations') || '';

            // Search filter
            const matchesSearch = !searchTerm ||
                name.includes(searchTerm) ||
                doctor.includes(searchTerm) ||
                location.toLowerCase().includes(searchTerm) ||
                specializations.toLowerCase().includes(searchTerm);

            // Location filter
            const matchesLocation = !locationFilter || location === locationFilter;

            // Priority filter
            const matchesPriority = !priorityFilter || priority === priorityFilter;

            // Specialization filter
            const matchesSpecialization = !specializationFilter ||
                specializations.split(',').map(s => s.trim()).includes(specializationFilter);

            // Show/hide card based on all filters
            if (matchesSearch && matchesLocation && matchesPriority && matchesSpecialization) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });

        // Update column counts
        document.querySelectorAll('.column').forEach(column => {
            const columnHeader = column.querySelector('.column-header');
            const visibleCards = Array.from(column.querySelectorAll('.clinic-card')).filter(card =>
                card.style.display !== 'none'
            );
            const columnName = columnHeader.textContent.split('(')[0].trim();
            columnHeader.innerHTML = `${columnName} <span style="opacity: 0.7; font-weight: 600;">(${visibleCards.length})</span>`;
        });
    };

    // --- EVENT LISTENERS ---

    addClinicBtn.addEventListener('click', () => openModal());
    cancelBtn.addEventListener('click', closeModal);
    form.addEventListener('submit', saveClinic);
    deleteBtn.addEventListener('click', deleteClinic);
    addContactNumberBtn.addEventListener('click', () => addContactNumberField());

    viewWorkflowBtn.addEventListener('click', () => workflowModal.style.display = 'flex');
    closeWorkflowBtn.addEventListener('click', () => workflowModal.style.display = 'none');

    aiSummarizeBtn.addEventListener('click', handleAiSummarize);

    // Personalized templates listeners
    generatePersonalizedBtn.addEventListener('click', () => handleGeneratePersonalizedTemplates());
    closePersonalizedBtn.addEventListener('click', closePersonalizedModal);

    // Search and filter listeners
    document.getElementById('search-input').addEventListener('input', applyFilters);
    document.getElementById('location-filter').addEventListener('change', applyFilters);
    document.getElementById('priority-filter').addEventListener('change', applyFilters);
    document.getElementById('specialization-filter').addEventListener('change', applyFilters);

    // Specialization input listener
    document.getElementById('specialization-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const input = document.getElementById('specialization-input');
            addSpecialization(input.value);
            input.value = '';
        }
    });

    // Close modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
        if (e.target === workflowModal) workflowModal.style.display = 'none';
        if (e.target === personalizedModal) closePersonalizedModal();
    });


    // --- INITIALIZATION ---

    const initialize = async () => {
        // Hide "Add Clinic" button in production
        if (!window.ENV_CONFIG?.features.canAddClinic) {
            const addBtn = document.getElementById('add-clinic-btn');
            if (addBtn) {
                addBtn.style.display = 'none';
                console.log('🔒 Add Clinic button hidden (read-only mode)');
            }
        }

        populateStatusDropdown();
        populateMessageTemplates();
        populateWorkflowModal();
        await renderBoard();

        // Add smooth entrance animation
        document.querySelector('header').style.animation = 'slideUp 0.5s ease';
        document.getElementById('board').style.animation = 'slideUp 0.6s ease';

        console.log('✅ CRM initialized in', window.ENV_CONFIG?.environment || 'unknown', 'mode');
    };

    initialize();
});
