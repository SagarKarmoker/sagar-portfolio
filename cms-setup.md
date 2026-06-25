You need a GitHub OAuth App to let Keystatic write changes to your repo from the CMS UI.

Steps

1. Go to https://github.com/settings/developers â New OAuth App
2. Fill in:
  - Application name: sagar-portfolio-cms
  - Homepage URL: http://localhost:3000 (dev) or your deployed URL
  - Authorization callback URL: http://localhost:3000/api/keystatic/github/callback (dev) or https://yoursite.com/api/keystatic/github/callback
3. Click Register application
4. Copy Client ID â KEYSTATIC_GITHUB_CLIENT_ID
5. Click Generate a new client secret â copy secret â KEYSTATIC_GITHUB_CLIENT_SECRET

Also set these in .env:

KEYSTATIC_GITHUB_REPO_OWNER=SagarKarmoker
KEYSTATIC_GITHUB_REPO_NAME=sagar-portfolio

How it works

With those set, Keystatic switches from local storage (reads from disk) â github storage (writes commits to your repo). Without them it falls back to local mode â CMS edits only save to disk, no commits.

To test: KEYSTATIC_GITHUB_CLIENT_ID=xxx KEYSTATIC_GITHUB_CLIENT_SECRET=xxx npm run dev then visit /keystatic.