#  Talent\_Link\_v1.4 - Frontend

###  **Technology:** React.js, JavaScript, Styled Components
###  **Architecture:** Dual-Role Single-Page Application (SPA)

---

##  Project Overview

**Talent\_Link\_v1.4** is the client-side component (Frontend) of a sophisticated, dual-role talent marketplace. Built entirely with **React.js**, this Single-Page Application (SPA) is designed to create a seamless, responsive, and intuitive interface for two distinct user groups: **Students/Talent** and **Employers/Recruiters**.

The project’s primary focus is demonstrating strong proficiency in modern frontend development, component-based architecture, and efficient client-side routing for a complex web application.

##  Technical Stack

| Layer | Technology | Version / Key Library | Role in Project |
| :--- | :--- | :--- | :--- |
| **Frontend Core** | **React.js** | ^18.3.1 | Component-based UI architecture and state management. |
| **Routing** | **React Router DOM** | ^7.0.2 | Manages client-side navigation and URL synchronization for the SPA. |
| **Styling** | **Styled Components** | ^6.1.13 | Utilized for component-level, modular CSS, ensuring maintainable and dynamic styling. |
| **Setup** | **Create React App** | v5.0.1 | Provides the foundational toolchain and environment setup. |

##  Core Features & Component Architecture

The application is structured around a dual-role architecture, with dedicated components and routes for each user type, confirming the implementation of role-based UI/UX.

### **1. Student/Talent Features**

*   **StudentDashboard (`/studentdashboard`):** Central landing page providing an overview of relevant jobs, profile status, and application metrics.
*   **StudentProfile (`/studentprofile`):** Dedicated section for managing personal information, skills, education, and experience.
*   **StudentJobs (`/studentjobs`):** A job listing and search page, optimized for filtering and reviewing available opportunities.

### **2. Employer/Recruiter Features**

*   **EmployeDashboardpage (`/employer`):** Management hub for job postings, viewing applications, and platform statistics.
*   **EmployeProfile (`/employeprofile`):** Interface for employers to manage their company profile and branding.
*   **EmployeJoboffer (`/joboffers`):** Functionality for creating, editing, and managing current and past job postings.
*   **EmployeApplications (`/empapps`):** Detailed view for tracking and processing applications submitted by students/talent.

### **3. General Functionality**

*   **HomePage (`/`):** The public entry point for the application.
*   **Modular Routing:** All major sections are clearly defined via `react-router-dom`, demonstrating mastery of modern routing conventions.

##  Getting Started

This guide assumes you are setting up the frontend client locally.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or yarn

### Installation & Execution

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SdIlias/Talent_Link_v1.4.git
    cd Talent_Link_v1.4
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the application:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The application will automatically open in your default browser at `http://localhost:3000`.
