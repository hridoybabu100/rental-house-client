**✅ Final Beautiful & Complete README.md**

```markdown
# RenNest - Premium Rental House Platform

**A modern full-stack rental property marketplace** built with **Next.js 16** (frontend) and **Express.js + MongoDB** (backend). It features role-based dashboards, property management, secure bookings, and Stripe payments.

![RenNest Banner](https://via.placeholder.com/1200x400/0f172a/60a5fa?text=RenNest+-+Find+Your+Dream+Home)

---

## 🌟 Highlights

- **Role-based Dashboards** — Organizer, Attendee & Admin
- **Smart Property Search** with filters (title, category, location)
- **Secure Bookings & Payments** via Stripe
- **Premium Subscription** for unlimited property hosting
- **Beautiful Dark UI** with smooth animations
- **JWT Authentication** with Better Auth

---

## 🛠 Tech Stack

### Frontend (Client)
| Category       | Technology                  |
|----------------|-----------------------------|
| Framework      | Next.js 16, React 19        |
| Styling        | Tailwind CSS + HeroUI       |
| Animations     | Framer Motion               |
| Forms          | React Hook Form             |
| Auth           | Better Auth (JWT)           |

### Backend (Server)
| Category       | Technology                  |
|----------------|-----------------------------|
| Framework      | Express.js                  |
| Database       | MongoDB                     |
| Auth           | Better Auth + MongoDB Adapter |
| Payments       | Stripe                      |

---

## ✨ Features

### For Organizers (Hosts)
- Add, edit, and delete properties
- Manage bookings and earnings
- Upgrade to **Premium** for unlimited listings

### For Attendees (Renters)
- Browse featured & filtered properties
- Instant booking with Stripe payment
- View booking history & tickets

### For Admins
- Platform overview and analytics
- Manage users, properties & transactions

---

## 🚀 Quick Start

### 1. Clone the Project
```bash
git clone <your-repo-url>
cd RenNest
```

### 2. Setup Frontend
```bash
cd rental-house-client-main
npm install
```

Create `.env.local`:
```env
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_key
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your-secret-key
MOONGO_DB_DATA_BASE=mongodb+srv://...
MOONGO_DB_NAME=House_DB
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

Run:
```bash
npm run dev
# → http://localhost:3000
```

### 3. Setup Backend
```bash
cd ../Rental-House-Server-main
npm install
```

Create `.env`:
```env
MOONGO_DB_DATA_BASE=mongodb+srv://...
PORT=5000
```

Run:
```bash
npm start
# → http://localhost:5000
```

---

## 📁 Project Structure

```
RenNest/
├── rental-house-client-main/      # Next.js Frontend
│   ├── src/app/                   # Pages & API Routes
│   ├── src/components/            # Reusable Components
│   ├── src/dashboard/             # Role-based Dashboards
│   └── src/lib/                   # API & Auth
│
└── Rental-House-Server-main/      # Express Backend
    ├── index.js                   # Main Server
    └── vercel.json                # Deployment Config
```

---

## 📜 Scripts

**Frontend:**
```bash
npm run dev      # Development
npm run build    # Production Build
npm run start    # Run Production
```

**Backend:**
```bash
npm start        # Start Server
```

---

## 🎨 Design & UX

- Elegant dark theme with glassmorphism
- Smooth hover effects and page transitions
- Fully responsive for all devices
- Clean, modern, and professional interface

---

## 🔐 Security & Auth

- Email + Password + Google OAuth
- JWT-based secure sessions
- Protected routes and API endpoints
- Role-based access control

---

## 💰 Payment System

- Stripe integration for bookings
- Premium subscription for organizers
- Transaction history for users

---

## 📄 License

Open for **portfolio, learning, and personal use**. Feel free to fork and customize.

---

## 👨‍💻 Developed By

**RenNest** – Making property rental simple, secure, and beautiful.

Built with ❤️ using Next.js & Express.

---

**Ready for Vercel Deployment!**

---

Let me know if you want to add **screenshots**, **demo link**, or **contribution section**! 🚀
```

This is the **final polished version** — clean, professional, and comprehensive for both client and server. You can copy-paste it directly into your `README.md`. 

If you need any more modifications, just tell me!