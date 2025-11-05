import {homeLoad} from "./home.js";
import {menuLoad} from "./menu.js";
import { contactLoad } from "./contact.js";
import './style.css';

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");
const content = document.querySelector('#content');

homeLoad();
menu.addEventListener("click", ()=>{
    content.textContent = "";
    menuLoad();
})

home.addEventListener("click", ()=>{
    content.textContent = "";
    homeLoad();
})

contact.addEventListener("click", () =>{
    content.textContent = "";
    contactLoad();
})