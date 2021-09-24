# Movies Store App (Vue + Nuxt.js + Vuex + Appbase)

![Checkout the final app that we will build at the end of this series — [https://vue-moviestore.vercel.app/](https://vue-moviestore.vercel.app/) or [https://vue-moviestore.herokuapp.com/](https://vue-moviestore.herokuapp.com/)](https://cdn-images-1.medium.com/max/3840/1*x-N63XCQtgMUR6Drzk7fTQ.jpeg)

This is a tutorial series aiming to teach how to build a [feature-rich, scalable e-commerce app using Vue, Vuex and Nuxt](https://vue-moviestore.vercel.app/).

You will learn the following concepts:

* Basics of Vue and VueX, and how to use them effectively by building an e-commerce app from ground up,

* Build a full-stack progressive web app with offline support,

* Build an end-to-end app with a first class search experience,

* The latest trends in ES6/ES7, how to use CSS-in-JS & dive into server-side rendering (SEO focused) using Nuxt.JS,

* Learn about the following SaaS services:
* Appbase.io (for powering search and search-driven analytics),
* Auth0 (for user authentication functionality),
* Stripe (for handling payments), and
* Heroku and Vercel(for hosting the app).

## Getting Started

### 1. Clone the repo or Unzip the project

If you're using a Zip of the project, just unzip and go to the root directory.

If you're accessing this via the Github repository, you can clone the project using:

```js
git clone git@github.com:appbaseio-confidential/vue-moviestore.git
```

### 2. Set up Environment variables

Create a `.env` file at the root & add the following config variables:

```
APPBASE_URL = <YOUR_APPBASE_CLUSTER_URL>
APPBASE_APP_NAME = <YOUR_APPBASE_APP_NAME>
APPBASE_APP_CREDENTIALS = <YOUR_APP_CREDENTIALS>
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

You can easily customize the app UI just by modifying the theme variables in `utils/constants.js` file.



## Check out the tutorial series

1. [Getting Started with Vue and Nuxt.JS](https://medium.com/p/b694b23679c5)

2. [Basics of Vue](https://medium.com/p/948eeab906c1)

3. [Home Page + Layout + CSS-in-JS (Emotion.JS)](https://medium.com/p/e06aed4ee2db)

4. [Basics of VueX](https://medium.com/p/d8a54d8dd4c3)

5. [Appbase.io + ReactiveSearch UI Components](https://medium.com/p/7b8be789da3)

6. [Building The Search Page](https://medium.com/p/d7d433f10cfa)

7. [Authentication with Auth0](https://medium.com/p/a5f67d9c2110)

8. [Product Page + Checkout Page + Payment with Stripe](https://medium.com/p/6ab87ff0acd4)

9. [Analytics with Appbase.io](https://medium.com/p/bcedccb4987)

10. Deploying the Nuxt App:  
A) [Deployment with Heroku](https://medium.com/p/bd1d570a347d)
B) [Deployment with Vercel](https://medium.com/p/ab26996ddad2)

11. [PWA (Progressive Web App) compatibility](https://medium.com/p/ef22344c4a2b)

---

If you’re looking for the React version of our series, you can check out this post that uses React, Redux, Next.JS and appbase.io:
[**Build an end-to-end Movie Store App with React + Redux + Appbase.io (2021)**](https://medium.appbase.io/build-an-end-to-end-movies-store-app-with-react-redux-appbase-a8622f7e0c7a)
