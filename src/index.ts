type lookup = {
    [key: string]: string[]
}

const letters:lookup = {
    "Alpha":["Α", "α"],
    "Beta":["Β", "β"],
    "Gamma":["Γ", "γ"],
    "Delta":["Δ", "δ"],
    "Epsilon":["Ε", "ε"],
    "Zeta":["Ζ", "ζ"],
    "Eta":["Η", "η"],
    "Theta":["Θ","θ"],
    "Iota":["Ι", "ι"],
    "Kappa":["Κ", "κ"],
    "Lambda":["Λ", "λ"],
    "Mu":["Μ", "μ"],
    "Nu":["Ν", "ν"],
    "Ksi":["Ξ", "ξ"],
    "Omicron":["Ο", "ο"],
    "Pi":["Π", "π"],
    "Rho":["Ρ", "ρ"],
    "Sigma":["Σ", "σ/ς"],
    "Tau":["Τ", "τ"],
    "Upsilon":["Υ", "υ"],
    "Phi":["Φ", "φ"],
    "Chi":["Χ", "χ"],
    "Psi":["Ψ", "ψ"],
    "Omega":["Ω", "ω"]
}


class Card {
    character: string
    name: string
    elem: HTMLElement
    constructor(elem: HTMLElement) {
        this.elem = elem;
        this.elem.addEventListener('click', this.onClick)
    }

    flip = () => {
        this.elem.classList.remove("flip-card--flipped");
        this.update()
        this.elem.classList.add("flip-card");
        this.elem.addEventListener('click', this.onClick)
    }

    onClick = () => {
        this.elem.removeEventListener('click', this.onClick);
        this.elem.classList.add("flip-card--flipped")
        setTimeout(this.flip, 3000);
    }

    update= ()=> {
        const key = randomProperty(letters);
        this.character = letters[key][Math.round(Math.random())];
        const characterSide = <HTMLElement> this.elem.querySelector(".flip-card-inner > .flip-card-front > p")
        characterSide.innerText = this.character;
        const nameSide = <HTMLElement> this.elem.querySelector(".flip-card-inner > .flip-card-back > p")
        setTimeout(()=>{
            this.name = key;
            nameSide.innerText = this.name;
        },800)

    }
}


const randomProperty = (obj:lookup) => {
    const keys = Object.keys(obj)
    return keys[ keys.length * Math.random() << 0];
};


console.log(document.querySelector('.flip-card'))
let card = new Card(document.querySelector('.flip-card'));
card.update();