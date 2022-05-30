import './styles.less';
import Pokebola from './pokebola.png';
import Logo from './logo.png';
import { drawPokedex } from './utils';
import { getPokemons } from './api';

document.getElementsByClassName('header_button-icon')[0].src = Pokebola;
document.getElementsByClassName('header_logo-image')[0].src = Logo;

const pokemons = getPokemons();
pokemons.then((data) => {
    drawPokedex(data);
})
