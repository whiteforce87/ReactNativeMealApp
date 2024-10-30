import { View,Text, StyleSheet } from "react-native";

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

export default Subtitle;

const styles= StyleSheet.create({
    subtitle:{
        color:"#e2b498",
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        
    },
    subtitleContainer:{
        padding:6,
        borderBottomColor: "#e2b498",
        borderBottomWidth:2,
        margin:4,
        marginHorizontal:12,
        marginVertical:4

    }
})