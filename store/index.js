export const state = () => ({
  shoppingCart: [],
  shoppingCartVisible: false,
});

// Normal functions
export const mutations = {
  initStore(state) {
    if (process.browser && localStorage.getItem('shoppingCart')) {
      state.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
  },

  addToShoppingCart(state, payload) {
    for (let i = 0; i < state.shoppingCart.length; i++) {
      if (state.shoppingCart[i].productId === payload.productId && state.shoppingCart[i].sizeId === payload.sizeId) {
        state.shoppingCart[i].amount += parseInt(payload.amount);

        return this.commit('updateLocalStorage');
      }
    }
    state.shoppingCart.push(payload);

    this.commit('updateLocalStorage');
  },

  clearShoppingCart(state) {
    state.shoppingCart = [];

    this.commit('updateLocalStorage');
  },

  setShoppingCartVisible(state) {
    state.shoppingCartVisible = !state.shoppingCartVisible;
  },

  changeProductAmount(state, payload) {
    let index = state.shoppingCart.findIndex((p) => p.productId === payload.productId && p.sizeId === payload.sizeId);

    if (payload.e === 'increment') {
      state.shoppingCart[index].amount++;
    } else {
      if (state.shoppingCart[index].amount > 1) {
        state.shoppingCart[index].amount--;
      }
    }

    this.commit('updateLocalStorage');
  },
  removeProduct(state, payload) {
    let index = state.shoppingCart.findIndex((p) => p.productId === payload.productId && p.sizeId === payload.sizeId);
    state.shoppingCart.splice(index, 1);

    this.commit('updateLocalStorage');
  },

  updateLocalStorage(state) {
    console.log(state, 'updateLocalstorage');
    const jsonShoppingCart = JSON.stringify(state.shoppingCart);

    localStorage.setItem('shoppingCart', jsonShoppingCart);
  },
};

// Async function
export const actions = {};

export const getters = {
  getShoppingCart: (state) => state.shoppingCart,
  getShoppingCartVisible: (state) => state.shoppingCartVisible,
  getTotalPrice: (state) => {
    let total = 0;
    state.shoppingCart.forEach((product) => {
      total += product.amount * product.price;
    });
    return total;
  },
};
