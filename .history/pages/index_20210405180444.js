import Head from "next/head";
import styled from "styled-components";

import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Sidebar />
    </div>
  );
}
