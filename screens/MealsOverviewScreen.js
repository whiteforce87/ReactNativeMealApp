
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data"
import { View,FlatList, StyleSheet } from "react-native"
import { useLayoutEffect } from "react";
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

    

    function renderMealItem(itemData){

        const item = itemData.item;

        const mealItemProps={
            id:item.id,
            title:item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }



        return (
            <MealItem {...mealItemProps}></MealItem>
        )
    }

  return (
    <View style={styles.container}>

        <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}></FlatList>
    </View>

    )
}

export default MealsOverviewScreen

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})