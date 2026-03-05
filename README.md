# Retail Price Calculator

A React + TypeScript calculator for retail pricing with volume discounts and regional tax.

**Live Instance:** [fs.codesim.dev](https://fs.codesim.dev)

## Quick Start

Clone the repository and navigate to the project directory.

```bash
pnpm i          # Install dependencies
pnpm dev        # Run the development server
pnpm test       # Run all tests
```

## Approach & Reasoning

### Where I started

Before writing any code I worked through the calculation manually to understand the business rules and verify the expected outputs. I used this as a fixed reference point in my tests before building any UI.

### Issue order

- **Logic first** — calculation utils are pure functions with no React dependency, making them easy to test in isolation before any UI exists
- **UI second** — once the logic was proven correct I built the form and wired it up
- **Refactor last** — Refactors and polish are left for the end when the core functionality is working.

## How It Works

Enter quantity, price per item, and region. The app computes:

**subtotal -> discount -> tax -> total**

Tax is applied to the discounted subtotal, not the original.

## Project Structure

```
App.tsx         # Main layout

src/
  types/        # Shared TypeScript interfaces
  constants/    # Discounts, tax rates, region list, etc
  utils/        # Pure calculation logic
  components/   # UI components
  hooks/        # useCalculator hook (not built yet)
  __tests__/    # Unit tests
```

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Vitest

## Work in Progress

The following are intentionally left for the in-office session:

- Form validation logic
- Error states on inputs and region selector
- Calculate button wired to validation
- `useCalculator` hook refactor
- TotalDisplay and DiscountTiersReference components
