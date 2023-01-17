import { useRouter } from "next/router";
import { server } from "../../../config";

const article = ({ article }) => {
  console.log(article);
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `http://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

export default article;
