import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
  public id: number;
  public name: string;

  constructor(id:number, name:string) {
    this.id = id;
    this.name = name;
  }
}

export class PokemonShort {
  get imageUrl():string {
    return `https://pokemon.com/${this.id}.jpg`
  }
  constructor(
    public id: number,
    public name: string,
    private readonly http:HttpAdapter
  ) { }

  scream() {
    console.log(`${this.name.toUpperCase()}!!`);
  }

  speak() {
    console.log(`${this.name},${this.name} `);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
    console.log(data.moves);

    return data.moves;
  }
}

const pokeApiAxios = new PokeApiAdapter()
const pokeApiFetch = new PokeApiFetchAdapter()

export const charmander = new PokemonShort(1, 'Charmander',pokeApiFetch)
// charmander.scream()
// charmander.speak()

// console.log(charmander);

console.log(charmander.getMoves());

