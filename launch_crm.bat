@echo off
echo =================================================================
echo  Starting the Dental CRM Application...
echo =================================================================
echo.
echo  This script will start the background server and then your browser.
echo  If the browser does not open, please copy any error messages
echo  you see in this window.
echo.
echo  Step 1: Starting the background server...
echo.

REM The 'start' command opens a new window to run the server, so it doesn't block this script.
start "Dental CRM Server" wsl.exe node "/home/kulkaran/Work/policies/notes/dental high ticket indian clinic/personal crm/server/server.js"

echo  Step 2: Waiting for the server to initialize...
REM A short delay to give the server time to start up before launching the browser.
timeout /t 3 /nobreak > nul
echo.

echo  Step 3: Opening the CRM in your browser at http://localhost:3000
echo.
explorer.exe http://localhost:3000

echo  ---
echo  This window will remain open. If the browser did not open,
echo  please copy any errors from this window and share them.
echo  The important window is the one titled "Dental CRM Server",
echo  which must remain open.
echo.

pause
