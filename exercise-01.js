/** @format */
/*const date = new Date();
let hour = date.getHours();
let name = "Frank";

if ((hour) => 6 && hour <= 12) {
  console.log(`Good Morning ${name}`);
} else if ((hour) => 13 && hour <= 17) {
  console.log(`Good Afternoon ${name}`);
} else {
  console.log(`Good night ${name}`);
}*/


/*const product1 = {
      name : `basketball`,
      price :` 2099`
}
product1.price = 2095 + 500

console.log(product1)
console.log(product1)*/
/*function comparePrice(product1, product2) {
        if (product1.price < product2.price) {
          return product1;
        } else {
          return product2;
        }
      }

      const product1 = {
        name: 'basketball',
        price: 2095
      };

      const product2 = {
        name: 'socks',
        price: 1090
      };

      console.log(comparePrice(product1, product2)); */

/*product1 = {name : 'shirt',
            price : '2000'};
product2 = { name : 'dress',
             price : '400'};
             
function comparePrice(product1,product2) {
  if (product1.price < product2.price) {
    return product2
  }else{
    return product1
  }
} 
console.log(comparePrice(product1,product2) ) */


let product1 = {name : 'shirt',
                price:'230'};
let product2 = {name : 'shirt',
                price:'230'};
 let pr1 = product1;
 let pr2 = product2;
 
 function isSameProduct(product1,product2) {
   if (pr1===pr2) {
    return true
   }else{
    return false
   }

 }
 console.log(isSameProduct())
