import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ user }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{user.username}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {user.username} {user.email}
        </h1>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
  const json = await res.json();
  return {
    props: { user: json }, // will be passed to the page component as props
  };
}
