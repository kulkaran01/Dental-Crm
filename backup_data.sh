#!/bin/bash
# Quick backup script for your CRM data

# Get the directory where the script is located
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Create backups directory if it doesn't exist
mkdir -p "$DIR/backups"

# Create timestamp for backup file
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="$DIR/backups/data_backup_$TIMESTAMP.json"

# Copy data.json to backups with timestamp
if [ -f "$DIR/data.json" ]; then
    cp "$DIR/data.json" "$BACKUP_FILE"
    echo "✓ Backup created successfully!"
    echo "  File: $BACKUP_FILE"

    # Show backup file size
    SIZE=$(du -h "$BACKUP_FILE" | cut -f1)
    echo "  Size: $SIZE"

    # Count number of backups
    BACKUP_COUNT=$(ls -1 "$DIR/backups" | wc -l)
    echo "  Total backups: $BACKUP_COUNT"
else
    echo "✗ Error: data.json not found!"
    echo "  Make sure you've saved at least one clinic first."
fi
