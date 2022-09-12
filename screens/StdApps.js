import React from 'react'
import { StatusBar } from 'react-native'
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'

const StdApps = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#001737" translucent = {true}/>
            <View style={styles.container}>
                <Text style={{color:"white",fontSize:20, marginLeft:'10%',marginTop:'5%',marginRight:'15%'}}>Choose a Course...</Text>
                <View style={styles.superimages}>
                    <TouchableOpacity style={{marginTop:"5%"}}>
                        <Image resizeMode="stretch" style={{width:320,height:150}} source={require('../assets/java.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:"5%"}}>
                        <Image resizeMode="stretch" style={{width:320,height:150}} source={require('../assets/python.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:"5%"}}>
                        <Image resizeMode="stretch" style={{width:320,height:150}} source={require('../assets/cpp.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001737',
    },
    images: {
        justifyContent:'center',
        alignItems: "center",
        flexDirection: 'row' ,
    },
    superimages: {
        justifyContent:'center',
        alignItems: "center",
        flexDirection: 'column' ,
    },
});

export default StdApps