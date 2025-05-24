# 🚀 Simple API with Node.js, Express, Sequelize and Docker, at the moment for learn and practise how docker works.

This is a basic REST API built with **Node.js**, **Express**, **Sequelize** and **MySQL**, running inside a **Docker** container. The goal is to practice setting up an API with a relational database and containerization.

> 🔧 Ideal for learning and demonstrating backend fundamentals.

---

## 🛠️ Stack

- **Node.js** 18
- **Express**
- **Sequelize** ORM
- **MySQL** 8
- **Docker & Docker Compose**

---

## 📦 Installation

### Prerequisites

- Docker & Docker Compose installed on your machine.

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/SamuelCG040921/Docker-Learning.git
   cd Docker-Learning

2. Create a .env file based on this structure:
DB_HOST=db
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=testDB

3. Build and run the containers with the command:
docker compose up --build

4. The API should now be available at http://localhost:3000

📮 API Endpoints

Method	Endpoint	Description
GET	/	Test route
POST	/users	Create a new user
GET	/users	List all users

Example Request to (POST /users)
send this into the body:
{
  "name": "Samuel Calderón",
  "email": "samuel@example.com"
}

🐳 Docker Overview:
The project uses two services:
- app: Node.js and express backend
- db: MySQL 8 database

Port bindings: 
- API: localhost:3000
- DB: localhost:3307 (MySQL port exposed a 3307)

Learning Goals about this project:
- Use Sequalize ORM with MySQL
- Connect the backend and the database inside docker
- Understand service orchestration with Docker Compose
