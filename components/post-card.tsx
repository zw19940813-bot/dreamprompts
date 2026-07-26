import Link from "next/link";
import type { Article } from "@/lib/articles";

type ArticleCardProps = {
  article: Article;
  coverIndex?: number;
  showCover?: boolean;
};

export function ArticleCard({ article, coverIndex = 0, showCover = false }: ArticleCardProps) {
  const coverClass = showCover ? ` cover-card cover-${(coverIndex % 9) + 1}` : "";

  return (
    <article className={`article-card${coverClass}`}>
      {showCover ? (
        <Link className="article-cover" href={`/articles/${article.slug}`} aria-label={`Read ${article.title}`}>
          <span className="cover-label">{article.category}</span>
          <span className="cover-frame">
            <i />
            <i />
            <i />
          </span>
        </Link>
      ) : null}
      <div className="article-meta">
        <span>{article.category}</span>
        <span>{article.readTime}</span>
      </div>
      <h3>
        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
      </h3>
      <p>{article.excerpt}</p>
      <div className="article-footer">
        <time dateTime={article.date}>{article.date}</time>
        <Link href={`/articles/${article.slug}`} aria-label={`Read ${article.title}`}>
          Read
        </Link>
      </div>
    </article>
  );
}
