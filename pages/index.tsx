import type { NextPage } from 'next';
import Head from 'next/head';
import BodyContainer from 'client/body-container';
import Header from 'client/header';
import styles from 'styles/subtitle-colors.module.scss';

const MainPage: NextPage = () => {
  return (
    <BodyContainer>
      <Head>
        <title>В Староуткинске | Главное</title>
        <meta name="description" content="Кино в Староуткинске" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <span className={styles.main}>Главное</span>
      </Header>

      <main>
        <p>Что в&nbsp;Староуткинске главное?</p>
      </main>
    </BodyContainer>
  );
};

export default MainPage;
