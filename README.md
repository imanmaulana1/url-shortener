# Linkly URL Shortener

Linkly is a modern URL shortener application that simplifies managing links. It allows users to shorten long URLs, customize short URLs, and track user engagement efficiently.

## **Demo**

[https://linkly-shortener.vercel.app/](https://linkly-shortener.vercel.app/)

## **Screenshots**

<img src="https://linkly-shortener.vercel.app/ss.png" alt="Screenshot" border="0">

---

## **Features**

- 🔗 **Shorten Long URLs**: Easily convert lengthy URLs into concise, shareable links.
- 📊 **Track Engagement**: Monitor click-through rates
- ⚡ **Fast and Reliable**: Built with cutting-edge technologies for optimal performance.

---

## **Technologies Used**

![Next.js](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![ShadnCN UI](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white)
![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)

- **Framework**: [Next.js](https://nextjs.org/) (v15.0.3)
- **UI Components**: [ShadCN UI](https://shadcn.dev/)
- **Database**: [Prisma ORM](https://www.prisma.io/) with PostgreSQL.
- **State Management**: [React Query](https://tanstack.com/query)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Styling**: Tailwind CSS.
- **Deployment**: Vercel.

---

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) or [Yarn](https://yarnpkg.com/)
- PostgreSQL

### **Setup**

1. Clone the repository:

```bash
    git clone https://github.com/imanmaulana1/linkly-url-shortener.git
    cd linkly-url-shortener
```

2. Install dependencies:

```bash
    npm install
```

3. Create a .env file at the root of the project and configure the following:

```bash
    DATABASE_URL=your_database_connection_string
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Generate Prisma client:

```bash
    npx prisma generate
```

5. Run database migrations:

```bash
    npx prisma migrate dev
```

6. Start the development server:

```bash
    npm run dev
```

7. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## **Environment Variables**

| Variable               | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `DATABASE_URL`         | The connection string for your PostgreSQL database. |
| `NEXT_PUBLIC_BASE_URL` | The base URL for the application.                   |

---

## API Documentation

This API provides URL shortening functionality. Below are the available endpoints, including methods, request parameters, and response examples.

### Endpoints

#### 1. Get All URLs

- **Endpoint**: `{{BASE_URL}}/api/urls`
- **Method**: GET
- **Query Parameters (optional)**:
  - `page` (integer): Page number to fetch (default: 1).
  - `limit` (integer): Number of records per page (default: 5).
  - `sortBy` (string): Sort order of records (`asc` or `desc`, default: `desc`).
- **Response**:
  ###### Success (200 OK)
  ```json
  {
    "success": true,
    "message": "URLs fetched successfully",
    "data": [
      {
        "id": 1,
        "fullShortCode": "https://linkly-shortener.vercel.app/short-code",
        "shortCode": "short-code",
        "originalUrl": "https://example.com/long-url",
        "createdAt": "2023-06-01T00:00:00.000Z",
        "visits": 0,
        "qrCode": "qr-code"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "currentLimit": 10,
      "totalPage": 1,
      "totalData": 1,
      "hasMore": false
    }
  }
  ```
  ###### Error (500 Internal Server Error)
  ```json
  {
    "success": false,
    "message": "Error fetching URLs"
  }
  ```
#### 2. Create Shorten URL

- **Endpoint**: `{{BASE_URL}}/api/shorten`
- **Method**: POST
- **Response**:
  ###### Success (201 Created)
  ```json
  {
    "success": true,
    "message": "Your link has been successfully shortened!",
    "data": {
      "originalUrl": "https://linkly-shortener.vercel.app/short-code",
      "shortCode": "short-code"
    }
  }
  ```
  ###### Error (400 Bad Request)
  ```json
  {
    "success": false,
    "message": "Validation failed",
    "errors": [
      { 
        "fields": "url", 
        "message": "Please enter a valid URL" 
      }
    ]
  }
  ```
  ###### Error (500 Internal Server Error)
  ```json
  {
    "success": false,
    "message": "An unexpected error occurred"
  }
  ```

#### 3. GET URL by ID

- **Endpoint**: `{{BASE_URL}}/api/{id}`
- **Method**: GET
- **Response**:
  ###### Success (200 OK)
  ```json
  {
    "success": true,
    "message": "URL fetched successfully",
    "data": {
      "id": "ed4f709e-db6d-48e4-9c0b-3348de41dc96",
      "originalUrl": "https://www.google.com",
      "shortCode": "aMwlPX",
      "createdAt": "2024-11-26T15:49:42.580Z",
      "visits": 0
    }
  }
  ```
  ###### Error (404 Not Found)
  ```json
  {
    "success": false,
    "message": "The link you requested does not exist"
  }
  ```
  ###### Error (500 Internal Server Error)
  ```json
  {
    "success": false,
    "message": "An unexpected error occurred"
  }
  ```

#### 4. Update URL

- **Endpoint**: `{{BASE_URL}}/api/{id}`
- **Method**: PATCH
- **Response**:
  ###### Success (200 OK)
  ```json
  {
    "success": true,
    "message": "Your link has been successfully updated!",
    "data": {
      "id": "ed4f709e-db6d-48e4-9c0b-3348de41dc96",
      "originalUrl": "https://www.google.com",
      "shortCode": "aMwlPX",
      "createdAt": "2024-11-26T15:49:42.580Z",
      "visits": 0
    }
  }
  ```
   ###### Error (400 Bad Request)
  ```json
  {
    "success": false,
    "message": "Validation failed",
    "errors": [
      { 
        "fields": "url", 
        "message": "Please enter a valid URL" 
      }
    ]
  }
  ```
  ###### Error (500 Internal Server Error)
  ```json
  {
    "success": false,
    "message": "An unexpected error occurred"
  }
  ```

#### 5. Delete URL

- **Endpoint**: `{{BASE_URL}}/api/{id}`
- **Method**: DELETE
- **Response**:
  ###### Success (200 OK)
  ```json
  {
    "success": true,
    "message": "Your link has been successfully deleted!",
    "data": {
      "id": "ed4f709e-db6d-48e4-9c0b-3348de41dc96"
    }
  }
  ```
  ###### Error (500 Internal Server Error)
  ```json
  {
    "success": false,
    "message": "An unexpected error occurred"
  }
  ```
