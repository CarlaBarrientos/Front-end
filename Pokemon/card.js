class Pokedex extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({
            mode: 'closed'
        });

        let templateElem = document.getElementById('cardTemplate');
        let content = templateElem.content.cloneNode(true);

        content.querySelector('img').setAttribute('src',

            this.getAttribute('image'));

        content.querySelector('.container>.name').innerText =

            this.getAttribute('name');

        content.querySelector('.container').style.backgroundColor =

            this.getAttribute('color');

        content.querySelector('.container>.name').style.color =

            this.getAttribute('font-color');

        shadow.appendChild(content);
    }
}


