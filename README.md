# Frontend Codebase for Tenderfoot

## Dev Technologies
* Docker
* Next.js
* Typescript
* Nginx (prod)

## Build Instructions
### Pull Code
* ```git clone git@github.com:tenderfootdevs/frontend-web.git```
* ```cd ./collab-platform-frontend```
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

