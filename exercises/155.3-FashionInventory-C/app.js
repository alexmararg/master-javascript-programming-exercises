let currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

function renderInventory(shoeList) {
    // your code here
  let result = [];
  for (let i = 0; i < shoeList.length; i++) {
    let designer = shoeList[i];
    for (let j = 0; j < designer.shoes.length; j++) {
      let shoe = designer.shoes[j];
      if (shoe.name.includes("black")) {
      result.push([designer.name, shoe.name, shoe.price]);
      }
    }
  }
  return result;
}

console.log(renderInventory(currentInventory));
