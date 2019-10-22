let streetNumber = ['12','27','99', '181', '16', '23'] ;
let streetName= ['King Abdulaziz Street', 'Makkah Street', 'King Fahad Street','Red Sea Street'];
let city=['Riyadh','Jeddah','Makkah', 'Khobar', 'Buraidah'];
let zipCode=['12395', '22039' ,'77823', '44302', '92109','91210'];

 let streetNumRandmoizer=   Math.floor(Math.random()*streetNumber.length)
 let streetNameRandmoizer=   Math.floor(Math.random()*streetName.length)
 let cityRandomizer=   Math.floor(Math.random()*city.length)
 let zipCodeRandomizer = Math.floor(Math.random()*zipCode.length)


 console.log(streetNumber[streetNumRandmoizer] +" "+ streetName[streetNameRandmoizer] + '   ,'  +city[cityRandomizer] + " , Saudi Arabia, "+ zipCode[zipCodeRandomizer]+ " .")