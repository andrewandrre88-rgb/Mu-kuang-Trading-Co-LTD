# Guangzhou Mu Kuang Trading Co. Website

## Deployment to Hostinger 🚀

This project is built using modern **React** and **Vite**. It is completely compatible with Hostinger's standard web hosting packages (Shared, Premium, Business, or Cloud Hosting). 

To ensure you don't encounter any problems, follow these exact steps:

### 1. Export Your Project
If you are inside Google AI Studio, export your project as a ZIP file (using the export options) or push it to a GitHub repository. If it's a ZIP, extract it on your local machine.

### 2. Build the Application
Before uploading to Hostinger, you must build the source files into optimized, static HTML/JS/CSS that browsers can understand.

1. Ensure you have Node.js installed on your computer.
2. Open your terminal or command prompt in the project folder.
3. Run the following commands:
   ```bash
   npm install
   npm run build
   ```
4. This will create a `dist` folder in your project directory. **This folder contains the actual website files.**

### 3. Upload to Hostinger
1. Log in to your Hostinger hPanel.
2. Go to **Websites** and click **Manage** next to your domain.
3. Open the **File Manager**.
4. Navigate to the `public_html` directory for your domain.
5. If there is a `default.php` or other placeholder files in `public_html`, delete them.
6. Open the `dist` folder on your local computer from Step 2.
7. Upload **all contents** inside the `dist` folder directly into the `public_html` directory on Hostinger. 
   *(Note: Upload the files inside `dist`, not the `dist` folder itself.)*

### 4. Important Checks
- A `.htaccess` file has been specifically generated in the `public` folder of this project (which gets moved to `dist` during the build). This ensures proper routing and asset caching on Hostinger's Apache/LiteSpeed servers. Make sure it was uploaded (it might be a hidden file on your computer, so check file manager settings if it didn't copy).
- The `vite.config.ts` was pre-configured with `base: './'` to guarantee that assets like images, scripts, and CSS load properly regardless of whether they are hosted on a root domain or a subdirectory.

Your site should now be live and running extremely fast!
