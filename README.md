# MegaBlog - Modern Blogging Platform

A full-featured blogging platform built with modern web technologies, featuring user authentication, post management, and rich text editing capabilities.

## 🚀 Features

- **User Authentication**
  - Secure email/password registration and login
  - Protected routes for authenticated users
  - Session management
  - User profile management

- **Blog Post Management**
  - Create, read, update, and delete blog posts
  - Rich text editor with TinyMCE integration
  - Featured image upload support
  - Post status management (active/inactive)
  - Slug-based post URLs

- **User Interface**
  - Responsive design with Tailwind CSS
  - Clean and modern UI components
  - Loading states and error handling
  - Image preview and fallback handling
  - Interactive navigation

## 🛠️ Technologies Used

- **Frontend Framework**
  - React 18
  - React Router v6 for routing
  - Redux Toolkit for state management
  - React Hook Form for form handling

- **Backend Services**
  - Appwrite for backend services
    - Authentication
    - Database
    - File Storage
    - Real-time updates

- **Development Tools**
  - Vite for build tooling and development server
  - ESLint for code linting
  - Prettier for code formatting
  - PostCSS for CSS processing

- **Styling**
  - Tailwind CSS for utility-first styling
  - Responsive design principles
  - Custom component styling

## 💻 Technical Skills Demonstrated

- Modern React development practices
  - Hooks and custom hooks
  - Component composition
  - State management
  - Form handling and validation

- Frontend Architecture
  - Modular component design
  - Service layer abstraction
  - Protected routing
  - State management patterns

- API Integration
  - RESTful API consumption
  - File upload handling
  - Error handling and validation

- Code Quality
  - ESLint configuration
  - Prettier formatting
  - Component reusability
  - Clean code practices

## 🚦 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and fill in your Appwrite credentials:
   ```env
   VITE_APPWRITE_URL=
   VITE_APPWRITE_PROJECT_ID=
   VITE_APPWRITE_DATABASE_ID=
   VITE_APPWRITE_COLLECTION_ID=
   VITE_APPWRITE_BUCKET_ID=
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📝 Environment Variables

The following environment variables are required:

- `VITE_APPWRITE_URL`: Your Appwrite API endpoint
- `VITE_APPWRITE_PROJECT_ID`: Your Appwrite project ID
- `VITE_APPWRITE_DATABASE_ID`: Your Appwrite database ID
- `VITE_APPWRITE_COLLECTION_ID`: Your Appwrite collection ID
- `VITE_APPWRITE_BUCKET_ID`: Your Appwrite storage bucket ID

## 🛠️ Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Fix ESLint errors
- `npm run format`: Format code with Prettier
- `npm run format:check`: Check code formatting

## 📦 Project Structure

```
src/
├── appwrite/        # Appwrite service configurations
├── components/      # Reusable UI components
├── conf/           # Configuration files
├── pages/          # Route components
└── store/          # Redux store and slices
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request
