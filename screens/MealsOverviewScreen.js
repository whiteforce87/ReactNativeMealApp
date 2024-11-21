
import { MEALS, CATEGORIES } from "../data/dummy-data"
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
//import { useRoute } from "@react-navigation/native"; Bu da alternatif bir hook route için

function MealsOverviewScreen({route, navigation}) {

    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);


    useLayoutEffect(() =>{

        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title:categoryTitle
        });


    },[catId,navigation]);

    return(
        <MealsList items={displayedMeals}></MealsList>
    )

   
}

export default MealsOverviewScreen

