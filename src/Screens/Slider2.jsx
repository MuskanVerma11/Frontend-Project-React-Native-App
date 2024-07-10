import { View, Text , StyleSheet, ImageBackground, TouchableOpacity, FlatList, Animated} from 'react-native'
import React, { useRef, useState } from 'react'
import { background, primary_Color } from '../Colors'
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function Slider2() {
    const flatListRef=useRef(null);
    const [currentIndex, setCurrentIndex]=useState(0);
    const slides=[
      {
        id:'1',
        image:require('../Assets/first.png'),
        title:"We serve incomparable delicacies",
        subtitle:"All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!"
      },
      {
        id:'2',
        image:require('../Assets/second.png'),
        title:"We serve incomparable delicacies",
        subtitle:"All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!"
      },
      {
        id:'3',
        image:require('../Assets/third.png'),
        title:"We serve incomparable delicacies",
        subtitle:"All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!"
      },
    ]

    const handleNextPage=()=>{
      if(currentIndex<slides.length-1){
        flatListRef.current.scrollToIndex({Animated:true, index:currentIndex+1});
        setCurrentIndex(currentIndex+1);
      }
    }

    const handleScroll = (event) => {
      const index = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
      setCurrentIndex(index);
    };

    const renderItem=({item})=>{
      return(
        <View style={{width:wp(100)}}>
          <ImageBackground source={item.image} style={styles.background}>
          <View style={styles.textContainer}>
              <View style={{alignItems:"center"}}>
              <Text style={styles.heading}>{item.title}</Text>
              <Text style={styles.details}>{item.subtitle}</Text>
              <View style={styles.carouselSlider}>
                  <View style={[styles.slide,{backgroundColor:item.id==='1'?"white":"lightgray"}]}></View>
                  <View style={[styles.slide,{backgroundColor:item.id==='2'?"white":"lightgray"}]}></View>
                  <View style={[styles.slide,{backgroundColor:item.id==='3'?"white":"lightgray"}]}></View>
              </View>
              </View>
              <View style={styles.btnContainer}>
                  <TouchableOpacity>
                      <Text style={[styles.details,{fontWeight:"600"}]}>Skip</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.nextBtn} onPress={handleNextPage}>
                      <Text style={[styles.details,{fontWeight:"600", marginRight:8}]}>Next</Text>
                      <AntDesign name='arrowright' size={18} color={background}/>
                  </TouchableOpacity>
              </View>
          </View>
        </ImageBackground>
        </View>
      )
    }

  return (
    <View style={styles.container}>
      <FlatList
      ref={flatListRef}
      data={slides}
      horizontal={true}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item)=>item.id}
      pagingEnabled
      onScroll={handleScroll}
      scrollEventThrottle={16}/>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    background:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end"
    },
    textContainer:{
        backgroundColor:primary_Color,
        width:wp(80),
        height:hp(55),
        borderRadius:50,
        marginBottom:40,
        alignItems:"center",
        paddingTop:40,
        paddingHorizontal:35,
        justifyContent:"space-between",
        paddingBottom:25
    },
    heading:{
        fontSize:32,
        fontWeight:"600",
        color:"white",
        lineHeight:40,
        textAlign:"center"
    },
    details:{
        color:"white",
        fontWeight:"400",
        fontSize:14,
        lineHeight:20,
        textAlign:"center",
        marginVertical:15
    },
    carouselSlider:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        width:"44%"
    },
    slide:{
        backgroundColor:"lightgray",
        width:30,
        height:6,
        borderRadius:50
    },
    btnContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        verticalAlign:"bottom"
    },
    nextBtn:{
        flexDirection:"row",
        alignItems:"center",
    }
})