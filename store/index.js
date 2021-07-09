export const state = () => ({
    cartCount: 0,
    cartValues: {}
  })
  
  export const mutations = {
    addToCart(state) {
        state.cartCount++;
        console.log(state.cartValues)
    },
    removeFromCart(state) {
        state.cartCount--;
    }
  }