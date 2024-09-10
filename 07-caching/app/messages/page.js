import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// Cache setting function
// ↪ makes the component not store anything in cache for any fetch requests
// ↪ alternative to setting up a cache setting for the project, only affects component it's in

// import { unstable_noStore } from "next/cache";

// Cache setting variables
// ↪ name is important
// ↪ can be used as project wide settings
// ↪ MUST BE EXPORTED

// export const revalidate = 5; // same as setting revalidate key inside next object
// export const dynamic = "force-dynamic"; // same as setting cache setting to no-store

export default async function MessagesPage() {
    // const response = await fetch("http://localhost:8080/messages", {
    //     next: {
    //         tags: ["msg"],
    //     },
    // });

    const messages = await getMessages()

    if (!messages || messages.length === 0) {
        return <p>No messages found</p>;
    }

    return <Messages messages={messages} />;
}
