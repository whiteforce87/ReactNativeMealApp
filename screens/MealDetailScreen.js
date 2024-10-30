import { Text , StyleSheet} from "react-native";
import { Image, View, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";


function MealDetailScreen({route, navigation}) {

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler(){

    }

    useLayoutEffect(() =>{
        navigation.setOptions( options={
            headerRight: () =>{
              return <IconButton icon="star" color="white" title="Tap Me!" onPressed={headerButtonPressHandler}></IconButton>
            }
          }
        )
    }, [navigation,headerButtonPressHandler])

  return (
        <ScrollView style={styles.root}>
            <Image source={{uri:selectedMeal.imageUrl}}  style={styles.image}></Image>
            <Text style={styles.title}>This is meal Detail Screen - {mealId}</Text>
            <MealDetails 
            duration={selectedMeal.duration} affordability={selectedMeal.affordability} complexity={selectedMeal.complexity}
            textStyle={styles.detailText}    
            ></MealDetails>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}></List>
                    <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen;

const styles= StyleSheet.create({
    root:{
        marginBottom:24
    },
    image:{
        width:"100%",
        height:350
    },
    title:{
        fontWeight:"bold",
        fontSize:24,
        margin:8,
        textAlign:"center",
        color: "white"
    },
    detailText:{
        color:"white"
    },
    listContainer:{
        width:"80%"
    },
    listOuterContainer:{
        alignItems:"center"
    }
})