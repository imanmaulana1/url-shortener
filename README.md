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

- **Frontend**: [Next.js](https://nextjs.org/) (v15.0.3)
- **Backend**: Integrated API routes in Next.js.
- **Database**: [Prisma ORM](https://www.prisma.io/) with PostgreSQL.
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

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | The connection string for your PostgreSQL database. |
| `NEXT_PUBLIC_BASE_URL` | The base URL for the application. |

---

## **API Endpoints**

- **Shorten URL**: `/api/shorten`

  - Method: POST
  - Request Body:

    ```json
    {       
        url: "https://example.com/long-url"
    } 
    ```
  
  - Response: 

    ```json
    {
      "success": true,
      "message": "Your link has been successfully shortened!",
      "data": {
        "originalUrl": "https://example.com/long-url",
        "shortCode": "short-code",
      }
    }
    ```

- **Get All URLs**: `/api/urls?page=1&limit=10&sortBy=desc`

  - Method: GET
  - Response:

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