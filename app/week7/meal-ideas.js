//Week 7 Assignment
"use client";

import { useState } from "react";
import { useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();

        if (data.meals) {
            const mealDetailsPromises = data.meals.map((meal) =>
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`).then((res) => res.json()));
          }
    } catch (error) {
        console.error(error);
    }
}

export default function MealIdeas ({ ingredient }) {
    const [mealIdeas, setMealIdeas] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
    
        getMealIdeas(ingredient)
          .then((fetchedMeals) => {
            setMealIdeas(fetchedMeals);
          });
      }, [ingredient]);
    


    //Render your component
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="flex text-white items-center justify-center font-bold text-xl">Meal Ideas</h1>
            <div className="flex bg-black items-center justify-center">
                <ul>
                    {mealIdeas.map((meal) => (
                        <li 
                            key={meal.idMeal}>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <p>{meal.strMeal}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}