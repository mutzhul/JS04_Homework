/*Work with a partner to create a monkey object, which has the following properties:
* name
* species
* foodsEaten
And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/


 let monkeyBusiness = {

    name: ["Trello","Sunshine","Macy"],
    species: ["Macaque","Baboon","Tamarin"],
    foodsEaten: ["Banana","apple","Carrot"],
    eatSomething : function() { 
        
        for (let i = 0; i < monkeyBusiness.name.length ;i++){


        console.log("I am" + monkeyBusiness.name[i] + " and my Species is "+ monkeyBusiness.species[i] + " and I have eaten" + monkeyBusiness.foodsEaten[i]);
      }
    }

  
     
 }

 console.log(monkeyBusiness.eatSomething(monkeyBusiness.name));


