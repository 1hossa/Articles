# Article Directory App

A performant and modern React application for browsing, searching, and filtering articles. Built with a focus on clean architecture and optimized performance.

## 🚀 Features

- **Debounced Search**: Optimized search input to prevent unnecessary re-renders and logic execution while typing.
- **Topic Filtering**: Easily filter articles by categories like Technology, Finance, Health, and Sports.
- **Advanced Sorting**: Sort articles by newest publication date or alphabetically by title.
- **Optimized Performance**: Uses `useMemo` for derived state and efficient ISO-8601 date comparisons.
- **Responsive Design**: Beautifully crafted grid layout that works on all devices.

## 🛠 Tech Stack

- **Framework**: [React 18+](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## 💻 Local Implementation Guide

To get the project running locally on your machine, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/1hossa/Articles.git
   cd Articles
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` folder.
