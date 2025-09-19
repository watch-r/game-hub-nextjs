# Game Hub - Next.js

A modern gaming platform built with Next.js that provides comprehensive game discovery, reviews, and community features.

## 🎮 Features

- **Game Discovery**: Browse and search through thousands of games
- **Advanced Filtering**: Filter games by genre, platform, rating, and release date
- **Game Details**: Comprehensive game information including screenshots, trailers, and descriptions
- **User Reviews**: Read and write game reviews
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Fast Performance**: Server-side rendering and optimized loading

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Runtime**: Node.js
- **Styling**: Tailwind CSS / CSS Modules
- **State Management**: React Context / Redux Toolkit
- **API Integration**: REST APIs
- **Database**: (Add your database here)
- **Authentication**: (Add auth provider if applicable)
- **Deployment**: Vercel / Netlify

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 18 or higher)
- npm or yarn or pnpm
- Git

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/watch-r/game-hub-nextjs.git
   cd game-hub-nextjs
   ```

2. **Switch to update-2 branch**
   ```bash
   git checkout update-2
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_API_URL=your_api_url_here
   NEXT_PUBLIC_API_KEY=your_api_key_here
   # Add other environment variables as needed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🗂️ Project Structure

```
game-hub-nextjs/
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── GameCard/
│   │   ├── GameGrid/
│   │   └── Navigation/
│   ├── hooks/
│   ├── lib/
│   ├── services/
│   └── types/
├── .env.example
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

## 🌐 API Integration

This project integrates with game databases and APIs to fetch game information. Make sure to:

1. Get your API key from the game database service
2. Add the API key to your environment variables
3. Configure rate limiting if needed

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Theming

The app supports both light and dark themes. Users can toggle between themes using the theme switcher in the navigation bar.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **watch-r** - *Initial work* - [watch-r](https://github.com/watch-r)

## 🙏 Acknowledgments

- Game database APIs for providing game data
- Next.js team for the amazing framework
- Open source community for various libraries used

## 📞 Support

If you have any questions or run into issues, please:

1. Check the [Issues](https://github.com/watch-r/game-hub-nextjs/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

## 🔄 Changelog

### Update-2
- [Add your update-2 changes here]
- [List new features]
- [List bug fixes]
- [List improvements]

---

⭐ If you found this project helpful, please give it a star on GitHub!