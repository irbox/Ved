import React from 'react';
import { View, Text ,StyleSheet , TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { HEIGHT , WIDTH, COLOR , FONT_WEIGHT , FONT_SIZE , } from '../../theme/typography';

export default CustomButton = (props) => {



    return (
        <View>
            <TouchableOpacity 
                disabled={props.isDisabled}
                onPress={() => {props.onPress()}}>
                <View style={[styles.gradientContainer,props.need? {backgroundColor:'#544241'}:{backgroundColor:COLOR.btnColor,}]}>
                    <Text style={styles.btnText}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    gradientContainer: {
        height: HEIGHT / 100 * 7,
        width: WIDTH / 100 * 94,
        borderRadius: 10,
        marginVertical:'2%',
        backgroundColor:COLOR.btnColor,
        alignItems: "center",
        justifyContent: 'center',
    },
    btnText: {
        color: COLOR.white,
        fontWeight: FONT_WEIGHT.bold,
        fontSize: FONT_SIZE.large
    },  
})