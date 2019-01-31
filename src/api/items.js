let items = [
  {
    id: 1,
    title: "Pillow",
    price: 1234,
    quantity: 10,
    desc: "Soft, plump, and fluffy"
  },
  {
    id: 2,
    title: "Necklaces",
    price: 500,
    quantity: 5,
    desc: "Silver glittery"
  },
  {
    id: 3,
    title: "Bikes",
    price: 234,
    quantity: 10,
    desc: "Big, powerful and strong"
  },
  {
    id: 4,
    title: "The mailbox",
    price: 123,
    quantity: 15,
    desc: "Fast delivery of mails"
  }
];

export default {
  getItems() {
    console.log("getting");
    return items;
  },

  addToItems(item) {
    items.push(item);
    return items;
    // return { msg: "Item added successfully", bool: true };
  },

  updateItem(id, updatedItem) {
    const theItem = items.find(item => item.id == id);
    console.log(id, theItem);
    for (let property in updatedItem) {
      theItem[property] = updatedItem[property];
    }
    console.log(updatedItem);
    return { theItem, items };
  },

  deleteItem(id) {
    console.log("deleting");
    items = items.filter(item => item.id !== id);
    return items;
  },

  findItem(id) {
    console.log(1, "Finding");
    return items.find(item => item.id == id);
  }
};
