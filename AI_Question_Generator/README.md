# AI Question Paper Generator (Netlify Deployable)

This is a ready-to-deploy version of an AI-powered question paper generator using OpenAI's GPT-4 model, built with HTML, CSS, and JavaScript, and hosted via Netlify Functions.

---

## 📁 Folder Structure

```
ai-question-generator-deploy/
│
├── index.html
├── script.js
├── style.css
├── netlify.toml
└── netlify/
    └── functions/
        └── generate.js
```

---

## 🚀 How to Deploy on Netlify (CLI)

### 1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

### 2. Unzip and navigate into the project
```bash
unzip AI_Question_Generator_Netlify_Deployable.zip
cd ai-question-generator-deploy
```

### 3. Initialize Netlify project (only once)
```bash
netlify init
```

Choose:
- **Create & configure a new site**
- Provide a site name or accept a random one
- Choose **No build command**
- Set `.` as the **publish directory**

### 4. Set the OpenAI API Key as an Environment Variable
```bash
netlify env:set OPENAI_API_KEY sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 5. Deploy to Netlify (live site)
```bash
netlify deploy --prod
```

After a few seconds, you'll get your **LIVE SITE URL**.

---

## ✅ Features

- Generate printable question papers with:
  - Subject, Country, Grade/Exam, Topic
  - Type (MCQ / Descriptive / Both)
  - Optional prompt customization
- Serverless function using OpenAI GPT-4
- Mobile and print-friendly layout
- Secure backend key handling

---

## ❗Important

- **Do not expose your OpenAI key in frontend JavaScript**
- Always use environment variables to keep it safe

---

## 💬 Contact

For support or improvements, visit [mrdevsacademy.org](https://mrdevsacademy.org) or [WhatsApp](https://wa.me/917550001202)
