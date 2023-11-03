//Week 7 Assignment
"use client";

import { useState } from "react";
import { useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
    
        if (data.meals && data.meals.length > 0) {
          const mealDetailsPromises = data.meals.map((meal) =>
            fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
            ).then((res) => res.json())
          );
    
          const mealDetails = await Promise.all(mealDetailsPromises);
          return mealDetails.map((detail) => detail.meals[0]);
        }
        return [];
      } catch (error) {
        console.error('There was a problem with the fetch operation: ', error.message);
        throw error;
      }
    }

export default function MealIdeas ({ ingredient }) {
    const [mealIdeas, setMealIdeas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
    
        fetchMealIdeas(ingredient)
          .then((fetchedMeals) => {
            setMealIdeas(fetchedMeals);
            setIsLoading(false);
          })
          .catch(() => {
            setError('Failed to fetch meal ideas. Please try again later.');
            setIsLoading(false);
          });
      }, [ingredient]);
    
    //Render your component
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="flex text-white items-center justify-center font-bold text-xl">Meal Ideas for {ingredient}:</h1>
            {isLoading && <p>Loading...</p>}
            {!isLoading && error && <p className="text-red-500">{error}</p>}
            {!isLoading && !error && mealIdeas.length === 0 && (
                <p>No meal ideas found for {ingredient}.</p>
            )}
            {!isLoading && !error && mealIdeas.length > 0 && (
                <div className="flex bg-black items-center justify-center">
                    <ul>
                        {mealIdeas.map((meal) => (
                            <li key={meal.idMeal}>
                                <p>{meal.strMeal}</p>
                                <img src={meal.strMealThumb} alt={meal.strMeal}/>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}