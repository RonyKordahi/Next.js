"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => {
    return !text || text.trim() === "";
}

export const shareMeal = async (prevState, formData) => {
    const meal = {
        title: formData.get("title"),
        image: formData.get("image"),
        creator: formData.get("name"),
        summary: formData.get("summary"),
        creator_email: formData.get("email"),
        instructions: formData.get("instructions"),
    }

    if (
        isInvalidText(meal.title)
        || isInvalidText(meal.summary)
        || isInvalidText(meal.instructions)
        || isInvalidText(meal.creator)
        || isInvalidText(meal.creator_email)
        || !meal.creator_email.includes("@")
        || !meal.image
        || meal.image.size === 0
    ) {
        return {message: "Invalid input"}
    }

    await saveMeal(meal);

    // revalidate the cache of this path
    // ↪ second parameter ("layout") defines to revalidate the page or also the nested pages
    // ↪ default is just "page"
    revalidatePath("/meals");

    redirect("/meals");
}