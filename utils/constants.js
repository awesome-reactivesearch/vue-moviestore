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
    href: 'https://medium.appbase.io/part1-getting-started-with-react-and-nextjs-4f28a6a0c38e',
    isPublished: true,
  },
  {
    title: 'Step2',
    description: 'Basics of React',
    href: 'https://medium.appbase.io/part2-basics-of-react-ea90c27d2b5d',
    isPublished: true,
  },
  {
    title: 'Step3',
    description: 'Home Page + Layout + CSS-in-JS (Emotion-JS)',
    href: 'https://medium.com/@kuldepsaxena155/part3-home-page-layout-styled-components-emotion-js-85f0de84dfa6',
    isPublished: true,
  },
  {
    title: 'Step4',
    description: 'Basics of Redux',
    href: 'https://medium.com/@kuldepsaxena155/step3-redux-6fc99f7a496a',
    isPublished: true,
  },
  {
    title: 'Step5',
    description: 'ReactiveSearch + Appbase.io for hosted search backend',
    href: 'https://medium.com/@kuldepsaxena155/step4-reactivesearch-appbase-io-for-hosted-search-backend-f1deabfa0d7f',
    isPublished: true,
  },
  {
    title: 'Step6',
    description: 'Building The Search Page',
    href: 'https://medium.com/@kuldepsaxena155/step6-search-page-47d50ae2c01f',
    isPublished: true,
  },
  {
    title: 'Step7',
    description: 'Authentication (Auth0)',
    href: 'https://medium.com/@kuldepsaxena155/step7-authentication-autho-f67f2f20b523',
    isPublished: true,
  },
  {
    title: 'Step8',
    description: 'Product Page + Checkout Page + Payment with stripe',
    href: 'https://medium.com/@kuldepsaxena155/step8-product-page-checkout-page-payment-with-stripe-e10af5060b36',
    isPublished: true,
  },
  {
    title: 'Step9',
    description: 'Analytics with Mixpanel',
    href: 'https://medium.com/@kuldepsaxena155/step9-analytics-with-mixpanel-f9a16dbb8f42',
    isPublished: true,
  },
  {
    title: 'Step10',
    description: 'Deployment with Heroku',
    href: 'https://medium.com/@kuldepsaxena155/step10-deployment-with-now-sh-e416be6d2c07',
    isPublished: true,
  },
  {
    title: 'Step11',
    description: 'Progressive Web App Compatibility',
    href: 'https://medium.appbase.io/step11-progressive-web-app-compatibility-717dd84438e1',
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
