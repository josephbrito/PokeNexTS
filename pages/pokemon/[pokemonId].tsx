import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import PokemonId from "../../components/Pokemon";
import {
  IDataPokemon,
  IPokemonDataId,
  IParams,
} from "../../interfaces/IPokemon";
import ReactLoading from "react-loading";
import styled from "../../styles/Load.module.css";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {
  const max: number = 150;
  const api: string = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}/?limit=${max}`);
  const data: IDataPokemon = await res.json();
  const pokemons = data.results;

  const paths = pokemons.map((_, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { pokemonId } = context.params as IParams;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

  const pokemon: IPokemonDataId = await res.json();

  return {
    props: {
      pokemon,
    },
  };
};

const Pokemon = ({
  pokemon,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styled.load_container}>
        <ReactLoading className={styled.load} type="spin" color="black" />
      </div>
    );
  }
  return <PokemonId pokemon={pokemon} />;
};

export default Pokemon;
