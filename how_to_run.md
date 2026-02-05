# How to Run This Project Locally

A detailed guide for Python developers new to frontend development.

---

## Table of Contents

1. [Understanding the Stack](#understanding-the-stack)
2. [Prerequisites](#prerequisites)
3. [Installation Steps](#installation-steps)
4. [Running the Project](#running-the-project)
5. [Common Commands](#common-commands)
6. [Project Structure Explained](#project-structure-explained)
7. [Troubleshooting](#troubleshooting)

---

## Understanding the Stack

If you're coming from Python, here's how the frontend ecosystem maps to concepts you already know:

| Python Concept | JavaScript/Node Equivalent |
|----------------|---------------------------|
| `python` | `node` (the runtime) |
| `pip` | `npm` (package manager) |
| `requirements.txt` | `package.json` (dependencies file) |
| `venv` / `virtualenv` | `node_modules` folder (project-specific packages) |
| `pip install -r requirements.txt` | `npm install` |
| `python app.py` | `npm run dev` (starts development server) |
| Flask/Django | React (but React is frontend-only) |

### What is Node.js?

Node.js is a JavaScript runtime (like the Python interpreter) that lets you run JavaScript outside of a browser. It's required to:
- Install packages
- Run build tools
- Start development servers

### What is npm?

npm (Node Package Manager) is like pip for JavaScript. It:
- Installs dependencies listed in `package.json`
- Runs scripts defined in `package.json`
- Manages package versions

### What is Vite?

Vite is a build tool and development server (similar to how Flask's development server works). It:
- Serves your code locally with hot-reload (changes appear instantly without refreshing)
- Bundles your code for production
- Handles transpilation (converting modern JavaScript to browser-compatible code)

### What is React?

React is a JavaScript library for building user interfaces. Think of it like Jinja2 templates but much more powerful - components can have their own state and logic.

---

## Prerequisites

### 1. Install Node.js

Node.js includes both `node` (the runtime) and `npm` (the package manager).

#### Windows

**Option A: Download Installer (Recommended for beginners)**
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS** (Long Term Support) version
3. Run the installer
4. Accept all defaults
5. Restart your terminal/command prompt

**Option B: Using winget (Windows Package Manager)**
```powershell
winget install OpenJS.NodeJS.LTS
```

**Option C: Using Chocolatey**
```powershell
choco install nodejs-lts
```

#### macOS

**Option A: Download Installer**
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS** version
3. Run the installer

**Option B: Using Homebrew (Recommended)**
```bash
brew install node
```

#### Linux (Ubuntu/Debian)

```bash
# Using NodeSource repository (recommended for latest LTS)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Verify Installation

Open a new terminal and run:

```bash
node --version
# Should output something like: v20.x.x or v18.x.x

npm --version
# Should output something like: 10.x.x or 9.x.x
```

If both commands show version numbers, you're ready to proceed!

---

## Installation Steps

### Step 1: Open Terminal

- **Windows**: Open PowerShell or Command Prompt
- **macOS/Linux**: Open Terminal

### Step 2: Navigate to the Project

```bash
# Change to the project directory
cd path/to/nikicrow.github.io

# Then enter the frontend folder
cd frontend
```

For example, if the project is in your home folder:
```bash
# Windows
cd C:\Users\nikil\nikicrow.github.io\frontend

# macOS/Linux
cd ~/nikicrow.github.io/frontend
```

### Step 3: Install Dependencies

```bash
npm install
```

**What this does:**
- Reads `package.json` to see what packages are needed
- Downloads all packages into a `node_modules` folder
- Creates/updates `package-lock.json` (like pip's `requirements.txt` but with exact versions)

**Expected output:**
```
added 250 packages, and audited 251 packages in 30s

found 0 vulnerabilities
```

> **Note:** The `node_modules` folder will be large (often 100MB+). This is normal for JavaScript projects. It's like having a virtual environment per project.

### Step 4: Verify Installation

Check that `node_modules` folder was created:

```bash
# Windows
dir node_modules

# macOS/Linux
ls node_modules
```

You should see many folders (these are all the installed packages).

---

## Running the Project

### Start the Development Server

```bash
npm run dev
```

**What this does:**
- Starts Vite's development server
- Watches for file changes and auto-reloads
- Opens your browser automatically (usually)

**Expected output:**
```
  VITE v6.3.5  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.1.100:3000/
  ➜  press h + enter to show help
```

### View the Website

Open your browser and go to: **http://localhost:3000**

You should see the portfolio website!

### Stop the Server

Press `Ctrl + C` in the terminal to stop the development server.

---

## Common Commands

All commands should be run from the `frontend` directory.

| Command | Description | Python Equivalent |
|---------|-------------|-------------------|
| `npm install` | Install all dependencies | `pip install -r requirements.txt` |
| `npm run dev` | Start development server | `flask run` or `python manage.py runserver` |
| `npm run build` | Create production build | N/A (Python doesn't need this) |
| `npm run preview` | Preview production build locally | N/A |

### Understanding `package.json` Scripts

Open `frontend/package.json` and look at the `"scripts"` section:

```json
{
  "scripts": {
    "dev": "vite --open --port 3000",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

When you run `npm run dev`, npm looks up "dev" in scripts and runs `vite --open --port 3000`.

---

## Project Structure Explained

```
frontend/
├── node_modules/        # Installed packages (like venv's site-packages)
│                        # ⚠️ Never edit or commit this folder
│
├── public/              # Static files served as-is (images, favicon, etc.)
│
├── src/                 # Source code (where you write code)
│   ├── components/      # Reusable UI pieces (like Python classes)
│   │   ├── ui/          # Generic UI components (buttons, cards, etc.)
│   │   └── figma/       # Components from Figma design
│   │
│   ├── pages/           # Full pages (Home, About, Blog, etc.)
│   │   ├── Home.tsx     # Homepage component
│   │   ├── About.tsx    # About page
│   │   ├── Portfolio.tsx # Portfolio/projects page
│   │   ├── Blog.tsx     # Blog listing page
│   │   └── BlogPost.tsx # Individual blog post page
│   │
│   ├── data/            # Data files (like Python data modules)
│   │   ├── blogPosts.ts # Blog content
│   │   └── projects.ts  # Portfolio projects
│   │
│   ├── styles/          # CSS styling files
│   │
│   ├── App.tsx          # Root component (entry point for React)
│   ├── main.tsx         # Bootstraps React (like if __name__ == "__main__")
│   ├── routes.tsx       # URL routing (like Flask's @app.route)
│   └── index.css        # Main stylesheet
│
├── index.html           # HTML template (React injects into this)
├── package.json         # Dependencies & scripts (like requirements.txt + setup.py)
├── package-lock.json    # Locked versions (auto-generated, don't edit)
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

### File Extensions

| Extension | Meaning |
|-----------|---------|
| `.ts` | TypeScript file (JavaScript with types, like Python with type hints) |
| `.tsx` | TypeScript + JSX (TypeScript that can contain HTML-like syntax) |
| `.js` | Plain JavaScript |
| `.jsx` | JavaScript + JSX |
| `.css` | Stylesheet |
| `.json` | JSON configuration |

---

## Troubleshooting

### "node is not recognized" or "command not found: node"

**Problem:** Node.js isn't installed or not in your PATH.

**Solution:**
1. Make sure you installed Node.js
2. Close and reopen your terminal
3. If still not working, restart your computer
4. Verify with `node --version`

### "npm install" shows errors

**Problem:** Various issues during package installation.

**Solutions:**
```bash
# Clear npm cache and try again
npm cache clean --force
npm install

# If that doesn't work, delete node_modules and try again
# Windows
rmdir /s /q node_modules
npm install

# macOS/Linux
rm -rf node_modules
npm install
```

### Port 3000 is already in use

**Problem:** Another application is using port 3000.

**Solution:** Either:
1. Close the other application using port 3000
2. Or modify `package.json` to use a different port:
   ```json
   "dev": "vite --open --port 3001"
   ```

### Changes not appearing in browser

**Problem:** Hot reload might not be working.

**Solutions:**
1. Hard refresh: `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)
2. Stop the server (`Ctrl + C`) and restart with `npm run dev`
3. Clear browser cache

### "Module not found" errors

**Problem:** A package is missing.

**Solution:**
```bash
# Reinstall all dependencies
npm install

# If a specific package is mentioned, install it directly
npm install package-name
```

### TypeScript errors

**Problem:** Type errors in the code.

**Note:** TypeScript errors won't prevent the dev server from running, but they indicate potential bugs. The error messages will show in your terminal and browser console.

---

## Quick Reference Card

```bash
# First time setup
cd frontend
npm install

# Daily development
cd frontend
npm run dev
# → Opens http://localhost:3000

# Stop server
Ctrl + C

# Build for production
npm run build
```

---

## Need More Help?

- **Node.js docs:** https://nodejs.org/docs/
- **npm docs:** https://docs.npmjs.com/
- **Vite docs:** https://vitejs.dev/guide/
- **React docs:** https://react.dev/learn
- **Tailwind CSS docs:** https://tailwindcss.com/docs

---

*Last updated: February 2025*
