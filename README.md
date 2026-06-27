# abhijitt.com

Personal portfolio site for Abhijit Thakur — Senior DevSecOps & Cloud Security Engineer.

**Live:** [https://abhijitt.com](https://abhijitt.com)

## Built With

- [Astro](https://astro.build/) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first CSS
- GitHub Pages + GitHub Actions for deployment

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build
npm run preview   # preview production build
```

## Project Structure

All content is configured in `src/config.ts`. Sections hide automatically when their data is removed.

```
src/
├── config.ts              # All site content
├── components/            # Astro components (Hero, About, Projects, etc.)
├── pages/
│   ├── index.astro        # Main page
│   └── demo/              # Interactive project demos
│       ├── complianceguard.astro
│       ├── drinkfinder.astro
│       └── dietician.astro
└── styles/global.css
```

## Credits

Built on the [DevPortfolio](https://github.com/RyanFitzgerald/devportfolio) template by Ryan Fitzgerald (MIT License).
