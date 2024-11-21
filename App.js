import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import {Ionicons} from "@expo/vector-icons"
//import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/context/redux/store';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator(){
  return <Drawer.Navigator screenOptions={
                          {
                          headerStyle:{backgroundColor:"#8f5909"},
                          headerTintColor:"white",
                          sceneContainerStyle:{backgroundColor:"#826a46"},
                          drawerContentStyle:{backgroundColor:"#8f5909"},
                          drawerInactiveTintColor:"white",
                          drawerActiveTintColor:"#f0e2cc",
                          drawerActiveBackgroundColor:"#7e6e56"
                          }
                        }>
            <Drawer.Screen name='Categories' component={CategoriesScreen}
              options={
                {title:"All Categories",
                drawerIcon: ({color, size}) => 
                  <Ionicons name='list' color={color} size={size}></Ionicons>
              }
            }
            ></Drawer.Screen>
            <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
                      drawerIcon: ({color, size}) => 
                      <Ionicons name='star' color={color} size={size}></Ionicons>
            }}></Drawer.Screen>
          </Drawer.Navigator>
}

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      
      {/*<FavoritesContextProvider>*/}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MealCategories" screenOptions={
            {
            headerStyle:{backgroundColor:"#8f5909"},
            headerTintColor:"white",
            contentStyle:{backgroundColor:"#826a46"}
            }
          }>
            
            <Stack.Screen name='MealCategories' 
              //component={CategoriesScreen} 
              component={DrawerNavigator}
              options={{
                title:"All Categories",
                headerShown:false
            }}>
            </Stack.Screen>
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} 
                //options={({route, navigation}) =>{
                //const catId = route.params.catId;
                //return{
                // title:catId;
                //};
          //  }}
          >
            </Stack.Screen>
            <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{title:"About the Meal"}} ></Stack.Screen>
          </Stack.Navigator>
          </NavigationContainer>
          </Provider>
        {/*</FavoritesContextProvider>*/}

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
