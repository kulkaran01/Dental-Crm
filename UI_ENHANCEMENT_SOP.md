# Standard Operating Procedure (SOP) for UI/UX Enhancements
**Project:** Dental Client CRM  
**Date:** December 2, 2025  
**Objective:** Elevate the user interface and experience for both mobile and desktop platforms to increase sales efficiency and usability.

---

## 1. Mobile Experience Optimization ("On-the-Go" Mode)
*Current Issue:* The mobile view stacks all 9 columns vertically, resulting in excessive scrolling. The header consumes significant screen real estate.

### 1.1. Implement Horizontal Column Swiping
**Goal:** Mimic native app behavior (like Trello/Jira) to navigate stages efficiently.
*   **Action:** Change the `#board` layout on mobile from a vertical grid to a horizontal flex container with snap scrolling.
*   **Technical Implementation:**
    *   Set `#board` to `display: flex; overflow-x: auto; scroll-snap-type: x mandatory;`.
    *   Set `.column` to `min-width: 85vw; scroll-snap-align: center;`.
    *   Add pagination dots or a small indicator to show which column is active.

### 1.2. Collapsible/Sticky Header
**Goal:** Maximize the visible workspace for lead cards.
*   **Action:**
    *   On scroll down, automatically hide the "Stats Bar" and "Filters".
    *   Keep only the "Search" bar and a "Menu" hamburger button sticky at the top.
*   **Technical Implementation:** Use JavaScript `IntersectionObserver` or scroll event listeners to toggle a `.header-compact` class.

### 1.3. Bottom Navigation Bar
**Goal:** Quick access to core features without scrolling to the bottom.
*   **Action:** Introduce a fixed bottom navigation bar with three tabs:
    *   **Board:** (Active View)
    *   **Templates:** (Opens the template drawer)
    *   **Stats/Menu:** (Opens settings, guide, and full stats)

---

## 2. Desktop Productivity Booster ("Command Center" Mode)
*Current Issue:* Templates are located at the very bottom, forcing the user to lose context of the board when searching for scripts.

### 2.1. Split-Screen / Sidebar Templates
**Goal:** Allow users to view the Kanban board and copy templates simultaneously.
*   **Action:** Move the "WhatsApp Message Templates" section to a collateral sidebar on the right side.
*   **Technical Implementation:**
    *   Create a toggle button "💬 Scripts".
    *   When active, shrink `#board` width to 70% and slide in the Template Sidebar (30%) from the right.
    *   Ensure the sidebar is scrollable independently of the board.

### 2.2. Quick Actions on Hover
**Goal:** Reduce clicks for common actions.
*   **Action:** When hovering over a card, display overlay buttons:
    *   **→** (Move to Next Stage)
    *   **WhatsApp** (Open WhatsApp Web link directly if number exists)
    *   **Edit** (Open Modal)

### 2.3. "Aging" Indicators
**Goal:** Visually highlight neglected leads.
*   **Action:** Add a visual cue for cards stuck in a "Follow-up" stage for too long.
    *   > 2 days: Yellow border.
    *   > 5 days: Red border + "⚠️ Needs Action" badge.

---

## 3. Visual & Functional Polish (Global)

### 3.1. Drag and Drop Functionality
**Goal:** Intuitive lead management.
*   **Action:** Implement a drag-and-drop library (like `Dragula` or `SortableJS`) to allow moving cards between columns effortlessly, updating the status automatically upon drop.

### 3.2. Dark Mode Toggle
**Goal:** Reduce eye strain during night shifts (aligned with the "Night (Preparation)" workflow).
*   **Action:** Add a toggle in the header.
*   **Technical:** Use CSS variables (already present) to swap `--main-bg`, `--text-color`, etc., to dark values.

### 3.3. Smart Search
**Goal:** Find leads faster.
*   **Action:** Enhance the search bar to support "commands":
    *   Type `hot:` to filter only hot leads.
    *   Type `city:Mumbai` to filter by location.

---

## 4. Implementation Roadmap

| Phase | Task | Priority | Estimated Time |
| :--- | :--- | :--- | :--- |
| **1** | **Mobile Horizontal Scroll** | High | 45 mins |
| **2** | **Sidebar Templates (Desktop)** | High | 60 mins |
| **3** | **Drag and Drop** | Medium | 90 mins |
| **4** | **Visual Aging Indicators** | Low | 30 mins |
