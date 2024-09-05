import Link from "next/link";
import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getNewsForYear } from "@/lib/news";

export default async function ArchiveYear({ params }) {

    const { year } = params;

    const news = await getNewsForYear(year);
    const months = await getAvailableNewsMonths(year);

    if (!news) {
        throw new Error("Invalid filter.")
    }

    return (
        <>
            <h1>{year}</h1>

            <div id="archive-header">
                <ul>
                    {
                        months.map(month => {
                            return (
                                <li key={month}>
                                    <Link href={`/archive/${year}/${month}`}>
                                        {month}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <NewsList list={news} />
        </>
    )
}