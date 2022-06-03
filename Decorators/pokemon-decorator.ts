const checkPP = (ppAvailable: number) => (
    target: Object,
    prop: string,
    descriptor: PropertyDescriptor) => {
      const value = descriptor.value;
      descriptor.value = function() {
        if(ppAvailable <= 0) value.apply(this);
        else console.log('You can not attack to other Pokemons')
      }
  }
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
    
    @checkPP(0)
    figth(move: Move) {
      console.log(`${this.name} used ${move?.name}!`);
      this.ppAvailable -= 1;
    }
  
    calculateDamage(move: any) {
      return move.power;
    }
  }
  
  const thunderbolt: Move = {name: 'thunderbolt', power: 90};
  const pikachu = new Pokemon('pikachu', 1);
  pikachu.figth(thunderbolt);
  pikachu.figth(thunderbolt);