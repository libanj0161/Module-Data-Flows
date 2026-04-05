let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function printReceipt(order) {
  let total = 0;

  console.log("QTY     ITEM                TOTAL");

  for (let i = 0; i < order.length; i++) {
    const item = order[i];
    const itemName = item.itemName;
    const quantity = item.quantity;
    const unitPricePence = item.unitPricePence;

    const itemTotal = quantity * unitPricePence;
    total += itemTotal;

    const paddedItem = itemName.padEnd(20, " ");
    console.log(
      quantity + "       " + paddedItem + (itemTotal / 100).toFixed(2)
    );
  }

  console.log("\nTotal: " + (total / 100).toFixed(2));
}

printReceipt(order);
