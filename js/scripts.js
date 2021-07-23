function Pizza() {
  this.toppings = [];
  this.size = "";
  this.price = 0;
}

Pizza.prototype.addToppings = function(topping) { 
  this.toppings.push(topping);
}

Pizza.prototype.baseCost = function(size) {
  this.size = size;
  if (this.size === "8-inch") {
      this.price = 6;
  } else if (this.size === "12-inch") {
      this.price = 8;
  } else {
    alert("Opps! Something went wrong!");
  }
  return this.price;
};