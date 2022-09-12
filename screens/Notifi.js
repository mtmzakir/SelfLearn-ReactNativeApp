import React from 'react'
import { StatusBar } from 'react-native'
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'

const Notifi = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#001737" translucent = {true}/>
            <Text style={{color:"white",fontSize:20}}>Notifications Empty</Text>
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
});

export default Notifi