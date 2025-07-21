# Personal Website for Resume and deploy to gh-pages

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and edited by Phu Nguyen

## External Resources

### Fonts and Icons
- **Font Awesome**: Used for various icons throughout the project like linkedin/github/email icons.  
  [Font Awesome CDN](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css)
- **Lucide React**: Used for the close button in the modal.  
  [Lucide React](https://lucide.dev/)
- **Default Tailwind Font Stack**: The project uses Tailwind CSS's default system font stack for text styling.  

### CSS Frameworks
- **Tailwind CSS**: Utility-first CSS framework for styling components.  
  [Tailwind CSS CDN](https://cdn.tailwindcss.com)

### Other Resources
- **Favicon**: `%PUBLIC_URL%/logo_pn_black.ico` for the website's favicon.


## Deployment

This project is deployed to **GitHub Pages** using the `npm run deploy` command. To deploy the project, follow these steps:

1. Ensure you have configured the `homepage` field in your `package.json` file. It should point to your GitHub Pages URL:
   ```json
   "homepage": "https://<your-username>.github.io/<your-repository-name>"
   ```
2. Run the following commands 
   ```bash
   npm run deploy
   ```
### Running Locally
To run the project locally, use the following command:
   ```bash
   npm start
   ```