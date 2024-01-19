class Cart {
  productList: Product[] = [];
  delivery: HomeDelivery | ShopDelivery;

  addProduct(product: Product): void {
    this.productList.push(product);
  }

  removeProduct(id: number): void {
    this.productList.filter((item) => item.id !== id);
  }

  countTotalPrice() {
    return this.productList.map((item) => item.price).reduce((a, b) => a + b);
  }

  setDelivery(delivery: HomeDelivery | ShopDelivery): void {
    this.delivery = delivery;
  }

  checkout() {
    if (
      this.productList.length > 0 &&
      (this.delivery instanceof HomeDelivery ||
        this.delivery instanceof ShopDelivery)
    ) {
      return 'Order sucessfully created';
    } else {
      throw new Error('Can not create order');
    }
  }
}

class Product {
  constructor(public id: number, public name: string, public price: number) {}
}

class Delivery {
  constructor(date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(date: Date, adress: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(date: Date, shopId: number) {
    super(new Date());
  }
}

const cart = new Cart();
cart.addProduct(new Product(1, 'Bread', 80));
cart.addProduct(new Product(2, 'Sausage', 120));
cart.addProduct(new Product(3, 'Water', 100));
cart.removeProduct(3);
cart.setDelivery(new HomeDelivery(new Date(), 'Pupkina street, 22 house'));
console.log(cart.countTotalPrice());
console.log(cart.checkout());
