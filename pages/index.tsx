import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
const Home: NextPage = () => {
  const [data, setData] = useState();
  const getInitData = async () => {
    const res = await axios.get(
      'https://api.nasa.gov/planetary/apod?api_key=dnnDtxf50g4Q3eTOaedSyJKopIwXT0v7akqYh9Y3'
    );
    setData(res.data);
  };
  useEffect(() => {
    getInitData();
  }, []);

  const getRandomData = async () => {
    const res = await axios.get(
      'https://api.nasa.gov/planetary/apod?count=1&api_key=dnnDtxf50g4Q3eTOaedSyJKopIwXT0v7akqYh9Y3'
    );

    setData(res.data[0]);
  };

  console.log(data);
  return data ? (
    <div className={styles.container}>
      <Head>
        <title>Cleveland Stargazers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="border-8 border-purple-900 lg:p-8 lg:flex md:flex-col md:items-center lg:justify-center sm:p-0 ">
        <section className="lg:p-8 md:p-8" id="displayData">
          <h1 className="text-2xl font-bold m-3 text-center">{data.title}</h1>

          <div className={styles.imgContainer}>
            <img src={data.hdurl} alt={data.title} />
            {data.copyright && <p>© {data.copyright}</p>}
          </div>
          <p>{data.date}</p>
          <h2 className="border-4 border-white lg:p-4 ">{data.explanation}</h2>
        </section>
        <section className="" id="btnContainer">
          <Button variant="outlined" onClick={() => getRandomData()}>
            Get a Random Image
          </Button>
        </section>
      </main>
    </div>
  ) : (
    <div className={styles.container}>
      <Header />
      <h1>loading...</h1>
    </div>
  );
};

export default Home;
