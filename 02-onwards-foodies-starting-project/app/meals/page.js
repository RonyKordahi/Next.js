import Link from "next/link";
import { Suspense } from "react";

import classes from "./page.module.css"
import { getMeals } from "@/lib/meals";

import MealsGrid from "@/components/meals/meals-grid";
import MealsLoading from "@/components/meals/meals-loading";

export const metadata = {
    title: "All Meals",
    description: "Browse the delicious meals made by our community.",
};

const Meals = async () => {

    const meals = await getMeals();

    return (
        <MealsGrid meals={meals} />
    )
}

export default function MealsPage() {

    return (
        <>
            <header className={classes.header}>

                <h1>
                    Delicious meals, created
                    <span className={classes.highlight}> by you</span>
                </h1>

                <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>

                <p className={classes.cta}>
                    <Link href="/meals/share">Share Your Favorite Recipe</Link>
                </p>

            </header>

            <main>
                <Suspense fallback={<MealsLoading />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}