
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion:  {
            name: "Leo",
            type: "Cat"
         
    },
    roll(mod = 0) { // Add roll method
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
};

    for (let i = 0; i < adventurer.inventory.length; i++) {
        console.log(adventurer.inventory[i]);
    }

    console.log(adventurer.inventory[0]);

    adventurer.inventory.forEach(item => console.log(item));
    // adventurer.companion = {
    //     name: "Leo",
    //     type: "Cat"
    // };

    let getAdventurer = ()=> adventurer;

console.log(getAdventurer())
adventurer.roll(); // e.g., "Robin rolled a 14."
adventurer.roll(3); // e.g., "Robin rolled a 17.

// Next, give Robin’s feline friend a friend of his own:
// Add a “companion” sub-object to “Leo” with the following properties:
// The companion’s name is “Frank.”
// The companion’s type is “Flea.”
// The companion has its own belongings, which includes a small hat and sunglasses.

// "Next, we will level up our approach using Classes.
// Part 2: Class Fantasy

