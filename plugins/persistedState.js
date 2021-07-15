import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'selectedProduct',
    paths: [ 'selectedProduct' ]
  })(store)
}