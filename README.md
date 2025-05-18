# Edu LMS - Modern Learning Management System

A modern, responsive Learning Management System built with React.js and Node.js. This application features a sleek, intuitive UI with advanced animations and interactive components to enhance the learning experience, backed by a robust API-driven backend.

## ✨ Frontend Features

- **Modern UI Components** - Beautiful, responsive design with 3D effects and animations
- **Interactive Course Cards** - 3D tilt effects that respond to mouse movement with confetti animations
- **Gradient Backgrounds** - Dynamic color schemes throughout the application
- **Role-based Dashboards** - Separate interfaces for students and educators
- **Responsive Design** - Optimized for all devices from mobile to desktop
- **Smooth Transitions** - Enhanced user experience with subtle animations
- **Educator Tools** - Course creation and management interface with statistics
- **Student Portal** - Enrollment tracking and course progression

## ✨ Backend Features

- **RESTful API** - Comprehensive API endpoints for all LMS functionality
- **User Authentication** - Secure user authentication and authorization system
- **Course Management** - Backend services for course creation and organization
- **Enrollment System** - Student enrollment tracking and management
- **Payment Processing** - Secure payment integration for course purchases
- **Content Delivery** - Optimized delivery of educational content and videos
- **Analytics Engine** - Data collection and analysis of student performance

## 🛠️ Technology Stack

### Frontend
- **React.js** - Core UI library
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Canvas Confetti** - Interactive confetti animations
- **React Router** - Client-side routing
- **SVG Animations** - Custom SVG animations for interactive elements

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - ODM library for MongoDB
- **JWT** - Authentication and secure API access
- **Multer** - File upload handling for course materials

### Integration
- **Axios** - HTTP client for API requests
- **React Query** - Data fetching and state management
- **Browser APIs** - Smooth scrolling and DOM manipulation

## 📋 Prerequisites

- Node.js (v16.0 or higher)
- npm or yarn package manager
- MongoDB (v4.4 or higher)

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/Priyanshusaini01/LMS2.0.git

# Frontend Setup
cd LMS/client
npm install
npm run dev

# Backend Setup
cd ../server
npm install
npm run start
```

## 🌐 API Endpoints

The backend provides a comprehensive set of RESTful API endpoints:

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course details
- `POST /api/courses` - Create a new course (educator only)
- `PUT /api/courses/:id` - Update course (educator only)
- `DELETE /api/courses/:id` - Delete course (educator only)

### Enrollments
- `POST /api/enrollments` - Enroll in a course
- `GET /api/enrollments/user` - Get user enrollments
- `GET /api/enrollments/course/:id` - Get course enrollments (educator only)

### Content
- `POST /api/content/:courseId` - Add content to course
- `GET /api/content/:courseId` - Get course content
- `PUT /api/content/:contentId` - Update content

## 🖥️ Usage

### Student Experience
- Browse and search for courses
- View detailed course information with chapter breakdowns
- Enroll in courses with secure payment processing
- Track learning progress across enrolled courses
- Access video lectures and learning materials

### Educator Experience
- Create and manage courses with rich text description
- Add structured content with chapters and lectures
- Monitor enrollment statistics and revenue
- Manage student enrollments and engagement
- Upload and organize educational content

## 📊 Project Structure

```
LMS/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── assets/      # Images, icons, and static resources
│   │   ├── components/
│   │   │   ├── educator/ # Components for educator dashboard
│   │   │   └── student/  # Components for student dashboard
│   │   ├── pages/       # Page components for different routes
│   │   └── ...
├── server/              # Backend Node.js application
│   ├── controllers/     # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middlewares/     # Custom middlewares
│   └── ...
```

## 📸 Screenshots

 
![Screenshot 2025-05-18 092150](https://github.com/user-attachments/assets/f9f2b2dc-ada1-4a61-b7b9-b6b74a8dace7)


- *Home page with hero section*
![Screenshot 2025-05-18 092232](https://github.com/user-attachments/assets/cf8261c0-27fb-4654-93e0-27aa5219a919)


- *Course listings*

![Screenshot 2025-05-18 092216](https://github.com/user-attachments/assets/eee753ad-b377-4b5a-8354-ce0bc41ea3ee)

- *Course details*

![Screenshot 2025-05-18 092304](https://github.com/user-attachments/assets/595468ee-e1ad-41ac-81df-faf18ced077c)

- *Student dashboard*
![Screenshot 2025-05-18 092309](https://github.com/user-attachments/assets/6040318c-4e2a-4a61-b7f1-c07629071fd8)


- *Testimonial*

## 📇 Contact Information

Have questions or suggestions? Reach out to us:

- **Linkdin**: [profile](https://github.com/Priyanshusaini01/LMS2.0.git)
- **Email**: priyanshusaini982@gmail.com
- **GitHub Issues**: For bug reports and feature requests

---

## Frontend Components

### 📱 Responsive Navigation
- Dynamic navbar with role-based navigation items
- Highlighted important links for better user experience

### 🏢 Companies Section
- Modern styling with gradient backgrounds
- Features top tech companies: Google, Microsoft, Apple, Atlassian, OYO

### 🎴 Course Cards
- Interactive 3D hover effects with mouse tracking
- Confetti animations on interaction
- Clear visual hierarchy with optimized information display

### 📝 Testimonials
- Modern styling with professional user avatars
- Real-world testimonials from industry professionals

### 📊 Dashboard Analytics
- Visual representation of student progress
- Course popularity metrics
- Enrollment and revenue statistics

### 👨‍🏫 Educator Tools
- Intuitive course creation interface
- Student enrollment management
- Performance tracking and analytics

### 🎓 Student Learning Experience
- Structured course content navigation
- Video lecture player integration
- Progress tracking across enrolled courses

---

*Designed and developed with ❤️ by Priyanshu*
