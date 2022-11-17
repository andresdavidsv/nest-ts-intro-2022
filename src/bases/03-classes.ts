import axios from "axios";
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
  public id: number;
  public name: string;

  constructor(id:number, name:string) {
    this.id = id;
    this.name = name;
    console.log('constructor llamado');
  }
}

export class PokemonShort {
  get imageUrl():string {
    return `https://pokemon.com/${this.id}.jpg`
  }
  constructor(
    public id: number,
    public name: string,
  ) { }

  scream() {
    console.log(`${this.name.toUpperCase()}!!`);
  }

  speak() {
    console.log(`${this.name},${this.name} `);
  }

  async getMoves(): Promise<Move[]> {
    // const moves = 10;
    const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
    console.log(data.moves);

    return data.moves;
  }
}

export const charmander = new PokemonShort(1, 'Charmander')
// charmander.scream()
// charmander.speak()

// console.log(charmander);

console.log(charmander.getMoves());

