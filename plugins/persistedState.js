// import createPersistedState from 'vuex-persistedstate'

// // function restoreState(store) {
// //   if (process.browser) {
// //     if (store) {
// //       // Replace store state before calling plugins
// //       if (window.__NUXT__ && window.__NUXT__.state) {
// //         store.replaceState(window.__NUXT__.state)
// //         delete window.__NUXT__.state;
// //       }
// //     }
// //   }
// // }

// // export default ({store}) => {
// //   createPersistedState({
// //     key: 'PersistedData',
// //     paths: [ 'selectedProduct', 'cartItems', 'cartValues', 'cartCount','totalPrice' ]
// //   })(store)
// // }

// // const plugins = [restoreState, createPersistedState(store)];

// // export default plugins;

// createPersistedState({
//   key: 'cookie-name',
//   paths: [ 'selectedProduct', 'cartItems', 'cartValues', 'cartCount','totalPrice' ],
//   storage: {
//     getItem: (key) =>
//       process.client
//         ? Cookies.getJSON(key)
//         : cookie.parse(req.headers.cookie || '')[key],
//     setItem: (key, value) => {
//       if (key !== '@@') {
//         process.client
//           ? Cookies.set(key, value, { expires: 365, secure: !isDev })
//           : res.setHeader(
//               'Set-Cookie',
//               cookie.serialize(key, value, { maxAge: 365, secure: !isDev })
//             )
//       }
//     },
//     removeItem: (key) => Cookies.remove(key)
//   }
// })(store)

import VuexPersistence from 'vuex-persist'
 
export default ({ store }) => {
  new VuexPersistence({
    key: 'vuex', 
    storage: window.localStorage
  }).plugin(store);
}