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

        shadow.appendChild(content);
    }
}
customElements.define('pokedex-card', Pokedex);

