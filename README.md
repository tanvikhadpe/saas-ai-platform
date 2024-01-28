<h1 align="center" id="title">SaaS AI Platform with Next.js 13, React, Socket.io, Prisma, Tailwind, PostgreSQL</h1>

<p></p>
<p align="center" id="description">This is a repository for Build a SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe</p>

<h2>Project Screenshots:</h2>

<p>Landing Page:</p> 
 <!-- <img src="https://utfs.io/f/fa1172bb-fede-4015-bd4f-21765566b85e-dezpsj.png" alt="project-screenshot" width="30%" height="30%/"> -->
 <video width="100%" height="100%" controls autoplay>
  <source src="https://utfs.io/f/62077af4-6cc2-486c-bff7-e2c101eb8de6-ytxfvq.mp4" type="video/mp4"/>
</video>
<p></p>

<table>
  <tr>
    <th>Dashboard</th>
    <th>Conversations Page</th>
    <th>Image Generation Page</th>
    <th>Video Generation Page</th>
  </tr>
  <tr>
    <td>
     <img src="https://utfs.io/f/9cfacf4f-ad2e-468a-a25b-a57b2912301e-4ket9w.jpg" alt="project-screenshot" width="100%" height="100%/">
     </td>
    <td> <img src="https://utfs.io/f/9cfacf4f-ad2e-468a-a25b-a57b2912301e-4ket9w.jpg" alt="project-screenshot" width="100%" height="99%/"></td>
    <td> <img src="https://utfs.io/f/66ac28a2-7038-41e3-b008-4915fbf8123a-ymax86.jpg" alt="project-screenshot" width="100%" height="100%/"></td>
        <td>
     <img src="https://utfs.io/f/ada0b246-aff4-4212-a493-0a8d39140d25-yf839y.jpg" alt="project-screenshot" width="100%" height="100%/">
     </td>
  </tr>
  
  <tr>    
    <th>Music Generation Page</th>
    <th>Code Generation Page</th>
    <th>Settings and Chatbot</th>
    <th>Pro Plan Page</th>
  </tr>
  <tr>
    <td>
      <img src="https://utfs.io/f/d018bd11-591c-497e-bd25-c26646f5f2fa-yjy9kc.jpg" alt="project-screenshot" width="100%" height="100%">
    </td>
    <td> <img src="https://utfs.io/f/c62ba0a3-73ec-43a5-b0a9-b236f4fe660c-ac4n4u.jpg" alt="project-screenshot" width="100%" height="100%"></td>
     <td><img src="https://utfs.io/f/ae7b04f1-d039-4139-8948-8356967e876b-dfiu0g.png" alt="project-screenshot" width="100%" height="100%"></td>
    <td> <img src="https://utfs.io/f/93dd3447-7387-48a3-a69e-4754a40457f1-dfjepd.png" alt="project-screenshot" width="100%" height="100%"></td>

  </tr>

</table>
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- How to write POST, DELETE, and GET routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle relations between Server and Child components!
- How to reuse layouts
- Folder structure in Next 13 App Router
<p></p>
<h2>🛠️ Installation Steps:</h2>
<p></p>
<p>1. Cloning the repository</p>

```
git clone https://github.com/tanvikhadpe/Saas-AI-Platform.git
```

<p></p>
<p>2. Install packages</p>

```
npm i
```

<p></p>
<p>3. Setup .env file</p>

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
OPENAI_API_KEY=
REPLICATE_API_TOKEN=
DATABASE_URL=
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

<p></p>
<p>4. Setup Prisma</p>

```
npx prisma generate
```

```
npx prisma db push
```

<p></p>
<p>5. Running the app</p>

```
npm run dev
```

  <p></p>
  
<h2>💻 Built with</h2>
<p></p>
Technologies used in the project:

- NextJS
- React
- PostgreSQL
- Prisma
- Tailwind
- OpenAI
- Replicate AI

Features:

### Prerequisites

**Node version 18.x.x**
