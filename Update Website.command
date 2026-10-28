#!/bin/bash
# Double-click to copy the newest CV, rebuild the publications list, sync the
# Experience page and presentations with the CV, then publish.
cd "$(dirname "$0")" || exit 1
python3 scripts/update_website.py "$@"
echo
read -n 1 -s -r -p "Press any key to close this window..."
