'use strict';

// Array contains student's records Like Id, Name, Obtained marks, Total Marks, status pass || fails how Top three achievers (status must be pass)Show 3 lowest marks achievers (status must fail), Show all students with status pass excluding the fail and top achievers.
/////////////////////////////////////////

const stdArr=[
    {   
        stdId:1,
        stdName:'Ali',
        marksObtain:800,
        marksTotal:1000,
        stdStatus:'PASS'

    },
    {   
        stdId:2,
        stdName:'ahmed',
        marksObtain:356,
        marksTotal:1000,
        stdStatus:'FAIL'

    },
    {   
        stdId:3,
        stdName:'khan baba',
        marksObtain:982,
        marksTotal:1000,
        stdStatus:'PASS'

    },
   
    {   
        stdId:4,
        stdName:'usama',
        marksObtain:620,
        marksTotal:1000,
        stdStatus:'PASS'

    },
    {   
        stdId:5,
        stdName:'Ali usama',
        marksObtain:300,
        marksTotal:1000,
        stdStatus:'PASS'

    },
    {   
        stdId:6,
        stdName:'asjad',
        marksObtain:450,
        marksTotal:1000,
        stdStatus:'FAIL'

    },
    {   
        stdId:7,
        stdName:'Faiq',
        marksObtain:990,
        marksTotal:1000,
        stdStatus:'FAIL'

    },
    {   
        stdId:8,
        stdName:'Faiq khan',
        marksObtain:989,
        marksTotal:1000,
        stdStatus:'PASS'

    },
   
]

////////////////////////////input data//////////////////
const studentId=document.getElementById("stdId");
const studentName=document.getElementById("stdName");
const studentObtainedmarks=document.getElementById("marksObtain");
const studentTotalMarks=document.getElementById("totalMarks");
const stdStatus=document.querySelector(".radio-input");
let genderinfo;
function genderselect(){
    if(document.getElementById('pass').checked) { 
        genderinfo = document.getElementById("pass").value ;
           
    } 
    else if(document.getElementById('fail').checked) { 
        genderinfo = document.getElementById("fail").value ;
        
    } 
    else{
        document.getElementById("select-radio").innerHTML="Plese Select Male Or Female";
    }
 
}

function loadData(){
   
   let obj={ }
   const s_marks=Number(studentObtainedmarks.value);
   const s_id=Number(studentId.value);
   if(s_marks<=1000){
        obj={
           stdId:s_id,
           stdName:studentName.value,
           marksObtain:s_marks,
           marksTotal:1000,
           stdStatus:genderinfo
       }
   }


    
    stdArr.push(obj);
  




    ////////////////////////////////take form here//////







    
}


///////////////////////End of input data//////////////

function loadOther(){


/////////////////////check the max number//////////
let max=stdArr[0].marksObtain;
let maxIndex=0;
let topThreePass=[];
let topThreeFail=[];
let passArrMarksObtain=[];
let failArrMarksObtain=[];
let passDataWithoutFail=[];
let failDataWithPass=[];
let maxArr=[];
let j=0;
let k=0;
let l=0;
let m=0;
stdArr.sort((a, b) => b.marksObtain -a.marksObtain  );
passArrMarksObtain.sort((a, b) => b.marksObtain -a.marksObtain  );
for(let i=0;i<stdArr.length;i++){
    
   
    if(stdArr[i].marksObtain >= 500 ){
  
        passArrMarksObtain[j]=stdArr[i] ;
        j++;
    }
    else if(stdArr[i].marksObtain < 500  ){
      
        failArrMarksObtain[k]=stdArr[i] ;
       k++;
    }
    if(stdArr[i].stdStatus === 'PASS'){
        maxArr.push(stdArr[i]);
    }
   
}


for(let i=0;i<passArrMarksObtain.length;i++){

   
    if(passArrMarksObtain[i].stdStatus === 'PASS'){
        passDataWithoutFail.push(passArrMarksObtain[i]) ;
        l++;
    }  
}
for(let i=0;i<failArrMarksObtain.length;i++){

    if(failArrMarksObtain[i].stdStatus === 'FAIL'){
        failDataWithPass.push(failArrMarksObtain[i]) ;
        m++;
    }
}


// for(let i=0;i<stdArr.length;i++){
//     if(stdArr[i].marksObtain >= max && stdArr[i].stdStatus==='PASS' ){
//         max=stdArr[i].marksObtain;
//         maxArr[l]=stdArr[i];
//         l++
//     }
 
// }



///////////////sort the array///////////

failDataWithPass.sort((a, b) =>  a.marksObtain -b.marksObtain );

//////////////////end array sort/ //////////////////////
///////////////////////////first three///////////

if(passDataWithoutFail.length <3){
    for(let i=0;i<passDataWithoutFail.length;i++){
        topThreePass[i]=passDataWithoutFail[i];

    }
}
else{
    for(let i=0;i<3;i++){
        topThreePass[i]=passDataWithoutFail[i];
    }
}

if(failDataWithPass.length <3){
    for(let i=0;i<failDataWithPass.length;i++){
        topThreeFail[i]=failDataWithPass[i];
        console.log("1 is wrining")
    }
}
else{
    for(let i=0;i<3;i++){
        topThreeFail[i]=failDataWithPass[i];
        console.log("2 is wrining")
    } 
}
console.log(failDataWithPass.length);
console.log(topThreeFail);
console.log(failDataWithPass);




// for(let i=0;i<3;i++){
   
//     document.getElementById("passthree").innerHTML=Object.values(topThreePass [1]).join (" ");
//     console.log(topThreePass [i])
// }
// let a;

// if(maxArr.length >0){
// a=document.getElementById("first-position").innerHTML=maxArr.map((e)=>{
//     return [e.stdId,e.stdName,e.marksObtain,e.marksTotal,e.stdStatus].join(" ") ;
   
// }
// )}
// else{
//      a=document.getElementById("first-position").innerHTML=
//     Object.values(stdArr [maxIndex]); 
// }



// document.getElementById("first-position").innerHTML=maxArr.map(function(val, i){
//     return(
//        ` <table style="width:100%">

//        <tr >
//     <td style="width:10%; border:1px solid black;">${val.stdId}</td>
//     <td style="width:30%; border:1px solid black;">${val.stdName}</td>
//     <td style="width:20%; border:1px solid black;">${val.marksObtain}</td>
//     <td style="width:20%; border:1px solid black;">${val.marksTotal}</td>
//     <td style="width:20%; border:1px solid black;">${val.stdStatus}</td>
   
//   </tr>
 
//        </table>`
//     )
// }).join(' ');











// const topper=document.getElementById("first-position");
// let html = `

// <table style="width:100%">
{/* <tr style=" border:1px solid black;">
<th style="width:5%; border:1px solid black;">ID</th>
<th style="width:10%; border:1px solid black;">Name</th>
<th style="width:5%; border:1px solid black;">Marks Obtain</th>
<th style="width:5%; border:1px solid black;">Total Marks</th>
<th style="width:5%; border:1px solid black;">Status</th>
</tr> */}
//   <tr style=" border:1px solid black;">
//     <td style="width:5%; border:1px solid black;">${stdArr[maxIndex].stdId}</td>
//     <td style="width:10%; border:1px solid black;">${stdArr[maxIndex].stdName}</td>
//     <td style="width:5%; border:1px solid black;">${stdArr[maxIndex].marksObtain}</td>
//     <td style="width:5%; border:1px solid black;">${stdArr[maxIndex].marksTotal}</td>
//     <td style="width:5%; border:1px solid black;">${stdArr[maxIndex].stdStatus}</td>
   
//   </tr>
// </table>`;
// topper.insertAdjacentHTML("afterend", html);


document.getElementById("passthree").innerHTML=topThreePass.map(function(val, i){
    return(
       ` <table style="width:100%">

       <tr >
    <td style="width:10%; border:1px solid black;">${val.stdId}</td>
    <td style="width:30%; border:1px solid black;">${val.stdName}</td>
    <td style="width:20%; border:1px solid black;">${val.marksObtain}</td>
    <td style="width:20%; border:1px solid black;">${val.marksTotal}</td>
    <td style="width:20%; border:1px solid black;">${val.stdStatus}</td>
   
  </tr>
 
       </table>`
    )
}).join(' ');



document.getElementById("failthree").innerHTML=topThreeFail.map(function(val, i){
    return(
       ` 
       <table style="width:100%">

       <tr >
    <td style="width:10%; border:1px solid black;">${val.stdId}</td>
    <td style="width:30%; border:1px solid black;">${val.stdName}</td>
    <td style="width:20%; border:1px solid black;">${val.marksObtain}</td>
    <td style="width:20%; border:1px solid black;">${val.marksTotal}</td>
    <td style="width:20%; border:1px solid black;">${val.stdStatus}</td>
   
  </tr>
 
       </table>`
    )
}).join(' ');
// document.getElementById("displayall").innerHTML=passArrMarksObtain.map((e)=>{
//     return [e.stdId,e.stdName,e.marksObtain,e.marksTotal,e.stdStatus].join(" ") ;
   
// }
// );maxArr

const check= Array.from(new Set(passArrMarksObtain.concat(maxArr)));
const namesArr = check;
const namesToDeleteArr = topThreePass;
const namesToDeleteSet = new Set(namesToDeleteArr);
const newArr = namesArr.filter((name) => {
  return !namesToDeleteSet.has(name);
});

document.getElementById("displayall").innerHTML=newArr.map(function(val, i){
    return(
       ` <table style="width:100%">
       <tr >
    <td style="width:10%; border:1px solid black;">${val.stdId}</td>
    <td style="width:30%; border:1px solid black;">${val.stdName}</td>
    <td style="width:20%; border:1px solid black;">${val.marksObtain}</td>
    <td style="width:20%; border:1px solid black;">${val.marksTotal}</td>
    <td style="width:20%; border:1px solid black;">${val.stdStatus}</td>
   
  </tr>
 
       </table>`
    )
}).join(' ');
const namesArr1 = maxArr;
const namesToDeleteArr1 = topThreePass;
const namesToDeleteSet1 = new Set(namesToDeleteArr1);
const newArr1 = namesArr1.filter((name) => {
  return !namesToDeleteSet1.has(name);
});
document.getElementById("displayallpass").innerHTML=newArr1.map(function(val, i){
    return(
       ` <table style="width:100%">

       <tr >
    <td style="width:10%; border:1px solid black;">${val.stdId}</td>
    <td style="width:30%; border:1px solid black;">${val.stdName}</td>
    <td style="width:20%; border:1px solid black;">${val.marksObtain}</td>
    <td style="width:20%; border:1px solid black;">${val.marksTotal}</td>
    <td style="width:20%; border:1px solid black;">${val.stdStatus}</td>
   
  </tr>
 
       </table>`
    )
}).join(' ');







/////////////////console/////////////////////
// console.log("Topper");
// console.log(maxArr);
// console.log("Top 3 ");
// console.log(topThreePass);
// console.log("Top 3 from Last ");
// console.log(topThreeFail);
// console.log("Pass the Exam ");
// console.log(passArrMarksObtain);







// const topper = document.getElementById("topper-table");
//     let html = `<h2>Topper student</h2>

//     <table style="width:100%">
//       <tr>
//         <td>${stdArr[maxIndex].stdId}</td>
//         <td>${stdArr[maxIndex].stdName}</td>
//         <td>${stdArr[maxIndex].stdStatus}</td>
//       </tr>
//     </table>`;
   
//     topper.insertAdjacentHTML("afterend", html);







}


