import { getMessages } from "@/lib/messages";

export default async function MessagesLayout({ children }) {
    const totalMessages = await getMessages().length;

    return (
        <>
            <h1>Important Messages</h1>
            <p>{totalMessages} messages found</p>
            <hr />
            {children}
        </>
    );
}
