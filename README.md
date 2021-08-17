# React-Typescript-Nextjs-Docker-Nginx Boilerplate
React-Typescript-Nextjs boilerplate with Docker to run the code in isolated env. Folder structure added to get started with basic web-applications. Docker deployment configuration set to use Nginx with caching. Eslint & Prettier set up to auto-update file on save along with using Husky & Lint-Staged to run lint check on git commit.

## Dev Technologies
* Docker
* Next.js
* Typescript
* Nginx (prod)
* Eslint & Prettier
* Husky & Lint-Staged

## Build Instructions
### Pull Code
* ```git clone git@github.com:akash4393/react-nextjs-docker-nginx.git```
* ```cd ./react-nextjs-docker-nginx```
### Start (Dev)
* ```docker compose up --build```
* Go to <http://localhost:3000>

### Stop (Dev)
* Stop process ```Cmd + C```
* ```docker compose down```

### Start (prod)
* ```docker compose -f docker-compose.prod.yml up --build```
* Go to <http://localhost:80>

### Stop (prod)
* Stop process ```Cmd + C```
* ```docker compose -f docker-compose.prod.yml down```

### Setting up vscode
* Add the following to vscode settings.json
```javascript
"[typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.insertSpaces": true,
    "editor.tabSize": 2,
},
"[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.insertSpaces": true,
    "editor.tabSize": 2,
},
```

## Troubleshoot
* Network timeout error on docker compose up 
    * Rerun docker compose command

