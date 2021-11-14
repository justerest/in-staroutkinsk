import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './cinema.module.scss';

const CinemaPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>В Староуткинске | Кино</title>
        <meta name="description" content="Кино в Староуткинске" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>
          В Староуткинске
          <br />
          <span className={styles.subtitle}>Кино</span>
        </h1>
      </header>

      <main>
        <p>Смотрите кино с&nbsp;друзьями в&nbsp;любимом поселке</p>
      </main>
    </div>
  );
};

export default CinemaPage;
