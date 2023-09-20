import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, StatusBar, View,Alert, Linking, FlatList, TextInput, Modal, ScrollView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import styles from "./styles";
import CustomHeader from "../../component/header/CustomHeader";
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import ReadHeader from "../../component/header/ReadHeader";
import { Bookcontent } from "../../row/data";
import Sarrow from '../../assets/svg/library/Sarrow.svg'
import Sarrow1 from '../../assets/svg/library/Sarrow1.svg'
import Barrow from '../../assets/svg/library/Barrow.svg'
import Barrow1 from '../../assets/svg/library/Barrow1.svg'
import In from '../../assets/svg/library/Put.svg'
import Pdf from 'react-native-pdf';
import { BASE_URL } from "../../utils/filehandler";
// import RenderHtml, { HTMLElementModel, HTMLContentModel } from 'react-native-render-html';
import IframeRenderer, { iframeModel, useHtmlIframeProps, HTMLIframe, } from '@native-html/iframe-plugin';
import RenderHTML from 'react-native-render-html';
import WebView from 'react-native-webview';

// const renderers = {
//     iframe: IframeRenderer
//   };
  
  const customHTMLElementModels = {
    iframe: iframeModel
  };

  const IframeRenderers = function IframeRenderer(props) {
    const iframeProps = useHtmlIframeProps(props);
    // Do customize the props here; wrap with your own container...
    return <HTMLIframe {...iframeProps} />;
  };
  
  const renderers = {
    iframe: IframeRenderers
  };

export default BookPages = (props) =>{
    const [source, setSource] = useState({})
    const [page, setPage] = useState(1)
    const [totalPage, settotalPage] = useState(props.route.params.books.page)
    const [chapter, setChapter] = useState([])
    const [chap, setChap] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [loads, setLoads] = useState('');
    var _pdfRed = useRef(null);
    // const [totalPage, setTotalPage] = useState(0);

    useEffect(()=>{
        var gyu = JSON.parse(props.route.params.books.chapters)
        setChapter(JSON.parse(props.route.params.books.chapters));
        // var chap = 
        if(gyu.length!=0)
        {
            setChap(gyu[0].name);
        }
        // console.log(gyu[0], JSON.parse(props.route.params.books.chapters), props.route.params.books, "BBBBBBBBBBBBB");
        getBooks();
    },[])

    function getBooks() {
        // var source = {}
        fetch(BASE_URL+"getLibrary/"+props.route.params.books._id, {
            method: "POST",
            body: JSON.stringify({
                page: page
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.text())
        .then(json => {
            console.log(json, "JJJJJJJJJJJJJJJJJ")
            setSource("data:application/pdf;base64,"+json);
            // _pdfRed.current.source = {uri:"data:application/pdf;base64,"+json}
            
            var test = `<iframe src="data:application/doc;base64,${json}" style="width:600px; height:500px;" frameborder="0"></iframe>`
            console.log(test, "GGGGGGGGGGGGg");
            setLoads(test)
        })
        // return source
    }


    function pdfs() {
        console.log(loads, "loadsloadsloadsloads")
        console.log(source, "source")
        if(loads!='')
        {
        return(
            <Pdf
                trustAllCerts={false}
                enableRTL={false}
                horizontal={true}
                ref={(ref) => _pdfRed.current = ref}
                enablePaging={true}
                singlePage={true}
                enableAntialiasing={true}
                enableAnnotationRendering={true}
                source={_pdfRed && _pdfRed.current && _pdfRed.current.source || source}
                onLoadComplete={(numberOfPages,filePath) => {

                    console.log(`Number of pages: ${numberOfPages}`, _pdfRed);
                }}
                // onPageChanged={(page,numberOfPages) => {
                //     // setPage(page);
                //     // settotalPage(numberOfPages);
                //     console.log(`Current page: ${page}`, numberOfPages);
                // }}
                // onLoadProgress={(ref)=> {console.log(ref,"KKKKKKKKKKK")}}
                onError={(error) => {
                    console.log(error);
                }}
                // onPressLink={(uri) => {
                //     console.log(`Link pressed: ${uri}`);
                // }}
                // page={1}
                style={{
                    flex:1,
                    width:'100%',
                    // height:HEIGHT,
                }}/>
        
    )
    }
    }

    return(
        <SafeAreaView style={{backgroundColor:COLOR.primary,flex:1}}>
            <StatusBar backgroundColor={COLOR.primary}/>
            {/* <ReadHeader 
                onPress={() => props.navigation.goBack()}
                chapter={'Chap 02'}
                title={'Bhagvat Purana'}/> */}
            <CustomHeader props={props} />
            <ScrollView>
                <View style={style.container}>
                {/* <View style={style.header}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:"center"}}>
                            <Sarrow/>
                            <Text style={[style.chap,{marginLeft:5}]}>Prev Chap</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:"center"}}>
                            <Text style={[style.chap,{marginRight:5}]}>Next Chap</Text>
                            <Sarrow1/>
                        </TouchableOpacity>
                </View>  */}

                    {/* <ScrollView style={{height:HEIGHT/100*70}}>
                        <Text style={style.title}>Lorem Ipsum is simply dummy text</Text>
                        <Text style={style.content}>{Bookcontent.content}</Text>
                    </ScrollView> */}
                    {/* <View style={{flex: 1}}> */}
                    {/* {!loads ?  */}
                    {pdfs()}
                    </View>
                {/* </View> */}
                <View style={{height:HEIGHT/100*13,width:'100%',}}>
                    <View>
                        <View style={[style.header,{backgroundColor:COLOR.btnColor,paddingHorizontal:'3%'}]}>
                            <Text style={[style.chap,{color:'white'}]}>Help us kep this vedic library free</Text>
                            <TouchableOpacity 
                                    onPress={() => props.navigation.push('DonationScreen')}
                                    style={{height:25,width:100,alignItems:'center',justifyContent:'center',backgroundColor:"white"}}>
                                <Text style={[style.chap,{color:'black'}]}>Donate Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',height:HEIGHT/100*8}}>
                        <View style={[style.header,{paddingHorizontal:'3%'}]}>
                            {/* <View style={{flexDirection:"row",alignItems:"center"}}> */}
                                {/* <In/>
                                <TextInput 
                                    /> */}
                                <TouchableOpacity onPress={()=>{setModalVisible(true)}} style={{ borderRadius: 10, backgroundColor: '#eed9bc', alignItems:"center", padding: 10, flexDirection:"row"}}>
                                    <Text style={{color: '#30303085', fontSize: 13}}>{props.route.params.books.book} {'>'} </Text>
                                    <Text style={{color: '#5c504f', fontWeight: 700, fontSize: 12}}>{chap}</Text>
                                </TouchableOpacity>
                            {/* </View> */}

                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <TouchableOpacity onPress={()=>
                                    {
                                        if(page>1)
                                        {
                                            var pag = page
                                            // console.log(chapter.find(x => parseInt(x.page) === pag-1),"NNNNNNNNNNN")
                                            for(var i = 0; i<chapter.length; i++)
                                            {
                                                if(chapter[i].page==pag-1)
                                                {
                                                    var index = chapter.findIndex(x => parseInt(x.page) === pag-1);
                                                    setChap(chapter[index].name)
                                                }
                                            }
                                            setPage(--pag)
                                            getBooks();
                                        }
                                    }
                                    }>
                                    <Barrow1 />
                                </TouchableOpacity>
                                <Text style={style.page}>Page <Text>{page}</Text> of <Text>{totalPage}</Text></Text>
                                <TouchableOpacity onPress={()=>
                                    {
                                        if(page<totalPage)
                                        {
                                            var pag = page
                                            // console.log(chapter.find(x => parseInt(x.page) === pag+1),"NNNNNNNNNNN")
                                            for(var i = 0; i<chapter.length; i++)
                                            {
                                                if(chapter[i].page==pag+1)
                                                {
                                                    var index = chapter.findIndex(x => parseInt(x.page) === pag+1);
                                                    setChap(chapter[index].name)
                                                }
                                            }
                                            setPage(++pag)
                                            getBooks();
                                        }
                                    }
                                    }>
                                    <Barrow />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                        <View style={{height:HEIGHT, backgroundColor:'#ffedd7', borderRadius:0}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={[style.nav,{marginLeft: WIDTH*6/100, fontSize: 22, color: 'rgba(48,48,48,.52)', marginVertical: HEIGHT*2/100, width: WIDTH*80/100}]}>{props.route.params.books.name}</Text>
                                <TouchableOpacity onPress={()=> {setModalVisible(!modalVisible)}}><Image source={require('../../assets/images/cross.png')} /></TouchableOpacity>
                            </View>

                            <View>
                            <ScrollView showsVerticalScrollIndicator={false} style={{ marginVertical: HEIGHT * 2 / 100, marginBottom: HEIGHT * 1 / 100 }} contentContainerStyle={{ flexGrow: 1 }}>
                            {chapter ? chapter.map((item)=>{
                                {
                                    return(
                                        <TouchableOpacity onPress={()=>{setPage(parseInt(item.page)); setModalVisible(!modalVisible);getBooks();}} style={{flexDirection: 'row', marginVertical: HEIGHT*1/100}}>
                                            <Text style={{width: WIDTH*80/100, marginLeft: WIDTH*4/100, fontSize: 16}}>• {item.name}</Text>
                                            <Text style={{width: WIDTH*10/100, color: '#5c504f', textAlign: 'right'}}>{item.page}</Text>
                                        </TouchableOpacity>
                                    )
                                }
                            }) : null }
                            </ScrollView>
                            </View>
                        </View>
                </Modal>

        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    container: {
        width: WIDTH/100*94,
        height: HEIGHT / 100 * 80,
        marginHorizontal: '3%',
        paddingVertical:'1.5%'
    },
    header:{
        height:HEIGHT/100*5,
        width:'100%',
        // backgroundColor:'red',
        alignItems:"center",
        flexDirection:'row',
        justifyContent:'space-between'
    },
    chap:{
        color:"#585858",
        fontSize:FONT_SIZE.small
    },
    page:{
        fontSize:FONT_SIZE.medium,
        fontWeight:FONT_WEIGHT.medium,
        color:COLOR.black,
        marginHorizontal:10
    },
    content:{
        fontSize:FONT_SIZE.compact,
        lineHeight:25,
        fontWeight:FONT_WEIGHT.medium,
    },
    title:{
        fontSize:FONT_SIZE.xl,
        marginVertical:10,
        fontWeight:FONT_WEIGHT.bold,
    },
})