
# Board. | Dashboard

This repository contains a dashboard built using Next.js and NivoCharts, with full responsiveness and Tailwind CSS for styling. Google Auth is also integrated for secure user authentication and authorization.

**Live Here:** [Board.](https://listeddashboard.vercel.app/)

## Features

- Data visualization using NivoCharts.
- Fully responsive design with Tailwind CSS.
- Secure user authentication and authorization using Google Auth.

## Getting Started

### Prerequisites
- Node.js and npm installed on your local machine.
- API Credentials from [Google Cloud Console](https://console.cloud.google.com/apis/dashboard).

### Installation

1. Clone the repository: <br>
   `git clone https://github.com/your-username/listed-dashboard.git`
2. Navigate to the project directory: <br>
   `cd listed-dashboard`
3. Install dependencies <br>
   `npm install`
4. Create a `.env` file and add the followings: <br>
   
    `NEXTAUTH_URL = http://localhost:3000/`<br>
    `GOOGLE_ID = google-cliend-id`<br>
    `GOOGLE_SECRET = google-secret-key`<br>
    `NEXTAUTH_SECRET= your-secret-key`
5. Open any code editor and navigate to <br>
    `./listed-dashboard/app/login/SignInForm.js` <br> and in the `handleGoogleSignin()` function uncomment the code accordingly.
6. Run the development server: <br>
    `npm run dev`
7. Open `http://localhost:3000` in your browser
   
## Usage
To use the dashboard prototype, follow these steps:
1. Navigate to the `http://localhost:3000` in your web browser.
2. Click the "Sign In with Google" button to authenticate with Google Auth.
3. Once authenticated, the dashboard will display data visualization using NivoCharts.
