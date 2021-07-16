import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'PersistedData',
    paths: [ 'selectedProduct', 'cartItems', 'cartValues', 'cartCount','totalPrice' ]
  })(store)
}