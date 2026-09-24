# Muse.ai Referral Landing Page (1 Billion Tokens)

A modern, responsive, high-converting one-page referral landing website for **Muse.ai**.

- **Invite Code**: `V0B3MP`
- **Referral URL**: `https://muse.ai/join`
- **Reward**: 1 Billion Muse.ai tokens for the new user + 1 Billion for the referrer upon qualification.
- **Redemption Tip**: Redeem code in Settings within 48 hours of joining.
- **Mobile Path**: `Settings → Redeem token`
- **Web Path**: `Settings → General → Usage → Redeem invite code`

---

## 🧭 Code Redemption Flowchart

```
Get your friend's invite code (V0B3MP)
           ↓
Open Muse and go to the redeem screen:
  • Mobile: Settings → Redeem token
  • Web: Settings → General → Usage → Redeem invite code
           ↓
Enter the code and confirm
           ↓
Was the code accepted?
  ├─ YES → Reward credited to your account. The redeem entry disappears.
  └─ NO  → Screen displays diagnostic reason:
           (invalid, used up, revoked, already redeemed, expired window, too many attempts, temporary failure)
```

---

## 🚀 One-Click Deploy to Vercel

You can deploy this repository directly to Vercel:

1. Push this repository to your GitHub account (see instructions below).
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**.

`vercel.json` is already included to configure client-side SPA routing and build output.

---

## 📦 How to Push This Project to Your GitHub

If you have a GitHub repository created (e.g. `https://github.com/<your-username>/<your-repo-name>`):

```bash
# 1. Initialize git (if not already done)
git init

# 2. Stage all files
git add .

# 3. Commit
git commit -m "Initial commit: Muse.ai 1B tokens referral landing page"

# 4. Set main branch
git branch -M main

# 5. Link to your GitHub repo
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git

# 6. Push to GitHub
git push -u origin main
```

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## ⚙️ Referral Code Configuration

To modify the invite code or referral link in the future, edit:
`src/config/referralConfig.ts`
All hero cards, copy buttons, step guides, quick-start boxes, and CTAs will automatically update.
