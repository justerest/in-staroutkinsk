import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './cinema/cinema.module.scss';

const MainPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>В Староуткинске | Главное</title>
        <meta name="description" content="Кино в Староуткинске" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>
          В Староуткинске
          <br />
          <span className={styles.main_subtitle}>Главное</span>
        </h1>
      </header>

      <main>
        <p>Что в&nbsp;Староуткинске главное?</p>
      </main>
    </div>
  );
};

export default MainPage;
