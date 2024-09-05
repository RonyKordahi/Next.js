import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default async function ArchivePage() {

    const years = await getAvailableNewsYears();
    
    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {
                        years.map(year => {
                            return (
                                <li key={year}>
                                    <Link href={`/archive/${year}`}>
                                        {year}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}