# Marni's Pizza Parlor
Pizza Parlor project for Epicodus, demonstrating usage of constructors and prototypes

By Marni Sucher

## Technologies Used
* HTML/CSS
* Markdown
* JavaScript
* jQuery
* VS Code
* Bootstrap

## Description

This webpage allows users to order pizza from Marni's pizza parlor, selecting size of the pie and toppings. The cost of their order will be determined by the size and number of toppings. 

# Specs
Test 1: Describe(Pizza.baseCost(size)) Test: "It will determine the price of a pizza based on size of 8-inch."
Expect(pizza.cost("8-inch").toEqual(6));

Test 2: Describe(Pizza.baseCost(size)) Test: "It will determine the price of a pizza based on size of 12-inch."
Expect(pizza.cost("12-inch").toEqual(8));

Test 3: Describe(Pizza.addToppings(topping)) Test: "It will add a topping to the empty toppings array."
Expect(pizza.addToppings("cheese").toEqual([cheese]))

Test 4: Describe(Pizza.totalCost()) Test: "It will determine the priec of a pizza based on size and number of toppings." Set pizza.toppings = ["cheese", "pepperoni"];
Expect(pizza.totalCost("8-inch").toEqual(7));

## Setup/Installation Requirements
* Clone repository: https://github.com/marnionrails/pizza-parlor-project
* Go to pizza-parlor-project folder
* Open index.html in any web browser

## Known Bugs
* None at this time

## License
GPL Copyright 2021 Marni Sucher

## Contact Information
Marni Sucher: <suchermarni@gmail.com>
