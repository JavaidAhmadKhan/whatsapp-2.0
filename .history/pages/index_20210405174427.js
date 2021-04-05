import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whatsapp 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Whatsapp Clone</h1>
    </div>
  );
}
