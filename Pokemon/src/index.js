import './styles/styles.less';
import Pokebola from './assets/pokebola.png';
import Logo from './assets/logo.png';
import { drawPokedex } from './utils';
import { getPokemons } from './api';

document.getElementsByClassName('header_button-icon')[0].src = Pokebola;
document.getElementsByClassName('header_logo-image')[0].src = Logo;

const pokemons = getPokemons();
pokemons.then((data) => {
    drawPokedex(data);
})
