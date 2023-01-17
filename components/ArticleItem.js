import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <div>
      <h3>{article.title}</h3>
      <Link href="/article/[id]" as={`/article/${article.id}`}>
        Read More
      </Link>
    </div>
  );
};

export default ArticleItem;
