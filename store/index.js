export const state = () => ({
    cartCount: 0,
    cartValues: {},
    selectedProduct: {},
  })
  
  export const mutations = {
    addToCart(state) {
        state.cartCount++;
        console.log(state.cartValues)
    },
    removeFromCart(state) {
        state.cartCount--;
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product; 
    }
  }