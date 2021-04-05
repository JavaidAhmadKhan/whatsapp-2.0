import Head from "next/head";

import styled from "styled-components";

import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whatsapp 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Whatsapp Clone</h1>
      <Sidebar />
    </div>
  );
}
