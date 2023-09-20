import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View,Alert, FlatList, TextInput, Modal, Linking, ImageBackground, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import styles from "./styles";
import CustomHeader from "../../component/header/CustomHeader";
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import { YourBookList, otherVersions } from "../../row/data";
import { bindActionCreators } from 'redux';
import { ActionCreators } from '@redux/action';
import { connect } from 'react-redux';
import { GetLibrary } from "../../redux/service/auth.service";
import { GET_LIBRARY_URL } from "../../utils/filehandler";
import { WebView } from 'react-native-webview';

const BookDetails = (props) =>{

    const [books, setBooks] = useState({});
    const [book, setBook] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(()=> {
        setSpinner(true)
        console.log(props.route.params.book,"BBBBBBBBBBBBBBBBBBBBB");
            GetLibrary(GET_LIBRARY_URL+"/"+props.route.params.book._id)
                .then(res => {
                    setSpinner(false)
                    if (res.success == true) {
                        // setBooks(res.book);
                        setBook(res.book_data);
                    }
                    else {
    
                    }
                })
                .catch(err => {
                    console.log('err  ', err);
                });
            setBooks(props.route.params.book);

    },[])

    return(
        <SafeAreaView style={{backgroundColor:COLOR.primary,flex:1}}>
            <StatusBar backgroundColor={COLOR.primary}/>
            <CustomHeader/>
            {!spinner?
            <>
            <Text style={[style.nav, { marginLeft: WIDTH * 5 / 100, marginTop: HEIGHT * 1 / 100 }]} numberOfLines={1}>
                <Text style={{color:'#A38875',fontSize:12}} onPress={()=> {props.navigation.navigate('LibraryTab')}}>{props.route.params.title}</Text> {'>'} 
                <Text style={{color:'#A38875',fontSize:12}} onPress={()=> {props.navigation.goBack()}}> {props.route.params.title1}</Text> {'>'} 
                <Text style={{color:'#5C504F',fontSize:12}}> {props.route.params.book.book}</Text>
            </Text>

            {!(Object.keys(books).length === 0 && books.constructor === Object) ? <View style={style.container}>
                <View style={{width:'100%',flexDirection:'row',}}>
                    <View style={{width:'35%'}}>
                    <Image 
                        style={{height:200,width:'100%'}}
                        source={books && books.image ? {uri : books.image} : null}/>
                    </View>
                    <View style={{width:'65%',paddingLeft:15}}>
                        <View style={{height:HEIGHT/100*21}}>
                            <Text style={{fontSize:FONT_SIZE.compact,color:'#3A3A3A',fontWeight:FONT_WEIGHT.bold,}}>{books && books.book ? books.book : null}</Text>
                            {books && books.language ? 
                            <Text style={{fontSize:FONT_SIZE.tiny,marginVertical:3,color:'#585858',fontWeight:'500', fontSize: 11, marginTop: 5}}>
                                <Text style={{fontWeight: 900, fontSize: 11}}>Language</Text> :{books.language} 
                            </Text>: null}
                            {books && books.name ?
                            <Text style={{fontSize:FONT_SIZE.tiny,marginVertical:3,color:'#585858',fontWeight:'500', fontSize: 11}}>
                                <Text style={{fontWeight: 900, fontSize: 11}}>Author</Text> :  { books.name} 
                            </Text>: null}
                            {books && books.publisher ?
                            <Text style={{fontSize:FONT_SIZE.tiny,marginVertical:3,color:'#585858',fontWeight:'500', fontSize: 11}}>
                                <Text style={{fontWeight: 900, fontSize: 11}}>Publisher</Text> :  { books.publisher} 
                            </Text>: null}
                            {books && books.page ?
                            <Text style={{fontSize:FONT_SIZE.tiny,marginVertical:3,color:'#585858',fontWeight:'500', fontSize: 11}}>
                                <Text style={{fontWeight: 900, fontSize: 11}}>Total Pages</Text> :{ books.page} 
                            </Text>: null}
                            {books && books.copyright ?
                            <Text style={{fontSize:FONT_SIZE.tiny,marginVertical:3,color:'#585858',fontWeight:'500', fontSize: 11}}>
                                <Text style={{fontWeight: 900, fontSize: 11}}>CopyRight</Text> :  { books.copyright} 
                            </Text>: null}
                            <Text style={{fontSize:FONT_SIZE.tiny,marginVertical:3,color:'#585858',fontWeight:'500', fontSize: 11}}>
                                <Text style={{fontWeight: 900, fontSize: 11}}>Price</Text> : {books && books.price && books.price!='0' ? books.price : 'Free'}
                            </Text>
                        </View>

                        <View style={{flexDirection:"row"}}>
                        <TouchableOpacity 
                                onPress={() =>props.navigation.push('BookPages',{books: books})}
                                style={[style.readBtn,books.buy_link?{width:'70%', marginRight: '3%'}:{}]}>
                            <Text style={{color:COLOR.white,fontSize:FONT_SIZE.small,fontWeight:'600'}}>
                                Read Now
                            </Text>
                        </TouchableOpacity>
                        {books.buy_link?
                        <TouchableOpacity 
                                disabled={!(books && books.buy_link)}
                                onPress={() => {
                                    console.log(books.buy_link); 
                                    if(books && books.buy_link)
                                    {
                                        Linking.openURL(books.buy_link)
                                    }
                                }}
                                style={[style.btn, {width: '30%',backgroundColor:'#544241'}]}>
                            <Text style={{color:COLOR.white,fontSize:FONT_SIZE.small}}>
                                Buy
                            </Text>
                        </TouchableOpacity>: null}
                        </View>
                    </View>
                </View>
                <View style={{width:'100%'}}>
                    <Text style={{fontSize:14,color:'rgba(48,48,48,.52)',fontWeight:'500', marginTop:HEIGHT*2/100}}>
                        Description
                    </Text>
                    <Text style={{color:'#585858',fontWeight:'500', fontSize: 10,marginTop:5 }}>
                        {books && books.desc ? books.desc : null}
                    </Text>
                </View>
                {book.length!=0 ? <Text style={[style.title,{marginBottom: 5, color: 'rgba(48,48,48,.52)',fontSize:14}]}>All Versions</Text> : null }
                <View style={{flex:1}}>
                    {book ? book.map(( item, index ) =>
                    {
                    return(
                    <View style={style.Box1}>
                        <View style={{ width: '5%', alignItems: "center", marginRight: WIDTH*5/100}}>
                                        <Image style={{ height: 26, width: 26, borderRadius: 5 }} source={require('../../assets/images/bookclose.png')} />
                                    </View>
                        <View style={{width:'74%',}}>
                            <Text style={style.title1}>{item.book}</Text>
                            <Text style={[style.titles]}>{(item.subtitle).length >= 50 ? (item.subtitle).slice(0,50)+'...':item.subtitle}</Text>
                        </View>
                        <View style={{width:'20%',justifyContent:"center",alignItems:'center'}}>
                            <TouchableOpacity 
                                    onPress={() =>props.navigation.push('BookPages',{books: item})}
                                    style={[style.buyBtn,{height:35,width:50}]}>
                                <Text style={style.btntext}>Read</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    )})
                : null}
                </View>
            </View> : null }
            </>
            :
            <View style={{flex: 1, justifyContent:'center', alignContent:'center', backgroundColor:"#ffedd7"}}>
                <Image source={require('../../assets/images/loader.gif')} style={{resizeMode:'stretch', alignSelf:'center'}}/>
            </View>}
           
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    container: {
        width: WIDTH/100*90,
        height: HEIGHT / 100 * 93,
        marginHorizontal: '5%',
        paddingVertical:'5%'
    },
    btn:{
        height:35,
        width:'100%',
        backgroundColor:COLOR.btnColor,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:4,
        marginTop:10,
    },
    title:{
        fontSize:FONT_SIZE.compact,
        color:"#303030",
        fontWeight:FONT_WEIGHT.semibold,
        marginVertical:"8%"
    },
    titles:{
        fontSize: 9,
        color:"#303030",
        fontWeight:FONT_WEIGHT.regular,
        // marginVertical:"8%"
    },
    Box1: {
        // height: HEIGHT / 100 * 10,
        width: '100%',
        marginBottom: HEIGHT / 100 * 1.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'rgba(77, 49, 9, 0.08)',
        borderWidth: 1,
        paddingVertical:10,
        paddingHorizontal: 10,
        borderTopColor: COLOR.primary,
        borderLeftColor: COLOR.primary,
        borderRightColor: COLOR.primary
        // borderRadius: 7,
    },
    content:{
        fontSize:FONT_SIZE.tiny,
        color:'#5C504F'
    },
    title1:{
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.semibold,
        color:'#5C504F'
    },
    buyBtn:{
        height:30,
        width:'45%',
        backgroundColor:COLOR.btnColor,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        marginRight:10
    },
    btntext:{
        fontSize:FONT_SIZE.small,
        color:COLOR.white,
        fontWeight:FONT_WEIGHT.medium
    },
    nav: {
        color: '#A38875',
        fontSize: 14,
        fontWeight: FONT_WEIGHT.semibold
    },
    readBtn:{
        height:35,
        width:'100%',
        backgroundColor:COLOR.btnColor,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:4,
        marginTop:10,
    },
})

const mapStateToProps = ({ authReducer }) => {
    console.log('reducer', authReducer);
    return {
        authReducer: authReducer,
    };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators(ActionCreators, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);