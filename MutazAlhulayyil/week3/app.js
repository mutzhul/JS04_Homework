/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here

//Grocery Items List 

let groceryList = {

vegetables : ["potatoes","parsley","beans"],

fruits : ["apples","oranges","strawberry"],

grocer : ["Walmart", "Target"]

}


console.log(groceryList.fruits)


// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

  // Answer Starts Here
  
  let pet_owner = {
    name: {firstname: ["John","Sam","Yan","Steve"], lastname:["Sari","Larry","Jason","Nam"]},
    address: { stNumber:[12,14,2,4,5,67,8,91,12], stName:["Alhilal St", "Urubah St","Sulimaniah St"], district:["Nakheel","Hitten","Swaidi"],city: ["Riyadh","Jeddah"]},

}

console.log(pet_owner.address)

  // Answer Ends Here
  
  // 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.
  
    // Pet
    // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
    // Every 'pet' has:
    // - a name
    // - a species
    // - a breed
    // - a noise that it can make (e.g. 'bark', 'meow', etc.)
    // Every pet can:
    // - make noise (each pet makes its own unique noise, as specified by `noise`.
  

  
  
  // Answer Starts Here
  

  let somePet = {
    name: ["Kitty","Smarty","Paul"],
    species: ["Cat","Dog","Hummingbird"],
    breed: ["Siamese","Laperdoodle","islandic"]
    noise: ["Mewo","Bark","chipper"]
    }
}

console.log(somePet)



  // Answer Ends Here
