# Zahid Abbas portfolio

A responsive Next.js portfolio inspired by the supplied design: white surfaces, a yellow-accented ZA logo, animated portrait, project cards, experience, skills, certificates, and a contact form.

## Run locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set `MONGODB_URI` to enable project loading and contact-message storage. The local `.env.local` already has the WhatsApp number you provided; `.env.local` is ignored by Git. Add the same `NEXT_PUBLIC_WHATSAPP_NUMBER` to your hosting environment to show WhatsApp links after deployment. The Projects section uses clearly labeled sample concepts when MongoDB is not configured. The contact API returns a setup error until a database is configured.

The floating portfolio chat includes quick replies and links into the dedicated pages. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to an international phone number with country code (digits only) to include an optional WhatsApp conversation link. Replace the sample email address in `src/data/portfolioData.ts` before publishing.

## Project layout

- `public/images/profile.png` — supplied profile image.
- `public/images/projects/` and `public/images/certificates/` — add project and certificate artwork here.
- `src/app/` — Next.js pages, icon, and API route handlers.
- `src/app/about/`, `skills/`, `experience/`, `projects/`, `certificates/`, and `contact/` — dedicated portfolio pages. Home also previews every portfolio section.
- `src/components/home/HomePage.tsx` — composes the complete home page from all portfolio sections.
- `src/components/navbar/` and `src/components/footer/` — shared site navigation and footer.
- `src/components/hero/`, `about/`, `skills/`, `experience/`, `projects/`, `certificates/`, and `contact/` — independently organized section components.
- `src/components/layout/` — shared shell for the dedicated section pages.
- `src/components/ui/` — reusable buttons, cards, skill icons, progress rings, chat assistant, and animated theme toggle.
- `src/data/portfolioData.ts` — editable profile, skills, experience, and sample project content.
- `src/lib/mongodb.ts` — cached MongoDB connection.
- `src/models/` — Mongoose contact-message and project schemas.
- `src/types/` — shared TypeScript types.

The navbar theme switch follows the saved browser preference (or system dark-mode preference) and animates between the white/yellow light theme and charcoal/yellow dark theme.

## MongoDB collections

The `projects` collection displays documents with `isPublished: true`, ordered by `order`. Project documents include `title`, `category`, `description`, `technologies`, `preview` (`store`, `dashboard`, or `travel`), optional `href`, `order`, `featured`, and `isPublished`.

The `messages` collection stores validated contact form submissions. Keep `.env.local` and all MongoDB credentials private.

## Validation

```bash
npm run lint
npm run build
```
