export const state = () => ({
    cartCount: 0,
    cartValues: {},
    cartItems: [],
    selectedProduct: {},
    totalPrice: 0,
  })
  
  export const mutations = {
    addToCart( state, product ) {
      console.log(product)
      if(!state.cartValues[product.id]) {
        state.cartValues[product.id] = 1;
        state.cartCount++;
        state.cartItems.push(product);
        state.totalPrice += product.price
      }       
      
    },
    removeFromCart( state, payload ) {
      if(state.cartValues[payload.product.id]) {
        state.cartItems.splice(payload.index,1);
        delete state.cartValues[payload.product.id];
        state.cartCount--;
        state.totalPrice -= payload.product.price
      }
    },
    setSelectedProduct( state, product ) {
      state.selectedProduct = product; 
    },
    
  }