# Full-Stack Todo List Application

Frontend: Angular\
Backend: Spring Boot (Java)

## 📌 Overview

This project is a full-stack Todo List application consisting of:

-   **Frontend (Angular)** --- UI สำหรับจัดการงาน (Tasks)
-   **Backend (Spring Boot)** --- REST API สำหรับจัดการข้อมูลในฐานข้อมูล

ทั้งสองส่วนสามารถทำงานร่วมกันผ่าน HTTP API เช่น `/api/todo`,
`/api/auth/login` เป็นต้น

------------------------------------------------------------------------

# 🚀 Features

### ✅ Frontend (Angular)

-   Authentication UI (Login)
-   Todo List UI
-   ใช้ Angular Routing
-   จัดการ API ผ่าน `api.service.ts`
-   โครงสร้าง Components / Layout ชัดเจน

### ✅ Backend (Spring Boot)

-   REST API สำหรับ CRUD Todo
-   Authentication (ถ้ามีในโปรเจกต์จริง)
-   Entity / Repository / Service / Controller พร้อมใช้งาน
-   Maven based project
-   รองรับ Database ผ่าน Spring Data JPA

------------------------------------------------------------------------

# 📂 Project Structure

## 🖥 Frontend (Angular)

    frontend/
     ├─ src/
     │   ├─ app/
     │   │   ├─ auth/
     │   │   │   ├─ auth-layout/
     │   │   │   └─ login-component/
     │   │   ├─ services/api.service.ts
     │   │   ├─ app.routes.ts
     │   │   ├─ app.ts
     │   └─ index.html
     ├─ angular.json
     ├─ package.json

## 🛠 Backend (Spring Boot)

    backend/
     ├─ src/main/java/com/.../
     │   ├─ controller/
     │   ├─ service/
     │   ├─ repository/
     │   └─ entity/
     ├─ src/main/resources/
     │   └─ application.properties
     ├─ pom.xml
     ├─ mvnw / mvnw.cmd

------------------------------------------------------------------------

# ▶️ How to Run

## 🖥 1. Run Backend (Spring Boot)

### **Requirements**

-   Java 17+
-   Maven

### **Commands**

``` bash
cd backend
mvnw spring-boot:run
```

Backend will start at:

    http://localhost:8080

------------------------------------------------------------------------

## 🌐 2. Run Frontend (Angular)

### **Requirements**

-   Node.js (v18+)
-   Angular CLI

### **Install dependencies**

``` bash
cd frontend
npm install
```

### **Run App**

``` bash
ng serve
```

Frontend will run at:

    http://localhost:4200


