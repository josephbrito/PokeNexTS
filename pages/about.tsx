import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/About.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.box}>
      <Image src="/images/ash_about.png" height="500" width="400" />
      <p>
        Pokémon é uma série de jogos eletrônicos desenvolvidos pela Game Freak e
        publicados pela Nintendo como parte da franquia de mídia Pokémon.
        Lançado pela primeira vez em 1996 no Japão para o console Game Boy, a
        principal série de jogos de RPGs, que continuou em cada geração em
        portáteis da Nintendo.
      </p>
    </div>
  );
};

export default About;
