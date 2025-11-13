# 🧩 Contributing to Rexime

Thank you for thinking about contributing! 🎉
Your contributions make open-source better, stronger, and more impactful.
This document will guide you through setting up Rexime locally — including Supabase integration and Google Authentication — so you can start contributing smoothly.

---

## 📌 Before You Start

- Please read and agree to the **Code of Conduct**.
- Be respectful and constructive when communicating with maintainers or community members.
- Make sure you are using the latest versions of:

  - **Node.js**
  - **pnpm**
  - **Git**

- Follow the setup steps carefully to ensure your local environment matches the project requirements.

---

## 🧱 Project Overview

Rexime is a **modern resume builder** built with:

- **Next.js 15** for the frontend
- **Supabase** for authentication and database
- **TypeScript** for strong typing
- **ShadCN/UI** for a consistent and modern interface

### Directory Structure

```
/src
  ├── components/       → Reusable UI components
  ├── app/              → Next.js app routes
  ├── lib/              → Utility functions and Supabase client setup
  └── hooks/            → Hooks
```

---

## ⚙️ Local Development Setup

```bash
git clone https://github.com/your-username/rexime.git
cd rexime
pnpm install
cp .env.example .env.local
pnpm run dev
```

By default, the app runs on:
🔘 **[http://localhost:3000](http://localhost:3000)**

---

# 🧩 Supabase Setup

Rexime uses **Supabase** for user authentication and data storage.
To run Rexime locally, you need your own Supabase project with proper configuration.

---

## 1️⃣ Create a Supabase Project

1. Go to **[https://supabase.com](https://supabase.com)**.
2. Sign in using your GitHub or email account.
3. Click **“New Project”**.
4. Set the name to `rexime-dev` (or any name you prefer).
5. Wait for the project setup to complete.
6. Once ready, open your **Project Dashboard**.

---

## 2️⃣ Add Database Schemas

Rexime requires specific tables to store user data and resume information.

1. In your Supabase dashboard, navigate to:

   ```
   SQL Editor → New Query
   ```

2. Copy and paste the following SQL schemas, then click **Run**.

### 🗾 Schema 1 — `user registration`

```sql
create or replace function handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.users (id, email, full_name)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function handle_new_user();
```

---

### 🗾 Schema 2 — `users and resumes`

```sql
create table public.users (
  id uuid not null default auth.uid (),
  email text null,
  full_name text null,
  created_at timestamp with time zone null default now(),
  constraint users_pkey primary key (id)
) TABLESPACE pg_default;

create table if not exists public.resumes (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.users(id) on delete cascade,
  title text not null,
  data jsonb null,
  created_at timestamptz default now()
);

create index if not exists resumes_user_id_idx on public.resumes(user_id);
```

> ✅ **Note:**
> Ensure both tables are created successfully.
> You can verify under **Table Editor → Public**.

---

## 3️⃣ Get Your Supabase API Keys

1. Go to **Project Settings → API**.
2. Copy the following values:

   - `Project URL`
   - `Anon Public Key`

3. Add them to your `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

---

# 🔐 Google Authentication Setup

Users and contributors must configure Google Auth manually through the **Google Cloud Platform (GCP)** to authenticate locally.

---

## 1️⃣ Create a Google Cloud Project

1. Visit **[Google Cloud Console](https://console.cloud.google.com/)**.
2. Click **“Create Project”** → Name it `rexime-auth`.
3. After creation, open the **Navigation Menu → APIs & Services → Credentials**.
4. Click **“Create Credentials → OAuth Client ID”**.

---

## 2️⃣ Configure OAuth Consent Screen

1. Go to **OAuth consent screen**.
2. Set:

   - App name: `Rexime Local`
   - User support email: your email
   - Authorized domains: `localhost`

3. Save the configuration.

---

## 3️⃣ Add Authorized Redirect URLs and Javascript Origins

Under your **OAuth Client**, add these Javascript origins URLs:

```
http://localhost:3000
```

Under your **OAuth Client**, add these redirect URLs:

```
https://supabaseurl/auth/callback
```

Copy the generated:

- **Client ID**
- **Client Secret**

---

## 4️⃣ Add Google Auth Keys to Supabase

1. Go back to your Supabase project.
2. Navigate to:

```

Authentication → Providers → Google

```

3. Enable **Google Auth**.
4. Paste your **Client ID** and **Client Secret** from Google Cloud.

---

## 5️⃣ Add Auth Variables to `.env.local`

Add the following lines in your `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=****************
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=****************

SITE_URL=http://localhost:3000

DODO_PAYMENTS_API_KEY=****************
DODO_PAYMENTS_RETURN_URL=http://localhost:3000/checkout/success

DODO_PAYMENTS_API_KEY_PROD=****************
DODO_PAYMENTS_RETURN_URL_PROD=https://rexime.vercel.app/checkout/success
```

> ⚠️ **Important:** Never share your keys publicly.
> These are for local testing only.

---

## 6️⃣ Verify the Setup

Now run your local server:

```bash
pnpm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)**, and try signing in with Google.
If successful, Supabase will automatically create a user record in your `users` table.

🗸️ _Placeholder for Screenshot: Successful Google Sign-In on localhost_

---

# 🐞 Bug Report Template

**Describe the Bug**
A clear and concise description of the issue.

**Steps to Reproduce**

1. Go to...
2. Click...

**Expected Behavior**
What should have happened?

**Screenshots (optional)**

**Environment**

- OS:
- Browser:

---

# 🚀 Pull Request Template

### Description

Explain what this PR does.

### Related Issue

Link to the related issue (if applicable).

### Checklist

- [ ] Tested locally
- [ ] Code follows style guidelines
- [ ] Does not break existing features
- [ ] Targets the `develop` branch

---

# 🔄 Branching & Sync Guidelines

- All new contributions should be based on the **`develop`** branch.
- The **`main`** branch contains the stable production version.

### To stay up-to-date:

```bash
git fetch upstream
git checkout develop
git pull upstream develop
```

Then create your feature branch:

```bash
git checkout -b feat/your-feature
```

---

# ❤️ Thank You

Every contribution — whether it’s fixing a bug, improving the UI, or writing documentation — helps Rexime grow.
Thank you for being a part of the Rexime community 🙌
Together, we’re building something powerful, creative, and open for everyone.
