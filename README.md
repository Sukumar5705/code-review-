
# AI Code Reviewer

## Overview
**AI Code Reviewer** is a web application that leverages the **Google Generative AI (Gemini 2.5 Flash model)** to provide automated code reviews.  
The application allows users to input **JavaScript code** through a React-based frontend, which is then sent to a Node.js backend for analysis.  

The AI provides **detailed feedback** on code quality, best practices, performance, security, and maintainability, following the guidelines of a **senior code reviewer with over 7 years of experience**.

The project is divided into:
- **Backend**: Node.js with Express
- **Frontend**: React with Vite

The backend integrates with the **Google Generative AI API** to process code reviews, while the frontend provides a user-friendly interface with a code editor and markdown-rendered review output.

---

## Features
- **Code Editor**: A React-based code editor using `react-simple-code-editor` with syntax highlighting powered by Prism.js.  
- **AI-Powered Code Review**: Utilizes the Google Generative AI (Gemini 2.5 Flash) to provide detailed feedback on code quality, performance, security, and maintainability.  
- **Responsive Design**: A clean, two-column layout for code input and review output, styled with CSS and Tailwind-inspired classes.  
- **Error Handling**: Robust error handling in both frontend and backend to manage invalid inputs and API failures.  
- **CORS Support**: The backend supports Cross-Origin Resource Sharing (CORS) for secure communication with the frontend.  
- **Environment Variables**: Securely manages API keys using the `dotenv` package.  
- **Markdown Rendering**: Review output is rendered as markdown with GitHub Flavored Markdown (GFM) support using `react-markdown`.  

---

## Project Structure
```

ai-code-reviewer/
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   │   └── ai.controller.js       # Handles API request logic for code review
│   │   ├── routes/
│   │   │   └── ai.routes.js          # Defines API routes for code review
│   │   ├── services/
│   │   │   └── ai.service.js         # Integrates with Google Generative AI API
│   │   └── app.js                    # Express app configuration
│   ├── server.js                     # Entry point for the backend server
│   ├── .env                          # Environment variables (e.g., GEMINI\_API\_KEY)
│   └── package.json                  # Backend dependencies and scripts
├── frontend/
│   ├── src/
│   │   ├── App.jsx                   # Main React component with code editor and review display
│   │   ├── App.css                   # Styles for the frontend
│   │   └── index.jsx                 # Entry point for React app
│   ├── package.json                  # Frontend dependencies and scripts
│   └── vite.config.js                # Vite configuration for the frontend
├── .gitignore                        # Git ignore file
└── README.md                         # Project documentation

```

---

## Execution Flow

### 1. Frontend Interaction
- The user inputs **JavaScript code** into the code editor (`App.jsx`) using the `react-simple-code-editor` component.  
- **Syntax highlighting** is applied using Prism.js for better readability.  
- Upon clicking the **"Review"** button, the code is sent to the backend via an Axios **POST request** to:
```

[http://localhost:3000/ai/get-review](http://localhost:3000/ai/get-review)

````

### 2. Backend Processing
- The **Express server (`server.js`)** listens on port `3000` and routes requests to `/ai` via `ai.routes.js`.  
- The `ai.routes.js` module directs **POST requests** to `/get-review` → handled by `getReview` in `ai.controller.js`.  
- The `ai.controller.js` validates input code and calls the **AI service** (`ai.service.js`).  
- The `ai.service.js` uses the **Google Generative AI client** to send the code to **Gemini 2.5 Flash**, generating a **detailed code review**.  
- The review is returned to the frontend as a **JSON response**.  

### 3. Frontend Rendering
- The frontend receives the **review JSON** and updates state in `App.jsx`.  
- The review is rendered as **markdown** using `react-markdown` with **GFM support**.  
- A **loading spinner** is shown during the API call, and **error messages** are displayed if the request fails.  

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)  
- npm or Yarn  
- Google Generative AI API key (sign up at **Google AI Studio**)  

---

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ai-code-reviewer.git
cd ai-code-reviewer
````

#### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a **.env** file inside `backend/`:

```
GEMINI_API_KEY=your-google-generative-ai-key
```

Start the backend:

```bash
npm start
```

#### 3. Set Up the Frontend

```bash
cd frontend
npm install
npm run dev
```

#### 4. Access the Application

Open browser:

```
http://localhost:5173
```

Input your JavaScript code → click **Review** → get **AI-powered feedback**.

---

## Dependencies

### Backend

* `express`: Web framework for Node.js
* `@google/generative-ai`: Google Generative AI SDK
* `dotenv`: Environment variable management
* `cors`: Enables CORS for cross-origin requests

### Frontend

* `react`: UI library
* `react-simple-code-editor`: Lightweight code editor
* `prismjs`: Syntax highlighting
* `react-markdown`: Markdown rendering with GFM support
* `axios`: HTTP client
* `remark-gfm`: GitHub Flavored Markdown plugin

---

## Contributing

Contributions are welcome! 🎉

1. Fork the repository
2. Create a new branch

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit changes

   ```bash
   git commit -m "Add your feature"
   ```
4. Push branch

   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

* **Google Generative AI** – for providing the AI model
* **React Simple Code Editor** – lightweight editor
* **Prism.js** – syntax highlighting
* **Vite** – fast frontend development

```

Would you like me to also **add screenshots / demo GIF sections** in the `.md` so it looks more polished for GitHub?
```
