# 📚 GraphQL & PrismaORM Project

## 🚀 Technology Stack

- **NestJS** - Main backend framework
- **GraphQL** (@nestjs/graphql) - API for working with books and comments
- **Prisma ORM** - For working with PostgreSQL
- **PostgreSQL** - Main database
- **Elastic search** - Additional database (for text content)
- **Docker** - For deploying PostgreSQL
- **Apollo Client** - GraphQL client
- **Jest + Supertest** - For testing

## 🎯 Project Goal

The goal of this project is to develop a backend API for a platform that allows users to:

- 📖 Add books (stories)
- 🔍 View details of books
- 💬 Leave comments and ratings

This project provides hands-on experience with **GraphQL API**, **Prisma ORM**, and **NestJS**. Additionally, it includes optional exploration of **transaction isolation levels** in PostgreSQL.

---

## 📦 Setup & Installation

### **1. Clone the repository**

```bash
git clone https://github.com/your-repo.git
cd your-repo
```

### **2. Install dependencies**

```bash
yarn install
# or
npm install
```

### **3. Configure environment variables**

Create a `.env` file in the project root and configure your PostgreSQL database connection:

```
DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
PORT=3000
```

### **4. Start PostgreSQL using Docker**

```bash
docker-compose up -d
```

### **5. Run Prisma migrations**

```bash
npx prisma migrate dev --name init
```

### **6. Start the server**

```bash
yarn start
# or
npm run start
```

The server will be running on [**http://localhost:3000/graphql**](http://localhost:3000/graphql)

---

## 🛠️ GraphQL API Overview

In GraphQL, a **Resolver** is an analog of a controller in a REST API. It processes **queries** and **mutations** by calling the corresponding services.

### **📌 Example Mutation - Create a Story**

#### **Using GraphQL Playground/Postman (Body -> GraphQL):**

```graphql
mutation {
  createStory(createStoryInput: {
    title: "Моя перша історія",
    content: "Це зміст історії",
    author: "Ваньок"
  }) {
    id
    title
    content
    author
  }
}
```

#### **Using Variables:**

```graphql
mutation CreateStory($createStoryInput: CreateStoryInput!) {
  createStory(createStoryInput: $createStoryInput) {
    id
    title
    content
    author
  }
}
```

**Variables:**

```json
{
  "createStoryInput": {
    "title": "Пригоди у лісі",
    "content": "Жили-були...",
    "author": "Іван Франко"
  }
}
```

---

## ✅ Running Tests

```bash
yarn test
# or
npm run test
```

---

## 🛑 Troubleshooting

### **1. Database connection error?**

- Make sure PostgreSQL is running.
- Check `.env` file and confirm database credentials.
- Try restarting Docker: `docker-compose down && docker-compose up -d`

### **2. GraphQL Playground not working?**

- Ensure the server is running: `http://localhost:3000/graphql`
- Check console logs for errors.

---

## 📜 License

This project is open-source and available under the MIT License.

---

💡 **Happy coding!** 🚀

