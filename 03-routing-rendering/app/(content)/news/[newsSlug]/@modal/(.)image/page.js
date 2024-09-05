import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/modal-backdrop";

export default async function InterceptedNewsImage({ params }) {

    const { newsSlug } = params;

    const newsItem = await getNewsItem(newsSlug);

    if (!newsItem) {
        notFound();
    }
    
    return (
        <>
            <ModalBackdrop />

            <dialog className="modal" open>

                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </div>

            </dialog>
        </>
    )
}