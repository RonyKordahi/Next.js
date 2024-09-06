// Server action
import { createPost } from "@/actions/posts";

// Client Component
import PostForm from "@/components/post-form";

export default function NewPostPage() {

    return (
        <PostForm createPost={createPost} />
    )
}
