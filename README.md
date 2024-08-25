# TechShop

![React](https://img.shields.io/badge/React-17.x-brightgreen?logo=react) ![React](https://img.shields.io/badge/Redux-4.x-blue?logo=redux)

TechShop is a React-based web application for an electronics store. It allows users to register, log in, browse products, add items to the cart, and complete their orders. The application uses Redux for state management and supports saving user data in `localStorage`.

**You can view it [here](https://techshop.gvidon94.ru/)**

## Features

-   **User Authentication**: Registration and login functionality with data stored in `localStorage`.
-   **Product Browsing**: Users can view a list of electronics products with detailed product pages.
-   **Shopping Cart**: Add products to the cart, view items in the cart, and proceed to checkout.
-   **Order Management**: Seamless order processing from cart to checkout.

## Technologies Used

-   **[React](https://react.dev/)**: JavaScript library for building user interfaces.
-   **[Redux](https://redux.js.org/)**: State management library.
-   **[React-Redux](https://react-redux.js.org/)**: Official React bindings for Redux.
-   **[React-Router](https://reactrouter.com/)**: For handling routing within the application.
-   **[Redux-Thunk](https://github.com/reduxjs/redux-thunk)**: Middleware for handling asynchronous actions in Redux.
-   **[SCSS](https://sass-lang.com/)**: CSS preprocessor for styling.

## Installation and Setup

### Prerequisites

-   Node.js >= 16.x
-   npm >= 8.x or yarn >= 1.22.x

1. **Clone the repository**:
    ```bash
    git clone https://github.com/GviDoN94/techshop-react.git
    cd tech-shop
    ```
2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Start the development server**:
    ```bash
    npm start
    ```
4. **Build for production**:
    ```bash
    npm run build
    ```

## Project Structure

-   `public/` — Public assets and the HTML template.
-   `src/` — Source files for the React application.
    -   `components/` — Reusable UI components.
    -   `redux/` — Redux-related files (reducers, actions, store).
    -   `pages/` — Individual pages like Home, Product, Cart, etc.
    -   `scss/` — SCSS stylesheets.
-   `localStorage` — Stores user authentication data and cart items.
