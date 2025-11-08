# VedaViks Media Website

This project is a comprehensive website for [VedaViks Media](https://vedaviksmedia.com/), built from scratch using React and Tailwind CSS. It delivers a modern all-black theme, dynamic navigation, and robust routing modeled on best-in-class agency sites.

## Features

- **Complete Website:** All major pages for VedaViks Media are included: Home, Services, Industries, Clients, About, Insights, and Contact.
- **Modern All-Black Theme:** A sleek and professional all-black design has been implemented across the entire website, providing a consistent and visually appealing user experience.
- **Responsive Design:** The layout is fully responsive and optimized for various screen sizes, from mobile devices to desktops.
- **Dynamic Navigation:** The navigation bar is initially transparent, becomes solid on scroll, and hides/appears based on scroll direction for an enhanced UX.
- **Component-Based Architecture:** Built with a clean and modular component structure in React, making the codebase easy to maintain and scale.
- **Custom Tailwind CSS Theme:** The project uses a custom Tailwind CSS configuration with a specific color palette, font styles, and animations to match the VedaViks Media branding.
- **Routing with React Router:** All page navigation is handled by `react-router-dom`, ensuring a seamless single-page application experience.
- **Netlify Ready:** The project includes a `netlify.toml` file with the necessary build configurations and redirects for easy deployment on Netlify.
- **Detailed README:** This `README.md` provides comprehensive instructions for installation, development, and deployment.

## Technologies Used

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react) (for icons)
- [Unsplash](https://unsplash.com/) (for placeholder images)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Teju2025/Development-website-.git
   cd Development-website-
   ```

2. **Install dependencies:**

   Using npm:
   ```bash
   npm install
   ```

   Using Yarn:
   ```bash
   yarn install
   ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm start
```

This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes, and you may also see any lint errors in the console.

### Building for Production

To create a production-ready build of the app, run:

```bash
npm run build
```

This command bundles the app into static files for production and places them in the `build` directory. It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment

This project is configured for easy deployment on [Netlify](https://www.netlify.com/).

### Netlify Deployment

1. **Push your code to a GitHub repository.**
2. **Log in to Netlify** and select "New site from Git."
3. **Choose your Git provider** (e.g., GitHub) and select the repository.
4. **Configure the build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. **Click "Deploy site."**

Netlify will automatically build and deploy your site. The `netlify.toml` file in the repository includes the necessary configurations, including a redirect rule to handle single-page application routing correctly.

```toml
# netlify.toml

[build]
  command = "npm run build"
  publish = "build"
  
[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Project Structure

```
/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── ...
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── netlify.toml
├── package.json
├── README.md
└── tailwind.config.js
```

## Conclusion

This VedaViks Media website serves as a comprehensive example of building a modern, fully-featured website with React and Tailwind CSS. It demonstrates best practices in project setup, component architecture, responsive design, and deployment.

## 🚀 Features

- **Modern Design**: Sleek black theme with professional aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Navigation**: Multi-level dropdown menus with smooth animations
- **Multiple Pages**: Complete website with all major sections
- **Contact Forms**: Functional contact forms with validation
- **Case Studies**: Showcase of client projects and testimonials
- **Services & Industries**: Comprehensive service offerings and industry expertise

## 📋 Pages Included

- **Home**: Hero section, case studies, testimonials, statistics
- **Services**: Ideation, Development, Design, AI, Maintenance, Cooperation Models
- **Industries**: Finance, Commerce, Healthcare, Education, Proptech, Greentech
- **Clients**: Case studies and client testimonials
- **About**: Company values, culture, team information
- **Insights**: Blog posts and newsletters
- **Contact**: Contact forms and office locations

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icons
- **Framer Motion**: Smooth animations (ready for implementation)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Teju2025/Development-website-.git
   cd Development-website-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Deployment

### Netlify Deployment

This project is configured for easy deployment on Netlify:

1. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Connect your GitHub account
   - Select this repository

2. **Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: 18 (or latest LTS)

3. **Environment Variables** (if needed):
   - Add any environment variables in Netlify dashboard

4. **Deploy**:
   - Netlify will automatically deploy on every push to main branch

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting provider

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   └── Footer.js          # Footer component
├── pages/
│   ├── Home.js            # Homepage
│   ├── Services.js        # Services page
│   ├── Industries.js      # Industries page
│   ├── Clients.js         # Clients page
│   ├── About.js           # About page
│   ├── Insights.js        # Insights/Blog page
│   └── Contact.js         # Contact page
├── App.js                 # Main app component
├── index.js              # Entry point
└── index.css             # Global styles
```

## 🎨 Customization

### Colors
The theme uses a black color scheme defined in `tailwind.config.js`:
- Primary: Black (#000000)
- Secondary: Dark grays (#111111, #1a1a1a)
- Text: White (#ffffff) and light grays

### Styling
- All styles are in `src/index.css` using Tailwind CSS
- Custom components defined in the CSS file
- Responsive design with mobile-first approach

## 🔧 Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App (not recommended)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by [Netguru](https://www.netguru.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

## 📞 Support

For support, email support@example.com or create an issue in this repository.

---

**Made with ❤️ by [Your Name]**