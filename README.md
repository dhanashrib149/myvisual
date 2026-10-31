# AWS RDS Visualizer

A static, interactive learning page that illustrates a typical Amazon RDS network architecture. It is inspired by the step-by-step VPC visualizer layout in the supplied reference image.

## Run locally
Open `index.html` in a modern browser. No build tools, dependencies, backend, or AWS credentials are required.

## Publish with GitHub Pages
1. Create a new GitHub repository.
2. Extract this ZIP file on your computer.
3. In GitHub Desktop, choose **File → Add local repository** (or **Create new repository**) and select the extracted `rds-visualization` folder.
4. Commit the files and click **Publish repository**.
5. On GitHub.com, open the repository → **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch `main` and folder `/ (root)`, then click **Save**.
8. Wait for deployment and open the Pages URL shown there.

## Files
- `index.html` — page structure
- `style.css` — responsive visual styling
- `script.js` — interactive steps and highlights

## Notes
- This is an educational diagram, not a live AWS topology or deployment tool.
- The displayed Region, CIDRs, and ports are examples. Adapt them to your environment.
- RDS does not require a public IP for a private application-to-database design.
