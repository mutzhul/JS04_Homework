let firstPart = ' bottles of beer on the wall, '
let secondPart= ' bottles of beer. '
let thirdPart= ' Take one down and pass it around, '
let fourthPart = ' bottles of beer on the wall. ' 

let j =99
for(let i= j; i>=0 ; i--){
         
       if(i==0){
           console.log('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall. ')
       break;}
       if(i==1){
       fourthPart='no more bottles of beer on the wall.'
       console.log(i+firstPart+i+secondPart+'\n'+thirdPart+fourthPart);
       continue;}
     console.log(i+firstPart+i+secondPart+'\n'+thirdPart+(i-1)+fourthPart);
    }
    