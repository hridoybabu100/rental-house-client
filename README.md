**✅ Updated & More Professional README.md** (Improved Version)

```markdown
# RenNest - Premium Rental House Platform

A modern, full-featured **rental property marketplace** built with Next.js 16, offering seamless property browsing, booking, and management with role-based dashboards.

![RenNest Banner](https://via.placeholder.com/1200x400?text=RenNest+-+Rental+Platform)

---

## 🌟 Highlights

- **Role-based Dashboards** (Organizer, Attendee, Admin)
- **Advanced Property Search & Filters**
- **Secure Stripe Payments** + **Premium Subscription**
- **JWT Authentication** with Better Auth
- **Fully Responsive** & Modern Dark UI
- **Real-time Booking Management**

---

## 🛠 Tech Stack

| Category           | Technologies                              |
|--------------------|-------------------------------------------|
| **Frontend**       | Next.js 16, React 19, Tailwind CSS        |
| **UI Library**     | HeroUI, Lucide Icons, Framer Motion       |
| **Authentication** | Better Auth + JWT + MongoDB Adapter       |
| **Database**       | MongoDB                                   |
| **Payments**       | Stripe                                    |
| **Forms**          | React Hook Form                           |
| **Deployment**     | Vercel (Recommended)                      |

---

## ✨ Core Features

### 👤 For Organizers (Property Hosts)
- Add, edit, delete, and manage properties
- View bookings and earnings
- **Premium Plan** – Unlimited property hosting

### 👥 For Attendees (Renters)
- Browse featured and filtered properties
- Instant booking with secure payment
- Access to booking history & digital tickets

### ⚡ For Admins
- Platform overview and analytics
- Manage users and transactions
- Monitor all properties and payments

### 🔍 General Features
- Smart search with category & location filters
- Featured properties showcase
- Responsive design for mobile & desktop
- Toast notifications and smooth animations

---

## 🚀 Quick Start

### 1. Clone the Project
```bash
git clone <your-repository-url>
cd rental-house-client-main
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables

Create `.env.local` file:

```env
# Image Upload
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key_here

# Better Auth
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_strong_random_secret_key

# MongoDB
MOONGO_DB_DATA_BASE=your_mongodb_connection_string
MOONGO_DB_NAME=your_database_name

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### 4. Run Locally
```bash
npm run dev
```

Visit → **http://localhost:3000**

---

## 📁 Project Structure

```bash
src/
├── app/                     # App Router Pages
├── components/              # Reusable Components
├── dashboard/               # Role-based Dashboard
├── lib/
│   ├── api/                 # Server Actions & Fetching
│   ├── auth.js              # Better Auth Configuration
│   └── stripe.js
├── utils/
└── public/
```

---

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🎨 Design & UX

- Sleek dark theme with glassmorphism effects
- Smooth page transitions and hover animations
- Clean, professional, and user-friendly interface
- Mobile-first responsive design

---

## 🔐 Authentication & Security

- Email/Password + Google OAuth
- JWT-based secure sessions
- Protected API routes and pages
- Role-based access control

---

## 💰 Payment System

- Stripe integration for bookings
- Subscription-based premium upgrade
- Secure checkout experience

---

## 📄 License

This project is open for **portfolio, learning, and personal use**. Feel free to fork and customize it.

---

## 👨‍💻 Developer

**RenNest** – Built with passion for modern web experiences.

---

**Made with ❤️ using Next.js**

---

Would you like me to add **screenshots**, **demo link**, or **contribution guidelines** as well? Just tell me!