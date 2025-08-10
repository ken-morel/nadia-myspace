# Gemini Project Overview: Nadia Myspace

This document provides a high-level overview of the "Nadia Myspace" web application for future development sessions.

## 1. Project Purpose

Nadia Myspace is a simple, modern web application designed to collect and display user feedback about their transportation experiences. It features a visually appealing home page with an animated, continuous scroll of user-submitted quotes, and a clean, user-friendly form for submitting new experiences.

## 2. Tech Stack

-   **Framework:** SvelteKit
-   **Language:** TypeScript
-   **Styling:** SASS (`.sass`) with a custom design system defined in `src/theme.sass`.
-   **Linting & Formatting:** ESLint and Prettier.
-   **Deployment:** The `build` script suggests a standard Node.js deployment using `vite build`.

## 3. Project Structure

-   `src/routes/`: Contains all the pages of the application, following the SvelteKit file-based routing system.
    -   `+page.svelte`: The home page.
    -   `+layout.svelte`: A global layout component that provides a consistent header and footer for all pages.
    -   `survey/+page.svelte`: The page for submitting a new experience.
    -   `survey/thank-you/+page.svelte`: The confirmation page shown after a successful submission.
-   `src/lib/`: Contains shared application logic.
    -   `submissions.store.ts`: An in-memory Svelte store used to hold user-submitted experiences during a server session.
-   `src/theme.sass`: Defines the application's design system, including colors, typography, spacing, and shadows.
-   `static/`: Contains all static assets, such as the `nadia-logo.jpg` favicon.
-   `src/app.html`: The main HTML shell for the application. It includes the Google Fonts import and the meta tags for social media previews.

## 4. Key Features

### Home Page (`/`)

-   Displays a hero section with the application's tagline.
-   Features a "Recent Experiences" section that showcases user-submitted quotes.
-   The quotes are displayed in a continuous, looping horizontal scroller that is implemented using a pure CSS keyframe animation.
-   The animation pauses when a user hovers their mouse over the scroller.
-   Individual cards expand with a subtle scaling effect on hover to improve interactivity.

### Survey Page (`/survey`)

-   Provides a clean, centered form for users to submit their experiences.
-   The form includes a styled `textarea` and a submit button.
-   Upon submission, the data is sent to the server-side `+page.server.ts`.

### Data Handling

-   Survey submissions are handled by `src/routes/survey/+page.server.ts`.
-   The submissions are stored in a simple in-memory Svelte store (`src/lib/submissions.store.ts`). **Note:** This means the data is not persistent and will be cleared when the server restarts.
-   The home page loads the submissions from this store via its `+page.server.ts` file.

## 5. Running the Project

-   **Install dependencies:** `npm install`
-   **Run in development mode:** `npm run dev`
-   **Build for production:** `npm run build`
-   **Preview the production build:** `npm run preview`
