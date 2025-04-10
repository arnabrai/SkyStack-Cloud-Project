# SkyStack Cloud Vault

**SkyStack Cloud Vault** is a modern, secure, and scalable cloud storage solution built using **React**, **TypeScript**, **Tailwind CSS**, and **Supabase**. It offers seamless file uploads, structured folder management, real-time storage monitoring, secure authentication, and file sharing—hosted live at 👉 [https://brivo.in](https://brivo.in)

---

## 🌐 Live Demo

🚀 Explore SkyStack Cloud Vault: [https://brivo.in](https://brivo.in)

---

## ✨ Features

- 🔐 **Authentication**: Secure sign-up/sign-in using Supabase Auth.
- 📁 **Folder Management**: Create, rename, and delete folders for organizing files.
- ⬆️ **File Uploading**: Upload any file type with upload progress tracking.
- 👁️ **File Preview**: Preview supported file types before downloading.
- 🔗 **Link Sharing**: Generate shareable links to any uploaded file.
- 📊 **Real-time Dashboard**: Live tracking of your storage usage.
- 📱 **Responsive UI**: Sleek design built with Tailwind CSS and responsive layouts.
- 📦 **Scalable Backend**: Powered by Supabase and AWS S3-compatible storage.
- 🔄 **Live Sync**: Real-time updates using Supabase subscriptions.

---

## 🧰 Tech Stack

| Layer         | Technology                 |
|---------------|----------------------------|
| Frontend      | React, TypeScript, Tailwind CSS |
| Backend       | Supabase (PostgreSQL, Auth, Storage) |
| Deployment    | Vercel / Netlify / Custom Server |
| Hosting       | [https://brivo.in](https://brivo.in) |
| Object Storage| Supabase S3-compatible bucket (via AWS) |

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/skystack-cloud-vault.git
cd skystack-cloud-vault
2. Install Dependencies
bash
Copy
Edit
npm install
3. Set Up Environment Variables
Create a .env file and add your Supabase keys:

env
Copy
Edit
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
4. Run the App
bash
Copy
Edit
npm run dev
Visit http://localhost:5173 (or appropriate port) in your browser.

📁 Project Structure
bash
Copy
Edit
src/
├── components/        # Reusable UI components
├── pages/             # App pages (Dashboard, Auth, etc.)
├── services/          # Supabase integration and API utilities
├── utils/             # Helper functions
├── styles/            # Tailwind configuration
🚀 Future Enhancements
🔒 End-to-end file encryption

🧠 AI-based file suggestions

📝 File versioning and history

📱 Progressive Web App (PWA) support

🧾 Activity logs

🙌 Acknowledgements
Supabase for BaaS support

React for UI development

Tailwind CSS for styling

🧑‍💻 Author
Arnab Rai
Email: 22bds005@iiitdwd.ac.in
Project Link: https://brivo.in

