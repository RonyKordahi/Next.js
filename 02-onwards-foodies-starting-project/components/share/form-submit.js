"use client";

import { useFormStatus } from "react-dom";

export default function FormSubmit() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending}>
            {
                pending
                    ? "Submitting meal..."
                    : "Share Meal"
            }
        </button>
    )
}