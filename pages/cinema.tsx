import type { NextPage } from 'next';
import Head from 'next/head';
import BodyContainer from 'client/body-container';
import Header from 'client/header';
import styles from 'styles/subtitle-colors.module.scss';

const CinemaPage: NextPage = () => {
  return (
    <BodyContainer>
      <Head>
        <title>В Староуткинске | Кино</title>
        <meta name="description" content="Кино в Староуткинске" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <span className={styles.main}>Кино</span>
      </Header>

      <main>
        <p>Смотрите кино с&nbsp;друзьями в&nbsp;любимом поселке</p>
      </main>
    </BodyContainer>
  );
};

export default CinemaPage;
