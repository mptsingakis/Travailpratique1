import { Slider } from "./Slider.mjs";
import { config_slider } from "./sliderConfig.mjs";
const elmSlider = document.querySelector('.mon-slider')
console.log(elmSlider.tagName)
let mon_slider = new Slider(elmSlider, config_slider)
mon_slider.creerSlider()