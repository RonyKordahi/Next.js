// Next.js automatically converts parallel routes into props for the layout of the parent
export default function ArchiveLayout({archive, latest}) {
    return (
        <div>

            <h1>News Archive</h1>

            <section id="archive-filter">
                {archive}
            </section>

            <section id="archive-latest">
                {latest}
            </section>
            
        </div>
    )
}