import React, {useEffect} from 'react';
import { Dimensions, View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity,  } from 'react-native';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';


import Back from '../../assets/svg/library/Back.svg'

const ReadHeader = (props) => {

useEffect(()=>{
console.log(props.props)
},[])

    return (
        <SafeAreaView style={styles.appbar}>
            <TouchableOpacity
                style={[styles.mains]}
                onPress={() => {
                    try {
                        props.onPress();
                    } catch (e) {
                        console.log(e);
                    }
                }}>
                <View style={styles.backer}>
                    <Back />
                </View>
            </TouchableOpacity>

            <View style={styles.titleBar}>
                <Text  style={styles.title}>
                    {props.chapter}
                </Text>
                <Text  style={[styles.title,{fontWeight: FONT_WEIGHT.extra_bold,}]}> | </Text>
                <Text  style={styles.title}>
                    {props.title}
                </Text>
            </View>

        </SafeAreaView>
    );
};

export default ReadHeader;

const styles = StyleSheet.create({
    appbar: {
        width: Dimensions.get('window').width,
        height: HEIGHT / 100 * 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: WIDTH / 100 * 3,
        flexDirection: 'row',
        borderBottomColor:"#F1DEC7",
        borderBottomWidth:1.5,

    },
    mains: {
        width: WIDTH / 100 * 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleBar: {
        width: WIDTH / 100 * 79,
        alignItems: 'center',
        flexDirection:'row',
    },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.compact,
        fontWeight: FONT_WEIGHT.medium,
        // paddingHorizontal: 20,

    },
    backer:{
        height:30,
        width:30,
        borderColor:"#F1DEC7",
        borderWidth:1.5,
        borderRadius:5,
        alignItems:"center",
        justifyContent:'center'
    },

});
