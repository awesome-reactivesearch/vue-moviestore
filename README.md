# Movies Store App (Vue + Nuxt.js + Vuex + Appbase)

## Getting Started

### 1. Clone the repo or Unzip the project

If you're using a Zip of the project, just unzip and go to the root directory.

If you're accessing this via the Github repository, you can clone the project using:

```js
git clone --url--
```

### 2. Set up Environment variables
Create a `.env` file at the root & add the following config variables:
```
APPBASE_URL = <YOUR_APPBASE_CLUSTER_URL>
APPBASE_APP_NAME = <YOUR_APPBASE_APP_NAME>
APPBASE_APP_CREDENTIALS = <YOUR_APP_CREDENTIALS>
AUTH_AUDIENCE = <YOUR_APP_AUTH_0_AUDIENCE>
AUTH_CLIENT_ID = <YOUR_APP_AUTH__0_CLIENT_ID>
AUTH_DOMAIN = <YOUR_APP_AUTH__0_DOMAIN>
```
### 3. Run the project
Run the following command to run the project locally
```js
cd vue-moviesstore
yarn && yarn dev
```
Voila! Your project is live at `localhost:4000`.

`Note:` If you're on windows, use `yarn windows-dev` instead of `yarn dev` in the above command.

### 4. Customize Theme
You can easily customize the app UI just by modifying the theme variables at `utils/constants.js` file.