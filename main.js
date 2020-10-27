//  Variabels & Operators
 
 // **Exercise 1 **

// const  maxCapacity = 14

// let surfTime = true

// let bestStudent 

// const purposeInLife 

// console.log(purposeInLife)
//  console.log(purposeInLife)

//**Exercise 2**

 
 //const str = "banana "
//let result = str +"is the best thing ever"
//console.log(result)

 //let myString = "banana" + " is the best thing"

//console.log(myString)

//**Exercise 3**


// password = "a1b2c3"

// confirmPassword = "a1b2c3"

// console.log(password == confirmPassword)
// console.log(password !== confirmPassword)
// console.log(password !=confirmPassword)

// **Exercise 4** 

// console.log(423 *2)
// console.log(802 / 2)
// console.log((5+6) * 3)

// **Exercise 6**

// let a = 3
// a = 4
// let c = 0
// let b = a
// b = 2
// a = b
// b = c
// c = a
// a = b

// result a ==0 b == 0 c ==2 

//  let enoughMoneyInBank = prompt ("how much money do you have in bank")
 

//  if (enoughMoneyInBank>100){
//      console.log("buy gift") 
//  }
//  else {
//     let hasJob = prompt ("do you have a jobe? ")

//     if(hasJob == "yes") {
//          console.log("go to work ")
//      }
//       else {
//         console.log("go find a job")
//     }
     
//  }

//  **Conditional Statements**

// **Exercise 1**

//  let numChildren = 0

//  let isCareful = true

// if (!isCareful) {
//     numChildren++
// }

// console.log(numChildren)

// **Exercise 2**

// silverWaterCount = 7

// if (!(silverWaterCount % 2 == 0)){
//     console.log("there is something wrong")
// }

// **Exercise 3**

// let performance = "stellar"
// let salary = 10000
// const goodBonus = 1000
// const stellarBonus = 3000

// option1 //

// if (performance == "stellar"){
//     salary+= stellarBonus 
//     console.log( "your salary  after the bouns will be "+salary)  
// }
// else if (performance == "good"){
//     salary+= goodBonus
//     console.log("your salary after the bouns will be "+ salary)
// }

//option2 //

// let newSalary = (performance == "stellar") ? salary +stellarBonus : salary +goodBonus;


// console.log("your salary after te bouns will be "+newSalary)



// **Exercise 4**

// const isVIP = false
// let cash = 300

// if (isVIP || cash > 300){
//     console.log("welcome sir , we are glad to have you ")
// }
// else {
//     console.log("go home its a closed party")
// }
// option 2 //

// let enterClub = (isVIP || cash > 300 ) ? "welcome sir , we are glad to have you" : "go home its a closed party" ;
// console.log(enterClub)

// **Exercise 5**

// const a = 3
// let b = 2
//let c = 0 || 12
// let d

// b = c
// b++
// if(d){
//   b = a
// }

// d = a + (b * c)
// d++
// b += 2

// // answer :a == 3 , b==15 , c==12, d==160

// **Exercise 6**

// let profession = "business"

// let gender = prompt ("what is your gender ? ") // const gender = null 

// if (gender =="male"){
//     console.log(profession + "man")
// }else if (gender =="female"){
//     console.log(profession + "woman")
    
// }else{
//     console.log(profession+"person")
// }

//**Exercise 7**

// let boughtTesla = false
// const yearOfTeslaPurchase = 2014
// let isUSCitizen = true
// let currentYear = 2018


// if (boughtTesla && isUSCitizen){
//     if ((currentYear - yearOfTeslaPurchase) >= 4 ){
//         console.log("would you like an upgrade ?")
//      } else{
    //          console.log("are you satisfied with your car?")
    //         }
    // }else if (boughtTesla){
        //     console.log("would you like to move to the us?")
        // }else {
            //     console.log("are you inerested in buying a tesla? ")
            // }
            
            
 // ******Arrays ***********
            
//push ///unshift // splice // Exercise

//  const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

//   let genesNew =[]

//    genesNew.push(...genes)

// genesNew[2]= genes[4] 
// genesNew[4]= genes[2]

// genesNew.splice(3,1)
// genesNew.push("AZIN2","AZIN2")

// genesNew.unshift("FXT")

//**** Objects******

//spot check1 //

// const car = {
//     color: "black",
//     numWheels: 4,
//     isFancy: false
//   }
//         if (car.isFancy){
//            console.log("the "+car.color +" car has "+car.numWheels+" wheels ,it is fancy")
//        }else {
//         console.log("the "+car.color +" car has "+car.numWheels+" wheels ,it is not fancy")
//        }
 
//spot check2 ///

// obj = {
//     item : "key",
//     toBeginning :false ,
//     items: ["bottle","fhone", "bag"]   
// }

  
//   if (obj["toBeginnig"]){
//     obj["items"].unshift(obj.item)

//   }else {
//       obj.items.push(obj.item)
//   }

// console.log(obj.items)

// spot check 3//

//*** Objects****/

// Exercise1 

// let p1 = {
//     name:"Robert" ,
//     age : 25,
//     city : "Nyc"
// }
// let p2 ={
//   name :"Jill",
//   age : 25,
//   city: "Florida"
// }

// if (p1.age ==p2.age){
//   if (p1.city==p2.city){
//     console.log("Jill wanted to date Robert")
//   }else{
//     console.log("Jill wanted to date Robert , but couldn't")
//   }
// }

// Exercise 2 

// let myList =[
//     {item: "pen", count:2},
//     {item:"bottle",count :3}
// ]

// myList[0].item = "marker"
//  myList.splice(1)

//  console.log(myList)

// // //Exercise 3 

// let  myList2 =[
//     {item:"glass", count: 2},
//     {item:"charger",count: 1}
// ]

// myList.unshift(...myList2)

// console.log(myList)

//Exercise 4 

// let library ={
//   books:[
//     {title:"the little prince",author :"Antoine de Saint"},
//     {title:"lion king",author:"Justine Korman "}
//   ]
// }

// myList.push(...library.books)

// console.log(myList)

//Exercise 5 
 
// const reservations = {
//   Bob: { claimed: false },
//   Ted: { claimed: true }
// }

//  let name = prompt('Please enter the name for your reservation');
//  let lowerCaseName = name.toLowerCase() 

 
// if (lowerCaseName =="bob" ){
//     if (!reservations.Bob.claimed){
//           console.log("welcome "+lowerCaseName)
//     }else {
//          console.log("Hmm, someone claimed this reservation already")
//   }  }
// else if (lowerCaseName =="ted"){
//         if (!reservations.Ted.claimed){
//           console.log("welcome "+lowerCaseName)
//         }else {
//             console.log("Hmm, someone claimed this reservation already")
//           }
// } 
// else {
//        console.log("You have no reservation")
       
//          reservations[lowerCaseName] = {claimed: true}
//      }
//   ``
//      console.log(reservations)



 