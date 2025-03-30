#!/bin/bash

# Define variables
LOG_FILE="/var/log/app.log"
BUCKET_NAME="cactro-test-bucket"
DATE=$(date +%Y-%m-%d)
S3_PATH="logs/${DATE}/app.log.gz"
COMPRESSED_FILE="/tmp/app.log.gz"
LOG_AUDIT="/var/log/upload_s3.log"

# Compress the log file
gzip -c "$LOG_FILE" > "$COMPRESSED_FILE"

# Upload to S3
aws s3 cp "$COMPRESSED_FILE" "s3://$BUCKET_NAME/$S3_PATH" >> "$LOG_AUDIT" 2>&1

# Log success or failure
if [ $? -eq 0 ]; then
    echo "$(date) - Log upload successful: $S3_PATH" >> "$LOG_AUDIT"
else
    echo "$(date) - Log upload FAILED" >> "$LOG_AUDIT"
fi

# Clean up
rm "$COMPRESSED_FILE"
