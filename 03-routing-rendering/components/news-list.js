import Link from "next/link";

export default function NewsList({ list }) {
    return (
        <ul className="news-list">
            {
                list.map(news => {
                    return (
                        <li key={news.id}>
                            <Link href={`/news/${news.slug}`}>
                                <img src={`/images/news/${news.image}`} alt={news.title} />
                                <p>{news.title}</p>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}