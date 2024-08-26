export default function BlogPost({ params }) {

    const { postId } = params;

    return (
        <main>
            <h1>Blog Post</h1>
            <p>{postId}</p>
        </main>
    )
}