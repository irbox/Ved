import React, {useEffect} from 'react';
import { Dimensions, View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity,  } from 'react-native';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';


import Logo from '../../assets/svg/dashboard/Logo.svg'
import Cart from '../../assets/svg/dashboard/Cart.svg'
import Note from '../../assets/svg/dashboard/Note.svg'

const CustomHeader = (props) => {

useEffect(()=>{
console.log(props.props)
},[])

    return (
        <SafeAreaView style={styles.appbar}>
            <TouchableOpacity
                style={[styles.mains]}
                onPress={() => {
                    props.props.navigation.push('HomeTabbar')
                }}>
                <Logo />
            </TouchableOpacity>

            <View style={styles.titleBar}>
                <Text
                    style={styles.title}>
                    {props.title}
                </Text>
            </View>


            <View
                style={styles.touch}>
                <TouchableOpacity style={{flexDirection:'row'}} onPress={() => props.props.navigation.push("CartScreen")}>
                    <Cart />
                    <View style={styles.redDot}>
                        <Text style={{fontSize:8,color:'white',fontWeight:'700'}}>19</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row'}} onPress={() =>  props.props.navigation.push("NotificationScreen")}>
                    <Note />
                    <View style={styles.redDot}>
                        <Text style={{fontSize:8,color:'white',fontWeight:'700'}}>19</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CustomHeader;

const styles = StyleSheet.create({
    appbar: {
        width: Dimensions.get('window').width,
        height: HEIGHT / 100 * 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: WIDTH / 100 * 5,
        flexDirection: 'row',
        // backgroundColor:'red',
        // paddingVertical: 20,

    },
    mains: {
        width: WIDTH / 100 * 30,
        alignItems: 'center',
        justifyContent: 'center',
        top: 5
    },
    titleBar: {
        width: WIDTH / 100 * 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.large,
        fontWeight: FONT_WEIGHT.medium,
        paddingHorizontal: 20,
        left: 10,

    },
    touch: {
        width: WIDTH / 100 * 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    redDot:{
        height:15,
        width:15,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#ED4949",
        borderColor:'white',
        borderWidth:1,
        borderRadius:50,
        marginTop:-3,
        marginLeft:-5
    },
    highlitetext: {
        color: '#066FF9',
        alignSelf: 'center',
    },
    gradientContainer: {
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    grad: {
        backgroundColor: '#ffffff',
        height: 44,
        width: 44,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }

});
