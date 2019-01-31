let cart = [];

export default {
  getCart() {
    console.log("getting");
    return cart;
  },

  addToCart(item) {
    cart.push(item);
    return cart;
    // return { msg: "Item added successfully", bool: true };
  },

  deleteCart(id) {
    console.log("deleting");
    cart = cart.filter(item => item.id !== id);
    return cart;
  }
};
