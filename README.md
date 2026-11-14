# NeuroFlow AI

A responsive SaaS landing page for a fictional AI productivity workspace. The sample document studio, FAQ, navigation and request form run in the browser.

## Run locally

Use Node.js 22.12+ and npm. Open a terminal in this folder and run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To create and preview a production build, run `npm run build`, then `npm run preview`. For Vercel select Vite, build with `npm run build` and publish `dist`.

## Technologies

React 19, JavaScript (JSX), Vite, plain CSS and React Icons.

## Design choices and challenges

- The document studio shows how a brief turns into a digest and action items using local sample data.
- A single preview keeps attention on the product and avoids repeating the dashboard.
- Violet identifies primary actions, and dark ink keeps headings legible on pale backgrounds.
- The two-column hero stacks on smaller screens and the navigation collapses into a menu.
- The pricing buttons lead to the demo form, which validates input and confirms completion locally.
- Keyboard focus states, native form labels and reduced-motion support make interactions accessible.

## Demo walkthrough

Choose Research notes in the preview, then select Action items. Open an FAQ, follow a pricing button to Contact, and try submitting with an invalid email before completing the form. Team stories and prices are illustrative.
