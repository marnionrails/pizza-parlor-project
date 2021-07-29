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

Pizza.prototype.totalCost = function(size) {
  let numOfToppings = this.toppings.length;
  this.price = pizza.baseCost(size) + (.5 * numOfToppings);
}


$(document).ready(function() { 
  $("#pizza").submit(function(event) {
    let pizza = new Pizza();
    event.preventDefault(); 
    let customer = $("input[name='name']:text").val();
    let size_choice = $("input[name='size']:checked").val();
    $.each($("input[name='topping']:checked"), function(){
      pizza.addToppings($(this).val());
    });
    pizza.totalCost(size_choice);
    $(".customer").append(customer);
    $(".show_size").append(size_choice);
    $(".show_total").append(pizza.price);
    $("#pizza").hide();
    $("#output").show();
    $("#refresh").show();
  });
  $("#reorder").click(function() {
    window.location='/index.html';
  });
});
