export const state = () => ({
  shoppingCart: [],
  shoppingCartVisible: false
});

// Normal functioner
export const mutations = {
  addToShoppingCart(state, payload) {
    console.log("state", state);
    console.log("payload", payload);

    for (let i = 0; i < state.shoppingCart.length; i++) {
      if (
        state.shoppingCart[i].productId === payload.productId &&
        state.shoppingCart[i].sizeId === payload.sizeId
      ) {
        state.shoppingCart[i].amount += parseInt(payload.amount);
        return;
      }
    }
    state.shoppingCart.push(payload);
  },

  clearShoppingCart(state) {
    state.shoppingCart = [];
  },

  setShoppingCartVisible(state) {
    state.shoppingCartVisible = !state.shoppingCartVisible;
  }
};

// Async function
export const actions = {};

export const getters = {
  getShoppingCart: state => state.shoppingCart,
  getShoppingCartVisible: state => state.shoppingCartVisible,
  getTotalPrice: state => {
    let total = 0;
    state.shoppingCart.forEach(product => {
      total += product.amount * product.price;
    });
    return total;
  }
};
