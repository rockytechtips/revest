# Revest Solutions – Technical Assignment

## Overview

This project implements a **microservice-based application** using **NestJS** for the backend and **Next.js + TypeScript** for the frontend.

The system contains:

- **Product Service** – Handles product CRUD operations
- **Order Service** – Creates orders and communicates with Product Service
- **Client Application** – Dynamic form renderer built with Next.js, React Hook Form, and Material UI

Orders are created by fetching product details from the **Product Service**.

---

# Architecture

Client (Next.js)

↓

Order Service (NestJS)

↓

Product Service (NestJS)

---

# Backend Services

## Product Service

Runs on:

```
http://localhost:3000
```

### Create Product

**POST**

```
/products
```

Request Body

```json
{
  "name": "Milk",
  "price": 25,
  "stock": 100
}
```

Response

```json
{
  "id": 1,
  "name": "Milk",
  "price": 25,
  "stock": 100
}
```

---

### Get All Products

**GET**

```
/products
```

Response

```json
[
  {
    "id": 1,
    "name": "Milk",
    "price": 25,
    "stock": 100
  }
]
```

---

### Get Product by ID

**GET**

```
/products/{id}
```

Example

```
/products/1
```

---

### Update Product

**PUT**

```
/products/{id}
```

Request Body

```json
{
  "price": 30
}
```

---

### Delete Product

**DELETE**

```
/products/{id}
```

---

# Order Service

Runs on:

```
http://localhost:3001
```

The order service communicates with the **Product Service** to fetch product details before creating an order.

---

### Create Order

**POST**

```
/orders
```

Request Body

```json
{
  "productId": 1,
  "quantity": 2
}
```

Response

```json
{
  "id": 1,
  "product": {
    "id": 1,
    "name": "Milk",
    "price": 25,
    "stock": 100
  },
  "quantity": 2
}
```

---

### Get All Orders

**GET**

```
/orders
```

Response

```json
[
  {
    "id": 1,
    "product": {
      "id": 1,
      "name": "Milk",
      "price": 25,
      "stock": 100
    },
    "quantity": 2
  }
]
```

---

# Frontend Application

Runs on:

```
http://localhost:3000
```

Features:

- Dynamic form rendering based on **JSON configuration**
- Form validation using **React Hook Form**
- UI built using **Material UI**
- Field types supported:
  - TEXT
  - LIST (Dropdown)
  - RADIO
- Validation rules driven from JSON:
  - required
  - minLength
  - maxLength
- Form data persisted using **localStorage**

Example JSON configuration:

```json
{
  "id": 1,
  "name": "Full Name",
  "fieldType": "TEXT",
  "minLength": 1,
  "maxLength": 100,
  "required": true
}
```

Changing the `fieldType` dynamically changes the rendered component.

---

# Running the Project

## Start Product Service

```
cd product-service
npm install
npm run start
```

---

## Start Order Service

```
cd order-service
npm install
npm run start
```

---

## Start Client Application

```
cd client-app
npm install
npm run dev
```

---

# Technologies Used

### Backend

- NestJS
- Axios
- TypeScript

### Frontend

- Next.js
- React Hook Form
- Material UI
- TypeScript

---

# Author

**Rakesh Raj**