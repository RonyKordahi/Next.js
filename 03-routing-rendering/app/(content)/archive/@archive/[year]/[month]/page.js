import NewsList from "@/components/news-list";
import { getNewsForYearAndMonth } from "@/lib/news";

export default async function ArchiveMonth({ params }) {

    const { year, month } = params;

    const news = await getNewsForYearAndMonth(year, month);

    if (!news) {
        throw new Error("Invalid filter.")
    }

    return (
        <>
            <h1>{year} - {month.length < 2 ? `0${month}` : month}</h1>

            <NewsList list={news} />
        </>
    )
}

// Note: catch all route wouldn't work. Resorted to a double nested route instead.