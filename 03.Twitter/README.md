
# Twitter React App

A simple Twitter-like application built with React, allowing users to add, edit, and sort tweets. This project demonstrates React hooks (`useState`, `useCallback`), component memoization (`memo`), and performance optimization for minimal re-renders.

## Features
- **Add Tweets**: Create new tweets with random likes and timestamps.
- **Edit Tweets**: Update existing tweet content.
- **Sort Tweets**: Sort tweets by creation date (newest first).
- **Optimized Performance**: Uses `memo` and `useCallback` to prevent unnecessary re-renders, verified with React Developer Tools.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

