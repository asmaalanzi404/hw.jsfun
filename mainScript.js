/*const numbers = [2, 3, 7, 4, 9]

const evenNumbers = numbers.filter(function(currentValue, index, array) {
    return currentValue % 2 === 0
})*/

/*دالةFIND
// اي عنصر تنطبق عليهاifيرجع قيمته
اي عنصر تنطبق عليهاifيرجع قيمته
const numbers = [11, 7, 9, 15]
for(let i = 0; i <= numbers.length; i++){
    if(numbers[i]%3 === 0){
        console.log(numbers[i])
        break;
   }
}*/


//LAB TODAY W3-D3
/*//Ex1//انشاء دالة
const sum=(num1,num2)=>{
console.log(num1+num2);
}
const s2=(num3,num4)=>{
    console.log(num3-num4);
    }
    const s3=(num5,num6)=>{
        console.log(num5*num6);
        }
        const s4=(num7,num8)=>{
            console.log(num7/num8);
            }

            sum(2,4);
            s2(2,4);
            s3(3,8);
            s4(4,8);
            */
          /* //Ex2انشاء ARRAY
            const num14 = [2, 3, 7, 4, 9,10,11,12,13,14,15,16,17,18,19,20]
            const even = num14.filter(function(t) {
                return t % 2 == 0
            })
            console.log(even);
             //filterدالة 
            const num15 = [2, 3, 7, 4, 9,10,11,12,13,14,15,16,17,18,19,20]
            const even1 = num15.filter(function(d) {
                return d % 2 != 0
            })
            console.log(even1);
            
            const num1 = [2, 3, 7, 4, 9,10]
            //دالة FIND
            const even4 = num1.find(function(y) {
                return y % 2 == 0
            })
            console.log(even4);
//دالة forEach
const num1 = [3, 4, 5]
const even4 = num1.(function(y) {
    return y % 2 == 0
})
console.log(even4);*/

characters = [
    {
      name: "Luke Skywalker",
      height: 1.77,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 1.6,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 1.8,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 2.22,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 1.06,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];




//Ex1 find
let f =characters.find(function(y){
    return y.eye_color === "blue"
    })
    
    let fg =characters.find(function(r){
        return r.mass > 50;
        })
        console.log(f.name,fg.gender);





//Ex2 filter
let evenNumbers =characters.filter(function(currentValue) {
   return currentValue.gender=== "male";

})
console.log(evenNumbers);


let eve =characters.filter(function(currentValue1) {
    return currentValue1.height<200;

})
console.log(eve);






//Ex3 Map
let eve1 =characters.map(function(currentValue2) {
    return currentValue2.name
})
console.log(eve1);

let eve5 =characters.map(function(currentValue2) {
    return currentValue2.height
})
console.log(eve5);






//Ex4 every
let eve6 =characters.every(function(currentValue2) {
    return currentValue2.mass>40;
})
console.log(eve6);

let eve7 =characters.every(function(currentValue2) {
    return currentValue2.height < 200;
})
console.log(eve7);





//Ex5 some
let evesome =characters.some(function(currentValue2) {
    return currentValue2.eye_color === "blue";
})
console.log(evesome);
let evesome1 =characters.some(function(currentValue2) {
    return currentValue2.height > 210;
})
console.log(evesome1);


//Ex6 Sort
let evesort =characters.sort(function(a,b) {
    return b.mass-a.mass;
})
console.log(evesort);

let evesort1 =characters.sort(function(a,b) {
    return a.mass-b.mass;
})
console.log(evesort1);


