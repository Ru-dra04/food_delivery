"food_delivery" 
backend =https://food-delivery-628a.onrender.com



# Food Delivery Website
## Project Overview

This project is a full-stack food delivery website and application with both a user and admin interface. It covers frontend development for a responsive food ordering website, a backend server, and integrates with MongoDB Atlas for data management. Key features include user authentication, shopping cart functionality, order placement with Stripe payment integration, and an admin panel to manage food items and orders.

## Table of Contents
### 1. Frontend Development
#### Create Frontend for Food Delivery Website.
#### -> Responsive Design
#### -> User Authentication
#### -> Cart and Order Pages

### 2. Backend Development
#### Setup MongoDB Atlas
#### -> Admin Panel
#### -> Food and Order Management

### 3. Integration and Testing
#### Shop Cart and Stripe Integration
#### -> Order History
#### -> Order Management

## 1. Frontend Development
### Create Frontend for Food Delivery Website
Designed a user-friendly frontend for the food delivery application using HTML, CSS, and JavaScript with React for a dynamic and interactive interface.
### Make the Website Responsive
Enhanced the frontend with responsive design principles to ensure optimal viewing experience across various devices and screen sizes
### Create Sign In / Sign Up Component
Built a login and registration component using React, allowing users to sign in and sign up securely.
### Create Cart Page
Implemented the cart page, where users can review selected items before proceeding to checkout.
### Create Place Order Page
Designed a place order page to finalize user orders, allowing for easy review and editing of order details.

## 2. Backend Development
### Create Backend of Food App
Developed the server using Node.js and Express to handle data and business logic for the food delivery service.
### Setup MongoDB Atlas
Connected the app to MongoDB Atlas, enabling cloud-based database management for storing user data, orders, and food items.
### Create Admin Panel
Created an admin interface using React to allow admin users to manage food items, view orders, and update statuses.
### Display Food List in Admin Panel
Populated the admin panel with a list of food items retrieved from the MongoDB database.
### Create User Authentication
Developed a user authentication system to manage secure login and registration processes.

## 3. Integration and Testing
### Fetch Food Data on Frontend
Fetched and displayed food data on the frontend by making API calls to the backend, ensuring real-time updates to food listings.
### Create Shop Cart Functionality
Implemented the shopping cart, allowing users to add and remove items, manage quantities, and view a running total.
### Create Place Order Feature and Stripe Payment Integration
Added a place order feature along with Stripe payment integration for secure transactions.
### Create User Order Page
Created an order history page where users can view their previous orders and track their order status.
### Display Orders in Admin Panel
Displayed user orders in the admin panel, providing admins with visibility and control over all orders.
### Create Order Update Feature
Developed a feature allowing admins to update order statuses, ensuring efficient management of the delivery process.

# Getting Started
## Prerequisites
#### -> Node.js and npm
#### -> MongoDB Atlas account
#### -> Stripe account for payment integration

## Installation
#### 1. Clone this repository:
     git clone <repository-url>
#### 2. Install dependencies:
     npm install
#### 3. Configure environment variables for MongoDB and Stripe API keys in a .env file.
#### 4. Start the development server:
     npm start

# Dependencies
To run this food delivery website and application, the following dependencies are required:
### Frontend Dependencies
#### -> React: JavaScript library for building the user interface.
#### -> React Router: Provides navigation and routing capabilities for the app.
#### -> Axios: For making HTTP requests to the backend.
#### -> Stripe React: Enables integration with Stripe for secure payments.

### Backend Dependencies
#### -> Express: Web application framework for Node.js.
#### -> Mongoose: Provides MongoDB object modeling for Node.js.
#### -> jsonwebtoken: For implementing JSON Web Token (JWT) based authentication.
#### -> bcryptjs: For hashing user passwords securely.
#### -> Stripe: Library for processing payments through Stripe’s API.

### Additional Tools
#### -> MongoDB Atlas: Cloud-hosted MongoDB for database management.
#### -> Dotenv: Loads environment variables from a .env file into the app.

#### You can install all dependencies by running:
      #### npm install

# Conclusion
This food delivery website and application project provides a comprehensive platform for ordering food, with essential features such as user authentication, a shopping cart, an order management system, and a secure payment system using Stripe. The project is built to be responsive, ensuring an optimal user experience across different devices. With the admin panel, administrators can efficiently manage food items, view customer orders, and update order statuses.

This documentation, along with the codebase, provides a detailed guide for setting up, running, and understanding each aspect of the application, making it easier for future developers to enhance and maintain the project. Thank you for exploring this documentation!

