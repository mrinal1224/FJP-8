function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order for coffee Placed");
    } else {
      reject("Order cannot be placed");
    }
  });
}

function processOrder(order) {
  return new Promise(function (resolve) {
    resolve(`${order} and Served`);
  });
}

//Promisified Solution ->

placeOrder("coffee")
  .then(function (orderStatus) {
    console.log(orderStatus);
    let orderIsProcessed = processOrder(orderStatus);
    return orderIsProcessed;
  })
  .then(function (servedOrder) {
    console.log(servedOrder);
  })
  .catch(function (orderStatus) {
    console.log(orderStatus);
  });

// Async Await

async function serveOrder() {
  try {
    let orderStatus = await placeOrder("coffee");
    console.log(orderStatus); // order is placed
    let orderServed = await processOrder(orderStatus);
    console.log(orderServed);
  } catch (error) {
    console.log(error);
  }


 
}




serveOrder();





