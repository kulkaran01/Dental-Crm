# Dental Clinic CRM - README

## Project Overview

This is a simple, locally-run Customer Relationship Management (CRM) application designed to help manage the sales workflow for selling high-ticket websites to dental clinics. It provides a visual Kanban board to track leads, stores detailed clinic information, and integrates AI to assist with summarizing conversations.

## File Structure & Purpose

Here is a breakdown of the files in this project and their roles:

-   `index.html`: The main HTML file that defines the structure and layout of the user interface (UI), including the Kanban board, modals, and input forms.

-   `style.css`: Contains all the Cascading Style Sheets (CSS) rules that style the application, ensuring a clean and user-friendly visual presentation.

-   `script.js`: The core client-side logic of the application, written in JavaScript. This file is responsible for:
    -   Handling user interactions (e.g., button clicks, form submissions).
    -   Dynamically rendering the Kanban board and clinic cards.
    -   Managing the display and logic of modals for adding/editing clinics.
    -   Communicating with the backend server to fetch and save data.
    -   Implementing features like the cold-call checklist and dynamic contact fields.

-   `config.js`: A simple configuration file where you place your personal DeepSeek API key. This keeps your sensitive key separate from the main application logic.

-   `server.js`: A lightweight backend server built with Node.js. Its primary functions are:
    -   To serve the static files (`index.html`, `style.css`, `script.js`, etc.) to your browser.
    -   To provide API endpoints (`/api/clinics`) that allow the frontend to read data from and write data to the `data.json` file.

-   `data.json`: This file acts as the simple database for the application. It stores all your clinic data in a JSON format (an array of clinic objects).

-   `launch_crm.bat`: A Windows batch script created for your convenience. It automates the process of starting the application by:
    1.  Running the `server.js` in a new terminal window.
    2.  Opening the CRM application in your default web browser.

-   `CONTEXT.md`: A document that tracks the development progress and current status of features requested for the CRM.

-   `README.md`: This file, providing an overview of the project.

## How to Run the Application

1.  **Prerequisites:** Ensure you have [Node.js](https://nodejs.org/) installed on your system. This is required to run the `server.js` file.
2.  **Launch:** Simply double-click the `launch_crm.bat` file.
3.  **Keep the Server Running:** A new terminal window titled "Dental CRM Server" will open. This window **must remain open** for the CRM to function correctly, as it is responsible for saving and loading your data. You can minimize this window.
4.  **Access the CRM:** Your default web browser should automatically open to `http://localhost:3000`, where you can begin using the CRM.
