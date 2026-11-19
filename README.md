# Renz Malabanan Siphoning

Static marketing site for Renz Malabanan Siphoning, the same Malabanan septic, declogging, and plumbing service.

Phone: 0997 932 0621  
Email: renzmalabananservices@gmail.com

There is no backend, database, login, or payment. The quotation form opens WhatsApp or email.

## Develop

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Deploy the `dist` folder. Before publishing, set `url` in `src/lib/constants.ts` to the live https address and run `npm run build`. That fills the canonical link, Open Graph URL, `robots.txt`, and `sitemap.xml`.

## Add this project to GitHub manually

Do this from the project folder, `D:\renz malabanan`. `node_modules` and `dist` stay off GitHub. The source files are what get uploaded.

1. Open [github.com/new](https://github.com/new) and sign in.
2. Name the repository, for example `renz-malabanan`.
3. Leave it empty. Do not add a README, `.gitignore`, or license on GitHub. This folder already has those files.
4. Choose Public or Private, then click **Create repository**.
5. In PowerShell, from this folder, run:

```powershell
git init
git add .
git commit -m "Add the Renz Malabanan Siphoning site."
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/renz-malabanan.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `renz-malabanan` with the owner and repository name from the page GitHub shows after you create the repo.

When `git push` asks you to sign in, use the browser login. GitHub does not accept your account password in the terminal.

To confirm it worked, refresh the repository page. You should see `src`, `public`, `package.json`, and this README. You should not see a `node_modules` folder.
