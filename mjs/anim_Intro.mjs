export class anim_header {
    constructor(elmHeader) {
        this.elmHeader = elmHeader
    }

    animHeader() {
        let elmHeader = document.querySelector("header");

        elmHeader.classList.add('animHeader');
    }
    
}

export class anim_titre {
    constructor(elmTitre) {
        this.elmTitre = elmTitre
    }


    animTitre() {
        let elmTitre = document.querySelector("header h1");
        
        elmTitre.style.opacity = "0";

        elmTitre.classList.add('animTitre');
    }
}

export class anim_Nav {
    constructor(elmNav) {
        this.elmNav = elmNav
    }

    animNav() {
        let elmNav = document.getElementById("menu");

        elmNav.style.opacity = "0";

        elmNav.classList.add('animMenu');
    }
    
}