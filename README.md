# SaaS Subscription Management Platform
College/demo full-stack starter: Next.js frontend, Express API, PostgreSQL and Stripe Checkout test mode.

## Requirements
Node.js 20+, PostgreSQL, pgAdmin 4. Stripe account only needed for payment checkout.

## Database
In pgAdmin create database `saas_platform`.

## Backend
```powershell
cd backend
npm install
Copy-Item .env.example .env
```
Edit `backend/.env`: set PostgreSQL password in DATABASE_URL and create a long JWT_SECRET.
```powershell
npm run db:init
npm run dev
```
API runs at http://localhost:5000. Test http://localhost:5000/api/health.

## Frontend (second terminal)
```powershell
cd frontend
npm install
Copy-Item .env.local.example .env.local
npm run dev
```
Open http://localhost:3000.

## Make an admin
Register through the app, then in pgAdmin Query Tool run:
```sql
UPDATE users SET role='admin' WHERE email='your-email@example.com';
```
Sign out and sign back in.

## Stripe test mode
Set `STRIPE_SECRET_KEY=sk_test_...` in backend/.env. Install Stripe CLI and run:
```powershell
stripe listen --forward-to localhost:5000/api/billing/webhook
```
Copy its `whsec_...` value into STRIPE_WEBHOOK_SECRET, restart backend. Subscribe using Stripe test card 4242 4242 4242 4242, any future expiry, any CVC.
Never use live keys for a demo or commit .env files.

This is an educational starter, not production-ready billing software. Production requires additional security, tax, email, audit, retry, and subscription reconciliation work.
