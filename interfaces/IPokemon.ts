import { ParsedUrlQuery } from "querystring";

export interface IGetPokemon {
  id?: number;
  name: string;
  url: string;
}

export interface IDataPokemon {
  count: number;
  next: string;
  previous: null;
  results: IGetPokemon[];
}

export interface context {
  params: {
    pokemonId: number;
  };
}

export interface IType {
  type: {
    name: string;
  };
}

export interface IPokemonDataId {
  name: string;
  id: string;
  height: number;
  weight: number;
  types: IType[];
}

export interface IParams extends ParsedUrlQuery {
  pokemonId: string;
}
