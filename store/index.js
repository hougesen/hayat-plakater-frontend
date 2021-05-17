export const state = () => ({
  shoppingCart: [],
  shoppingCartVisible: false
});

// Normal functions
export const mutations = {
  addToShoppingCart(state, payload) {
    console.log('state', state);
    console.log('payload', payload);

    for (let i = 0; i < state.shoppingCart.length; i++) {
      if (state.shoppingCart[i].productId === payload.productId && state.shoppingCart[i].sizeId === payload.sizeId) {
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
  },
  changeProductAmount(state, payload) {
    let index = state.shoppingCart.findIndex(p => p.productId === payload.productId);

    console.log(index);

    if (payload.e === 'increment') {
      state.shoppingCart[index].amount++;
    } else {
      if (state.shoppingCart[index].amount > 1) {
        state.shoppingCart[index].amount--;
      }
    }
  },
  removeProduct(state, payload) {
    let index = state.shoppingCart.findIndex(p => p.productId === payload.productId);

    state.shoppingCart.splice(index, 1);
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
