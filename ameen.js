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

