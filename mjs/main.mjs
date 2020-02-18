import {anim_header} from "./anim_Intro.mjs";
import {anim_titre} from "./anim_Intro.mjs";
import {anim_Nav} from "./anim_Intro.mjs";
import { Slider } from "./slider.mjs";
import { config_slider } from "./sliderConfig.mjs";

let elmHeader = document.querySelector("header");
const animHeader = new anim_header(elmHeader);
animHeader.animHeader();

let elmTitre = document.querySelector("header h1");
const animIntro = new anim_titre(elmTitre);
animIntro.animTitre();

let elmNav = document.querySelector("nav");
const animNav = new anim_Nav(elmNav);
animNav.animNav();

const elmSlider = document.querySelector('.mon-slider')
console.log(elmSlider.tagName)
let mon_slider = new Slider(elmSlider, config_slider)
mon_slider.creerSlider()