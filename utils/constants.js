export const themeConfig = {
  primary: 'linear-gradient(265.53deg, #152530 0%, #040203 100%)',
  primaryImage: 'linear-gradient(265.53deg, #040203 0%, #152530 100%)',
  secondaryBg: '#17181B',
  secondary: '#FF3957',
};

export const tutorials = [
  {
    title: 'Step1',
    description: 'Getting Started with React and Next.JS',
    href: 'https://medium.appbase.io/getting-started-with-vue-and-nuxt-js-part-1-of-11-b694b23679c5',
    isPublished: true,
  },
  {
    title: 'Step2',
    description: 'Basics of React',
    href: 'https://medium.appbase.io/basics-of-vue-part-2-of-11-948eeab906c1',
    isPublished: true,
  },
  {
    title: 'Step3',
    description: 'Home Page + Layout + CSS-in-JS (Emotion-JS)',
    href: 'https://medium.appbase.io/home-page-layout-css-in-js-emotion-js-part-3-of-11-e06aed4ee2db',
    isPublished: true,
  },
  {
    title: 'Step4',
    description: 'Basics of Redux',
    href: 'https://medium.appbase.io/basics-of-vuex-part-4-of-11-d8a54d8dd4c3',
    isPublished: true,
  },
  {
    title: 'Step5',
    description: 'ReactiveSearch + Appbase.io for hosted search backend',
    href: 'https://medium.appbase.io/reactivesearch-appbase-io-for-hosted-search-backend-part-5-of-11-7b8be789da3',
    isPublished: true,
  },
  {
    title: 'Step6',
    description: 'Building The Search Page',
    href: 'https://medium.appbase.io/building-the-search-page-part-6-of-11-d7d433f10cfa',
    isPublished: true,
  },
  {
    title: 'Step7',
    description: 'Authentication (Auth0)',
    href: 'https://medium.appbase.io/authentication-with-auth0-part-7-of-11-a5f67d9c2110',
    isPublished: true,
  },
  {
    title: 'Step8',
    description: 'Product Page + Checkout Page + Payment with stripe',
    href: 'https://medium.appbase.io/product-page-checkout-page-payment-with-stripe-part-8-of-11-6ab87ff0acd4',
    isPublished: true,
  },
  {
    title: 'Step9',
    description: 'Analytics with Mixpanel',
    href: 'https://medium.appbase.io/analytics-with-appbase-io-part-9-of-11-bcedccb4987',
    isPublished: true,
  },
  {
    title: 'Step10A',
    description: 'Deployment with Heroku',
    href: 'https://medium.com/@lohita_s/deployment-with-heroku-part-10a-of-11-bd1d570a347d',
    isPublished: true,
  },
  {
    title: 'Step10B',
    description: 'Deployment with Vercel',
    href: 'https://medium.appbase.io/deployment-with-vercel-part-10b-of-11-ab26996ddad2',
    isPublished: true,
  },
  {
    title: 'Step11',
    description: 'Progressive Web App Compatibility',
    href: 'https://medium.appbase.io/progressive-web-app-compatibility-part-11-of-11-ef22344c4a2b',
    isPublished: true,
  },
];
export const bannerConfig = {
  _index: 'movies-store-app',
  _type: 'movies-store-app',
  _id: 'AWfg7ic5WF6iLczfNy7G',
  _score: 1,
  _source: {
    popularity: 53.604,
    vote_count: 22198,
    video: false,
    poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    id: 155,
    adult: false,
    backdrop_path: '/cfT29Im5VDvjE0RpyKOSdCKZal7.jpg',
    original_language: 'en',
    original_title: 'The Dark Knight',
    genre_ids: [28, 80, 18, 53],
    title: 'The Dark Knight',
    vote_average: 8.4,
    overview:
      'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
    release_date: '2008-07-16',
    genres_data: ['Action', 'Crime', 'Drama', 'Thriller'],
    price: 1499,
    release_year: 2008,
  },
};

export const authConfig = {
  audience: process.env.AUTH_AUDIENCE,
  clientID: process.env.AUTH_CLIENT_ID,
  domain: process.env.AUTH_DOMAIN,
  redirectUri: 'https://localhost:1357/authenticate',
};

export const appBaseConfig = {
  url: process.env.APPBASE_URL,
  app: process.env.APPBASE_APP_NAME,
  credentials: process.env.APPBASE_APP_CREDENTIALS,
};

// eslint-disable-next-line
export const MIXPANEL_TOKEN = process.env.MIXPANEL_TOKEN;
