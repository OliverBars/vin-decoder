# VIN Decoder
 
A web application for decoding Vehicle Identification Numbers (VIN) using the [NHTSA vPIC API](https://vpic.nhtsa.dot.gov/api/).
 
## 🔗 Live Demo
 
[https://oliverbars.github.io/vin-decoder/](https://oliverbars.github.io/vin-decoder/)
 
## 📋 Features
 
- **VIN Decoding** — enter a 17-character VIN code to get detailed vehicle information
- **Form Validation** — checks for empty input, correct length, and invalid characters (I, O, Q are not allowed)
- **Search History** — stores the last 3 decoded VINs in localStorage for quick re-use
- **Error Handling** — displays validation errors and API response messages
- **Variables List** — browse all 144 NHTSA vehicle variables with descriptions
- **Variable Detail** — view detailed info and possible values for each variable
- **Responsive Layout** — works correctly from 420px to 1440px screen width
 
## 🛠 Tech Stack
 
- React 18
- React Router v6
- Vite
- NHTSA vPIC API
- CSS (no UI frameworks)
 
## 🚀 Local Setup
 
Follow these steps to run the project on your computer.
 
### Step 1 — Install Node.js
 
Download and install Node.js from the official website:
👉 [https://nodejs.org](https://nodejs.org)
 
Choose the **LTS** version (recommended). Run the installer and click "Next" until it's done.
 
To verify the installation, open a terminal:
- **Windows**: press `Win + R`, type `cmd`, press Enter
- **Mac**: open the Terminal app
 
Then type:
```
node -v
```
You should see a version number like `v20.x.x`. If you do — Node.js is installed correctly.
 
---
 
### Step 2 — Download the project
 
Click the green **Code** button on this page, then click **Download ZIP**.
 
Extract the ZIP archive to any folder on your computer (for example, your Desktop).
 
---
 
### Step 3 — Open the project in the terminal
 
- **Windows**: open the extracted folder, hold `Shift` and right-click anywhere inside → select **"Open PowerShell window here"** or **"Open in Terminal"**
- **Mac**: right-click the folder → **"New Terminal at Folder"**
 
---
 
### Step 4 — Install dependencies
 
In the terminal, type the following command and press Enter:
 
```
npm install
```
 
Wait until it finishes (may take a minute).
 
---
 
### Step 5 — Start the app
 
Type the following command and press Enter:
 
```
npm run dev
```
 
You will see something like:
 
```
  VITE ready in 500ms
 
  ➜  Local: http://localhost:5173/
```
 
---
 
### Step 6 — Open in browser
 
Open your browser and go to:
 
```
http://localhost:5173
```
 
The app is now running on your computer! 🎉
 
> To stop the app, go back to the terminal and press `Ctrl + C`.
 
## 📁 Project Structure
 
```
src/
├── api/
│   └── nhtsa.js              # NHTSA API requests
├── hooks/
│   └── useVinHistory.js      # Custom hook for search history
├── components/
│   ├── VinForm/              # VIN input form with validation
│   ├── VinHistory/           # Recent searches list
│   └── VinResults/           # Decode results table
├── pages/
│   ├── Home/                 # Main page with decoder
│   ├── Variables/            # All variables list
│   └── VariableDetail/       # Single variable detail
├── App.jsx                   # Router and layout
└── main.jsx                  # Entry point
```
 
## 🔑 Example VIN Codes
 
- `1FTFW1CT5DFC10312` — Ford F-150
- `JN1AZ4EH7DM430111` — Nissan
- `WDDGF3BB4DF968608` — Mercedes-Benz
- `WVGEK9BP3CD010788` — Volkswagen 