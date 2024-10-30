import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons"

function IconButton({onPressed, icon, color}) {
  return (
        <Pressable onPress={onPressed} style={({pressed}) => pressed && styles.pressed }>
            <Ionicons name={icon} size={24} color={color}></Ionicons>

        </Pressable>
    )
}

export default IconButton;

const styles= StyleSheet.create({
    pressed:{
        opacity:0.7
    }
})