const checkPP = () => (
	target: Object,
	propertyKey: string,
	descriptor: PropertyDescriptor
  ) => {
	const originalMethod = descriptor.value;
  
	descriptor.value = function (...args: Move[]) {
		// const currentPokemon = this as Pokemon;
	  	// if (currentPokemon.ppAvailable > 0) {
		if (this.ppAvailable > 0) {
			originalMethod.apply(this, args);
	  	} else {
			console.log('You can not attack to other Pokemons');
	  	}
	};
  
	return descriptor;
}; 

type Move = {
	name: string,
	power: number
};
  
class Pokemon {
	name: string;
	ppAvailable = 1;
	constructor(name: string, ppAvailable: number) {
		this.name = name;
		this.ppAvailable = ppAvailable;
	}

	@checkPP()
	figth({ move }: { move: Move; }): void {
		console.log(`${this.name} used ${move?.name}!`);
		this.ppAvailable -= 1;
	}

	calculateDamage(move: any) {
		return move.power;
	}
}

const thunderbolt: Move = {name: 'thunderbolt', power: 90};
const pikachu = new Pokemon('pikachu', 1);
pikachu.figth({ move: thunderbolt });
pikachu.figth({ move: thunderbolt });