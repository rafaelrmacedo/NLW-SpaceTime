# NLW-SpaceTime

This project was created in NLW Spacetime Edition, made by [Rocketseat](https://www.rocketseat.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=lead&utm_term=perpetuo&utm_content=institucional-lead-home-texto-lead-brandkws-none-none-institucional-none-none-br-google&gclid=Cj0KCQjwyLGjBhDKARIsAFRNgW-n9axJ7vjvmB5VdglkR1qPtBhhORgyY5FsUOhRMQjtYXZ0W3MMRyMaAj_IEALw_wcB)

## Configuration

### .env Files

#### Front-end:
Create a `.env.local` file in the following directory:
`NLW-SpaceTime/web/`

The content of the `.env.local` file should be:  
- `NEXT_PUBLIC_GITHUB_CLIENT_ID=YourGitHubClientId`

#### Back-end:
Create a `.env` file in the following directory:
`NLW-SpaceTime/server/`

The content of the `.env` file should be:
- `DATABASE_URL="file:./dev.db"`
- `GITHUB_CLIENT_ID=YourGitHubClientId`
- `GITHUB_CLIENT_SECRET=YourGitHubClientSecret`

### Generating GitHub Client ID and Secret using OAuth:
1. Access your GitHub Profile.
2. Go to Developer Settings.
3. Click on "OAuth Apps," then "New OAuth App."
4. Set the Home Page URL as `http://localhost:3000`.
5. Set the Authorization callback URL as `http://localhost:3000/api/auth/callback`.

After completing these steps, the client ID and secret will appear for use in the `.env` files.

#### Note:
The Name and description just type anything you want.

## Project Dependencies
#### Obs: Dev dependencies are installed using the flag -D before dependency.
Ex.: `npm i -D typescript`
### Front-end:
```javascript
"dependencies": {
    "@types/node": "20.1.3",
    "@types/react": "^18.2.6",
    "@types/react-dom": "18.2.4",
    "autoprefixer": "10.4.14",
    "axios": "^1.4.0",
    "dayjs": "^1.11.8",
    "eslint": "8.40.0",
    "eslint-config-next": "13.4.2",
    "js-cookie": "^3.0.5",
    "jwt-decode": "^3.1.2",
    "lucide-react": "^0.216.0",
    "next": "13.4.2",
    "postcss": "8.4.23",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "3.3.2",
    "typescript": "5.0.4"
  },
  "devDependencies": {
    "@rocketseat/eslint-config": "^1.2.0",
    "@tailwindcss/forms": "^0.5.3",
    "@types/js-cookie": "^3.0.3",
    "prettier-plugin-tailwindcss": "^0.2.8"
  }
```

### Back-end:
```javascript
"devDependencies": {
    "dotenv": "^16.0.3",
    "eslint": "^8.40.0",
    "prisma": "^4.14.0",
    "tsx": "^3.12.7",
    "typescript": "^5.0.4"
  },
  "dependencies": {
    "@fastify/cors": "^8.2.1",
    "@fastify/jwt": "^6.7.1",
    "@fastify/multipart": "^7.6.0",
    "@fastify/static": "^6.10.1",
    "@prisma/client": "^4.14.0",
    "@types/node": "^20.1.3",
    "axios": "^1.4.0",
    "fastify": "^4.17.0",
    "zod": "^3.21.4"
  } 
  ```
