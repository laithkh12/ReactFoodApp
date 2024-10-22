
# Food App

A full-stack food delivery website built using **React JS**, **MongoDB**, **Express**, **Node.js**, and **Stripe** for payment integration.

## Features

- User authentication and authorization
- Browsing restaurants and menus
- Adding items to the cart and placing orders
- Payment processing via Stripe
- Admin panel for managing orders, restaurants, and menus

## Installation and Setup

### Prerequisites
1. **MongoDB Atlas** for database management.
2. **Stripe account** for payment processing.
3. **Node.js** installed on your system.

### 1. Clone the repository
```bash
git clone https://github.com/fr0st-iwnl/food-app.git
cd food-app
```

### 2. Setting up the Frontend
```bash
cd frontend
npm install
npm run dev
```
Access the frontend at `http://localhost:5173`.

### 3. Setting up the Admin Panel
```bash
cd admin
npm install
npm run dev
```
Admin panel available at `http://localhost:5174`.

### 4. Setting up the Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   npm install
   ```
2. Add your MongoDB URL in `db.js` and Stripe secret key in a `.env` file:
   ```
   STRIPE_SECRET_KEY=your_stripe_secret_key
   MONGODB_URI=your_mongodb_connection_string
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

## Usage

- Navigate to the frontend in your browser to interact with the app.
- Use the admin panel for managing restaurants, menus, and orders.

## Technologies Used

- **Frontend**: React.js, CSS, HTML
- **Backend**: Node.js, Express.js, MongoDB
- **Payments**: Stripe API

## License

This project is licensed under the MIT License.
