import Head from "next/head";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1>articles</h1>
      {articles.map((article) => (
        <h3 key={article.id}>{article.title}</h3>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=6");
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
