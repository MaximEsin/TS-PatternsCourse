abstract class DeliveryItem {
  items: DeliveryItem[] = [];

  addItem(item: DeliveryItem) {
    this.items.push(item);
  }

  getItemPrices(): number {
    return this.items.reduce(
      (acc: number, item: DeliveryItem) => (acc += item.getPrice()),
      0
    );
  }

  abstract getPrice(): number;
}

class DeliveryShop extends DeliveryItem {
  constructor(public deliveryFee: number) {
    super();
  }

  getPrice(): number {
    return this.getItemPrices() + this.deliveryFee;
  }
}

class Package extends DeliveryItem {
  getPrice(): number {
    return this.getItemPrices();
  }
}

// class Product extends DeliveryItem {
//   constructor(public price: number) {
//     super();
//   }

//   getPrice(): number {
//     return this.price;
//   }
// }
