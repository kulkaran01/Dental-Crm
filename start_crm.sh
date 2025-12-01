#!/bin/bash
# This script starts the CRM server and opens the application in the default web browser.

# Get the directory where the script is located
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

echo "========================================="
echo "  Starting Dental CRM Application"
echo "========================================="
echo ""
echo "Step 1: Starting the Node.js server..."
echo ""

# Start the server in the background
cd "$DIR"
node server/server.js &
SERVER_PID=$!

echo "Server started with PID: $SERVER_PID"
echo ""
echo "Step 2: Waiting for server to initialize..."
sleep 3

echo ""
echo "Step 3: Opening CRM in your browser..."
echo ""

# Open the browser
xdg-open "http://localhost:3000" || sensible-browser "http://localhost:3000" || x-www-browser "http://localhost:3000"

echo ""
echo "========================================="
echo "  CRM is running at http://localhost:3000"
echo "========================================="
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Wait for the server process
wait $SERVER_PID
