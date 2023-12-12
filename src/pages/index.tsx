import Head from "next/head";
import Homepage from "@/components/home";
import Cookies from "js-cookie";



export default function Home() {
  return (
    <>
      <Head>
        <title>Medii</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Homepage />
      </main>
    </>
  );
}