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

    var form = document.createElement('form');


    var ajith = document.createElement('button');
    ajith.setAttribute('type', 'sumbit');
    form.setAttribute('id', 'form-id');
    ajith.setAttribute('id', "ajith")
    ajith.textContent="submit"
    document.body.append(form);
  form.append(ajith);

  var avatar = document.createElement('div');
document.body.append(avatar);
avatar.textContent="mkk"

  var  ajithi = document.getElementById('form-id')
  ajithi.addEventListener("submit",(vi)=>{
      vi.preventDefault();
      avatar.textContent = text.value;
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
 var text= document.getElementById('textbox-id');
         //  console.log(textd.innerHTML)
           text.addEventListener('input',(a)=>{
                 count++; 
                 var kuru = count < 2 ? "blue" : "red";
                 
                 muthu.style.color= kuru;
                 muthu.textContent=`input count is ${count} ${text.value}`              
           
               
              })  

 console.log(eval(2*3))

// ------------
// function 
/* <div id="foods"> 
<div id="food-items">Food Items :</div>
<ul>
   <li> <input type="checkbox" name="food" id="input-Parotta" value="Parotta"> <label for="input-Parotta">Parotta</label> </li>
   <li> <input type="checkbox" name="food" id="input-Biriyani" value="Biriyani" > <label for="input-Biriyani">Biriyani</label></li>
   <li> <input type="checkbox" name="food" id="input-Dosa" value="Dosa" > <label for="input-Dosa">Dosa</label></li>
   <li> <input type="checkbox"  name="food" id="input-Idly" value="Idly" ><label for="input-Idly">Idly</label></li>
   <li> <input type="checkbox"  name="food" id="input-Pongal" value="Pongal" > <label for="input-Pongal">Pongal</label></li>
</ul>
</div> */

var foodid = document.createElement("div");
  foodid.setAttribute("id", "foods");
  document.body.append(foodid);
 
  var fooditems= t("div","id","food-items","FoodItems :")
 
  function t(element,attname,attvalue,innertext){
    var element = document.createElement(element);
    element.setAttribute(attname,attvalue);
    element.innerText= innertext
   return element    
}
  
  var ul =  li("ul");
  var li1 = li("li")
  var li2 = li("li")
  var li3 = li("li")
  var li4 = li("li")
  var li5 = li("li")

  function li(elementname){
    var element = document.createElement(elementname);
    return element;
  }

  var liinuput1 = checkbox("input","type","checkbox","name","food","id","input-Parotta","value","Parotta")
  var liinuput2 = checkbox("input","type","checkbox","name","food","id","input-Biriyani","value","Biriyani")
  var liinuput3 = checkbox("input","type","checkbox","name","food","id","input-Dosa","value","Dosa")
  var liinuput4 = checkbox("input","type","checkbox","name","food","id","input-Idly","value","Idly")
  var liinuput5 = checkbox("input","type","checkbox","name","food","id","input-Pongal","value","Parotta","Pongal")

  function checkbox(elementname,att1name,att1value,att2name,att2value,att3name,att3value,att4name,att4value){
          var element = document.createElement(elementname);
          element.setAttribute(att1name,att1value);
          element.setAttribute(att2name,att2value);
          element.setAttribute(att3name,att3value);
          element.setAttribute(att4name,att4value);
          return element;
  }

  var Parotta = t("label","for","inner-Parotta","Parotta" )
  var Biriyani= t("label","for","inner-Biriyani","Biriyani")
 var Dosa = t("label","for","inner-Dosa","Dosa" )
 var Idly = t("label","for","inner-Idly","Idly" )
 var Pongal= t("label","for","inner-Pongal","Pongal" )
 
foodid.append(fooditems)
fooditems.append(ul)
ul.append(li1,li2,li3,li4,li5)
li1.append(liinuput1,Parotta)
li2.append(liinuput2,Biriyani)
li3.append(liinuput3,Dosa)
li4.append(liinuput4,Idly)
li5.append(liinuput5,Pongal)

 console.log(document)