
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
//import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
//import { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";

function FavoritesScreen() {

//const favoriteMealsContext = useContext(FavoritesContext);
const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)
//const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id));
const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));


  return (
    favoriteMeals.length === 0 ? 
    <View style={styles.root}>
        <Text style={styles.text}>No Favorite Meal Selected!</Text>
    </View>
     :   <MealsList items={favoriteMeals}/>


    )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        color:"white"
    }
}) 