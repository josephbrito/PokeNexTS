import Image from "next/image";
import { InferGetStaticPropsType } from "next";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import { IGetPokemon, IDataPokemon } from "../interfaces/IPokemon";

export const getStaticProps = async () => {
  const max: number = 150;

  const api: string = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}/?limit=${max}`);
  const data: IDataPokemon = await res.json();
  const pokemons = data.results;

  pokemons.forEach((item: IGetPokemon, index: number) => {
    return (item.id = index + 1);
  });

  return {
    props: {
      pokemons,
    },
  };
};

const Home = ({ pokemons }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title_red}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          height="50"
          width="50"
          alt="PokeNext"
        />
      </div>

      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon: IGetPokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default Home;
