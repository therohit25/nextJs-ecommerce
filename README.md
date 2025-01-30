# E-commerce UI Clone

## 🚀 Project Overview

This project is a clone of an e-commerce website using **Next.js** and the **Fake API from Platzi**. The goal is to demonstrate front-end development skills, API integration, and web development best practices.

## 🛠️ Technologies Used

- **Next.js** (React framework for server-side rendering and static generation)
- **Firebase Authentication** (User login/signup)
- **Context API** (Global state management)
- **LocalStorage** (Cart persistence)
- **Platzi Fake Store API** (Fetching product data)
- **MUI (Material-UI)** (UI styling and components)

## 🔑 Features

### 🌐 Front-End Development

- **Responsive Design** inspired by modern e-commerce websites.
- **Product Listings & Details** dynamically loaded from the API.
- **Shopping Cart & Checkout** with local storage persistence.

### 🔍 API Integration

- Fetching product listings, categories, and details from **Platzi Fake Store API**.
- Dynamic loading of images, descriptions, and prices.

### 🛒 Additional Functionalities

- **User Authentication** with Firebase (Login/Signup).
- **Cart Management** using **Context API** and **LocalStorage**.
- **Search & Filtering** using **dynamic URL parameters**.

## 📦 Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/therohit25/MyNextEcommerce.git
   cd MyNextEcommerce
   ```
2. **Install dependencies**
   ```sh
   yarn install
   ```
3. **Set up Firebase Authentication**
   - Create a Firebase project and enable authentication.
   - Add your Firebase credentials to `.env.local`:
     ```env
     NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     ```
4. **Run the development server**
   ```sh
   yarn dev
   ```
   The app will be available at ``.

## 🚀 Deployment

The project can be deployed on **Vercel, Netlify, AWS, or Heroku**. To deploy on **Vercel**, run:

```sh
yarn vercel
```

## 🎯 Bonus Features (Optional Enhancements)

- 🔍 **Search & Filtering** with URL parameters.
- 📊 **Product Sorting** (e.g., price, category, popularity).
- ⭐ **User Reviews & Ratings** (future enhancement).
- 💅 **Enhanced UI/UX** with animations and transitions.

---

## 🤝 Contributing

Feel free to fork the repository, create a new branch, and submit a pull request!

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

🚀 **Happy Coding!** 🎉
