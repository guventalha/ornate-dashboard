import Head from "next/head";
import { Input } from "antd";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
      <Input placeholder="asdasd" />
    </div>
  );
}
