export const state = () => ({
  shoppingCart: [],
  shoppingCartVisible: false,
});

export const mutations = {
  initStore(state) {
    // Get the shopping cart from localStorage
    if (process.browser && localStorage.getItem('shoppingCart')) {
      state.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
  },

  addToShoppingCart(state, payload) {
    // Check if product already is in shoppingCart
    for (let i = 0; i < state.shoppingCart.length; i++) {
      if (state.shoppingCart[i].productId === payload.productId && state.shoppingCart[i].sizeId === payload.sizeId) {
        state.shoppingCart[i].amount += parseInt(payload.amount);
        return this.dispatch('updateLocalStorage');
      }
    }
    state.shoppingCart.push(payload);
    this.dispatch('updateLocalStorage');
  },

  clearShoppingCart(state) {
    state.shoppingCart = [];

    this.dispatch('updateLocalStorage');
  },

  setShoppingCartVisible(state) {
    state.shoppingCartVisible = !state.shoppingCartVisible;
  },

  changeProductAmount(state, payload) {
    // Find index of product
    let index = state.shoppingCart.findIndex((p) => p.productId === payload.productId && p.sizeId === payload.sizeId);

    if (payload.e === 'increment') {
      state.shoppingCart[index].amount++;
    } else {
      if (state.shoppingCart[index].amount > 1) {
        state.shoppingCart[index].amount--;
      }
    }

    this.dispatch('updateLocalStorage');
  },
  removeProduct(state, payload) {
    // Find index of product
    let index = state.shoppingCart.findIndex((p) => p.productId === payload.productId && p.sizeId === payload.sizeId);
    state.shoppingCart.splice(index, 1);
    this.dispatch('updateLocalStorage');
  },
};

export const actions = {
  updateLocalStorage() {
    const shoppingCart = this.getters.getShoppingCart;
    const jsonShoppingCart = JSON.stringify(shoppingCart);
    localStorage.setItem('shoppingCart', jsonShoppingCart);
  },
};

export const getters = {
  getShoppingCart: (state) => state.shoppingCart,
  getShoppingCartVisible: (state) => state.shoppingCartVisible,
  getTotalPrice: (state) => {
    let total = 0;
    // Calculate total price
    state.shoppingCart.forEach((product) => {
      total += product.amount * product.price;
    });
    return total;
  },
};
