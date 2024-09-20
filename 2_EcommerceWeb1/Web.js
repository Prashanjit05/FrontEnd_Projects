let card=document.querySelector(".trend");
let card2=document.querySelector("#trendSec");
let mainPage=document.querySelector(".main");
let blog=document.querySelector(".trends");
let about=document.querySelector(".about");
let contact=document.querySelector(".contact");


function homes(){
  mainPage.style.display="flex";
  card.style.display="block";
  card2.style.display="block";
  blog.style.display="block";
  contact.style.display="none";
  about.style.display="none";
  document.getElementById("homes").style.color="rgb(11, 212, 212)";
  document.getElementById("blogs").style.color="black";
  document.getElementById("shops").style.color="black";
  document.getElementById("abouts").style.color="black";
  document.getElementById("contacts").style.color="black";
}

function shops(){
 mainPage.style.display="none";
 blog.style.display="none";
 card.style.display="block";
 card2.style.display="block";
 about.style.display="none";
 contact.style.display="none";
 document.getElementById("shops").style.color="rgb(11, 212, 212)";
 document.getElementById("homes").style.color="black";
 document.getElementById("blogs").style.color="black";
 document.getElementById("abouts").style.color="black";
 document.getElementById("contacts").style.color="black";
}

function blogs(){
  mainPage.style.display="none";
  card.style.display="none";
  card2.style.display="none";
  blog.style.display="block";
  about.style.display="none";
  contact.style.display="none";
 

  document.getElementById("blogs").style.color="rgb(11, 212, 212)";
  document.getElementById("homes").style.color="black";
  document.getElementById("shops").style.color="black";
  document.getElementById("abouts").style.color="black";
  document.getElementById("contacts").style.color="black";
}

function abouts(){
  mainPage.style.display="none";
  card.style.display="none";
  card2.style.display="none";
  blog.style.display="none";
  about.style.display="block";
  contact.style.display="none";

  document.getElementById("abouts").style.color="rgb(11, 212, 212)";
  document.getElementById("blogs").style.color="black";
  document.getElementById("homes").style.color="black";
  document.getElementById("shops").style.color="black";
  document.getElementById("contacts").style.color="black";
}

function contacts(){
  mainPage.style.display="none";
  card.style.display="none";
  card2.style.display="none";
  blog.style.display="none";
  about.style.display="none";
  contact.style.display="block";

  document.getElementById("contacts").style.color="rgb(11, 212, 212)";
  document.getElementById("abouts").style.color="black";
  document.getElementById("blogs").style.color="black";
  document.getElementById("homes").style.color="black";
  document.getElementById("shops").style.color="black";
}

//cart

function show(img){
  let newImg=document.getElementById("newImg");
  newImg.src=img.src;

  mainPage.style.display="none";
  card.style.display="none";
  card2.style.display="none";
  blog.style.display="none";
  about.style.display="none";
  contact.style.display="none";

  document.querySelector(".cart").style.display="flex";
}

function addCart(){
  alert("Added to Cart");
  location.reload();
}

function signup(){
  alert("Sign in Successful");
  location.reload();
}

function submitbtn(){
  alert("Form submitted Successful");
  location.reload();
}