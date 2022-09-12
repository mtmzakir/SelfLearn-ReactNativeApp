import React from 'react'
import { StatusBar } from 'react-native'
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'

const Flash = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#001737" translucent = {true}/>
            <Image resizeMode="stretch" source={require("../assets/logo.png")}/>
            <Text style={{color:"#CADDFF",fontSize:18, marginBottom:"20%"}}>The Learning Platform</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('SignIn')}>
                <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001737',
        justifyContent:'center',
        alignItems: 'center',
    },
    btn : {
        marginTop: 10,
        backgroundColor:'#FFDE59',
        borderRadius:22,
        width:160,
        alignItems: "center"
    },
    btnText: {
        color: "#052147",
        fontSize: 20,
        fontWeight: "bold",
        padding:10
    }
});

export default Flash