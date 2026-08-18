#!/bin/sh
# Mirrors the full WordPress installation from IONOS over FTPS.
# Credentials come from ~/.netrc so they never appear in the command,
# your shell history, or this file.
#
#   ~/.netrc must contain:
#     machine home129828695.1and1-data.host
#     login u38348693
#     password YOUR_PASSWORD
#   then: chmod 600 ~/.netrc
#
# Re-running resumes; it only transfers what changed.

set -e
HOST=home129828695.1and1-data.host
DEST="$(cd "$(dirname "$0")/.." && pwd)/wp-site"

mkdir -p "$DEST"
lftp -e "mirror --verbose --continue --parallel=4 --exclude-glob wp-content/uploads/ /wordpress \"$DEST\"; bye" "$HOST"

echo
echo "Done. Files in: $DEST"
find "$DEST" -type f | wc -l | tr -d ' ' | xargs echo "Total files:"
