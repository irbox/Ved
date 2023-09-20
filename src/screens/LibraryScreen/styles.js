import { ScaledSheet } from 'react-native-size-matters';
import { COLOR ,HEIGHT,WIDTH,FONT_SIZE,FONT_WEIGHT} from '../../theme/typography';

export default ScaledSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor:'rgba(163, 57, 9, 0.29)'
    },
    Box:{
        backgroundColor:"#EED9BC",
        width:'100%',
        height:250,
        padding:10,
        marginVertical:10,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center"
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:'5%',
        backgroundColor:'rgba(163, 57, 9, 0.29)'
      },
      modalView: {
        backgroundColor: COLOR.primary,
        borderRadius: 10,
        width:'100%',
        paddingHorizontal:'5%',
        paddingVertical:5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
})