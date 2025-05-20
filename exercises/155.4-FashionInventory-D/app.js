let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function getLaceNameDataForShoes(inventory) {
    // your code here
    let result = [];
  for (let i = 0; i < inventory.length; i++) {
    let designer = inventory[i];
    for (let j = 0; j < designer.shoes.length; j++) {
      let shoe = designer.shoes[j];
      if (shoe.name.includes("lace")) {
        let ind= 0;
        let wor=shoe.name.split(" ");
        for (let k = 0; k < wor.length; k++) {
          if(wor[k].includes("lace")) ind=k;
        }
        result.push({nameWords : shoe.name.split(" "), targetWordIndex:ind});
      }
    }
  }
  return result;
}

console.log(getLaceNameDataForShoes(currentInventory));
