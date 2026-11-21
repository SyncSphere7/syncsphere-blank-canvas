# SyncSphere website

The website for [syncspherellc.com](https://www.syncspherellc.com): websites, WhatsApp automation and digital marketing for Ugandan and international businesses.

Built with Next.js (App Router), TypeScript and Tailwind CSS, hosted on Vercel.

## Where things are

| What | File |
|---|---|
| Phone, WhatsApp, email, address, company details | `src/lib/site.ts` |
| All prices (UGX and USD) and payment terms | `src/lib/pricing.ts` |
| Services, industries, FAQs, process steps | `src/lib/content.ts` |
| Blog posts | `src/lib/blog.ts` |
| Pages | `src/app/**/page.tsx` |
| Contact form email | `src/app/api/contact/route.ts` |
| Flutterwave payments | `src/lib/payments.ts`, `src/app/api/pay/*`, `src/app/pay/*` |
| Free website grader | `src/lib/grader.ts`, `src/app/api/grader/route.ts` |
| Old URLs redirected to new ones | `next.config.mjs` |

Change a price or phone number in `src/lib/` and every page that shows it updates.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in the values you have
npm run dev
```

## Environment variables

See `.env.example`. In short:

- `RESEND_API_KEY` — needed for the contact form and grader leads.
- `FLW_SECRET_KEY`, `PAYMENT_SIGNING_SECRET`, `FLW_WEBHOOK_HASH` — Flutterwave. Until the first two are set, `/pay` shows a "contact us to pay" message instead of a checkout.

## Turning on Flutterwave payments

1. Get the merchant account approved and copy the **live secret key**.
2. In Vercel → Project → Settings → Environment Variables (Production), add:
   - `FLW_SECRET_KEY` — the secret key
   - `PAYMENT_SIGNING_SECRET` — any long random string
   - `FLW_WEBHOOK_HASH` — any long random string
3. In Flutterwave → Settings → Webhooks, set the URL to `https://www.syncspherellc.com/api/pay/webhook` and paste the same value as `FLW_WEBHOOK_HASH` into "Secret hash".
4. Redeploy. Test with a small Mobile Money payment; a notification email goes to finance@syncspherellc.com.
