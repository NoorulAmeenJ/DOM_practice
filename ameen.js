// //   day-1
// let a = document.createElement("h1");
// a.innerText='hi i am noorul';
// a.style.border='1px solid red';
// a.style.color='violet';
// a.style.backgroundColor='pink';
// a.setAttribute("class","cla")

// var b= document.getElementById("noorula");
// b.innerText="sanjay";
// var c= document.querySelector('#ameen');
// c.innerText="yadav";
// var d= document.querySelector('.noorul');
// d.innerText="gowda";

// // day-2
// var e= document.querySelector("#text");
// // it will give without unwanted gap
// console.log(e.innerText);

// var f= document.querySelector("#contant");

// // it will give without unwanted gap
// console.log(f.textContent);
// var g= document.querySelectorAll(".as")
// // in video 1.11.14 ,
// for(var i=0; i<g.length; i++)
//    console.log(g[i].style.color="blue")




// document.body.append(a);
// // append and apppendChild both r same , but in append child , v cant add direct string
// console.log(document);

// // console.log(window)
// // day-

let z=document.createElement("div");

document.body.append (z);
for(var i=0; i<5; i++){
    var zx= document.createElement('p');
      zx.setAttribute("class","noorul")
      zx.textContent='no'
    z.append(zx);
    
}

console.log(document);

function noorul() {
  console.log("ameen")
  // alert("samantha")
}

function mumtaj() {
 
  console.log("mumtaj")

  // alert("samantha")
}

// var count=0 
// var neww = document.createElement("div");
// document.body.append(neww)
// neww.textContent="count";

// setTimeout(mumtaj,2000);
// -------------------------------------------
var noo= document.createElement("div");
document.body.append(noo);
var count=7
noo.textContent=count;
function jabar(){

   count--
   noo.textContent=count;
 var mudu = setTimeout(jabar,2000)
    if(count==5)
    {
       noo.textContent="again 5 seconds is there"
    }
    if(count==3)
    {
      clearTimeout(mudu);
      noo.textContent="hope u enjoyed nayan like this"
    }
}
// ---------------------------------------------
var asna= document.createElement("button");
document.body.append(asna);
var count=7
asna.textContent= "onchange the dropdown";
function sana(){

   count--
   asna.textContent=count;
 var mudu = setTimeout(sana,2000)
    if(count==5)
    {
      asna.textContent="again 5 seconds is there"
    }
    if(count==3)
    {
      clearTimeout(mudu);
      asna.textContent="hope u enjoyed nayan like this"
    }
}
// ----------------------------------
// day-3
let vijay = document.createElement('div');
document.body.append(vijay);
vijay.textContent="innerWIDTH"
window.addEventListener("resize",(e)=>{
      vijay.textContent=`laptop width is ${window.innerWidth} laptop heigth is ${window.innerHeight}`
      if(window.innerWidth > 300 ){
        document.body.style.backgroundColor='blue'
      }
      else{
        document.body.style.backgroundColor='pink'
      }
    })

    let form = document.createElement('form');


    let ajith = document.createElement('button');
    ajith.setAttribute('type', 'sumbit');
    form.setAttribute('id', 'form-id');
    ajith.setAttribute('id', "ajith")
    ajith.textContent="submit"
    document.body.append(form);
  form.append(ajith);

  let ajithi = document.getElementById('form-id')
  ajithi.addEventListener("sumbit",()=>{
      bv.preventDefault();
      console.log("sum")
  }
  ) 
    
// console.log(window.innerWidth) 
    let textd = document.createElement('textarea');
    textd.setAttribute('id', 'textbox-id');
      // textd.textContent ="noorul is good boy"
    document.body.appendChild(textd);
  
  
  var muthu = document.createElement('div');
         document.body.append(muthu);
         muthu.textContent="heloo"
var count = 0
  let text= document.getElementById('textbox-id');
         //  console.log(textd.innerHTML)
           text.addEventListener('input',(a)=>{
                 count++; 
                 muthu.textContent=`input count is ${count}`              
           
               
              })  