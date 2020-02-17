export class Slider {
    constructor(elmMonSlider, config_slider){
        this.elmMonSlider = elmMonSlider;
        this.list_slide = config_slider.list_slide;
        console.log('slider')

    }

    creerSlider() {

        console.log(this.elmMonSlider.tagName)
        console.log(this.list_slide)
        let elmSlider = document.createElement('div')
        elmSlider.classList.add('slider')
        let elmSlides = document.createElement('div')
        elmSlides.classList.add('slides')
        let k=1
        let elmNav = document.createElement('nav')
        
        for (let unSlide of this.list_slide){
            let elmSlide = document.createElement('div')
            elmSlide.id = 'slides-' + k
            
            elmSlides.appendChild(elmSlide)

            /*balise a pour les boutons sous le carrousel */
            let elmBtn = document.createElement('a')
            elmBtn.href = '#slides-'+ k
            k++

            elmNav.appendChild(elmBtn)

            /*balise h2 pour le titre */
            let elmTitre = document.createElement('h2')
            elmTitre.innerHTML= unSlide.titre
            elmSlide.appendChild(elmTitre)


            /*balise Image */
            let elmImg = document.createElement('img')
            elmImg.src = unSlide.img
            elmSlide.appendChild(elmImg)
        }
       
        elmSlider.appendChild(elmSlides)
        elmSlider.appendChild(elmNav)
        this.elmMonSlider.appendChild(elmSlider)
    }
}