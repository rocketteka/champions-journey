#!/bin/zsh
# Run this ONCE in Terminal.app (not inside Cursor agent):
#   chmod +x scripts/firebase-login.sh && ./scripts/firebase-login.sh
#
# Then tell the agent "готово" — it will deploy rules and seed accounts.

set -euo pipefail
cd "$(dirname "$0")/.."

echo "Opening Firebase login in your browser…"
npx --yes firebase-tools login

echo ""
echo "Logged in. Next (agent can run these):"
echo "  npx firebase-tools use champions-journey-ffb8d"
echo "  npx firebase-tools firestore:databases:create '(default)' --location=eur3 || true"
echo "  npx firebase-tools deploy --only firestore:rules"
echo "  node scripts/seed-test-accounts.mjs"
