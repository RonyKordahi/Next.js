// Routing
import Link from "next/link";

// Component
import Header from "./components/header";

export default function Home() {
    return (
        <main>
            <Header />
            <p>🔥 Let's get started! 🔥</p>
            <p><Link href="/about">About us</Link></p>
            <p><Link href="/blog">The blog</Link></p>
        </main>
    );
}