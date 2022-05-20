// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);

//     }

//     return gifts;
// }

// wrapGifts(gifts);


const messages = []
function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
    let msg = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
    messages.push(msg);
}
    return messages;
}

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i = 0; // the initialization moves OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }

// wrapGifts(gifts);
// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"]

// function plantGarden() {
//     let keepWorking = true;
//     while (keepWorking) {
//       chooseSeedLocation();
//       plantSeed();
//       waterSeed();
//       keepWorking = checkForMoreSeeds();
//     }
//   }


function countDown() {
    let n = 10
    while (n > -1) {
        console.log(n);
        n--
    }
}

// while needs iteration inside loop and initialization is outside always
