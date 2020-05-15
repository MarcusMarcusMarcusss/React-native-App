import React from 'react';
import { StyleSheet, Text, View,Dimensions,SafeAreaView,TouchableOpacity,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Carousel from 'react-native-snap-carousel';
import Moment from 'moment';
import TimeLine from './Data/timeline';
import Timeline from './Data/timeline';
const {width,height} = Dimensions.get('window');

export default class History extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      lastRefreshTime:Moment().format('MMMM Do YYYY, h:mm:ss a').toString(),
      carouselItems: [
        {
            title:"Device 1",
            Moisture:'29%',
            temperature:'32°C',
            Coordinates: {
              latitude: -31.978322,
              longitude: 115.857048,
              latitudeDelta: 0.06141,
              longitudeDelta: 0.0121,
            },
            timeInMillionSeconds:Moment(1588614137494).format('DD/MM/YYYY, h:mm:ss a').toString(),
        },
        {
            title:"Device 2",
            Moisture:'24%',
            temperature:'27°C',
            Coordinates: {
              latitude: -31.978322,
              longitude: 115.857048,
              latitudeDelta: 0.06141,
              longitudeDelta: 0.0121,
            },
            timeInMillionSeconds:Moment(1588614137494).format('DD/MM/YYYY, h:mm:ss a').toString(),

        },
        {
            title:"Device 3",
            Moisture:'23%',
            temperature:'23°C',
            Coordinates: {
              latitude: -31.978322,
              longitude: 115.857048,
              latitudeDelta: 0.06141,
              longitudeDelta: 0.0121,
            },
            timeInMillionSeconds:Moment(1588614137494).format('DD/MM/YYYY, h:mm:ss a').toString(),

        },
        {
            title:"Device 4",
            Moisture:'27%',
            temperature:'22°C',
            Coordinates: {
              latitude: -31.978322,
              longitude: 115.857048,
              latitudeDelta: 0.06141,
              longitudeDelta: 0.0121,
            },
            timeInMillionSeconds:Moment(1588614137494).format('DD/MM/YYYY, h:mm:ss a').toString(),
        },
        {
            title:"Device 5",
            Moisture:'33%',
            temperature:'17°C',
            Coordinates: {
              latitude: -31.978322,
              longitude: 115.857048,
              latitudeDelta: 0.06141,
              longitudeDelta: 0.0121,
            },            
            timeInMillionSeconds:Moment(1588614137494).format('DD/MM/YYYY, h:mm:ss a').toString(),
        },
      ]
    };
  }
  goBack = () => {
    return(
        this.props.navigation.navigate('Home')
    );
  }
  goToNotification =() =>{
    return(
      this.props.navigation.navigate('Setting')
    );
  }
 

  _renderItem1({item,index}){
    //using index only for testing purpose, check if both carousel have the same index
return (
  <View style={{
      backgroundColor:'white',
      marginLeft: 35,
      borderRadius:7,
      width:60,
      height:60,
      alignItems:'center',
      marginTop:10,
      }}>
      <Image source={require('../assets/logo.png')} style={{width:60,height:60}}/>
    <Text style={{fontSize: 13,marginTop:4}}>{item.title}</Text>
  </View>
)
}



    render(){
        return (
                <SafeAreaView style={{flex:1 ,justifyContent:'flex-start'}} >
                
                  <View style={styles.backgroundColor}>
                    <View style={styles.header}>
                      <TouchableOpacity style={styles.goBackIcon} onPress= {()=>this.goBack()}>
                        <Ionicons name="ios-arrow-back"size={35} color={'white'} ></Ionicons>
                        <Text style={{fontStyle:'italic',fontSize:16,color:'white'}}> History</Text>
                      </TouchableOpacity>
                    <View style={styles.notificationIcon}>
                    <Ionicons name="ios-notifications-outline"size={30} color={'white'} onPress= {()=>this.goToNotification()}></Ionicons>
                    </View>
                    </View>
                    <Text style={styles.headerText}>History</Text>
 
                    <Carousel style={styles.deviceIconAndCard}
                      contentContainerCustomStyle={{ width: 300 * 4}}
                      ref={ref => this.carousel1 = ref}
                      data={this.state.carouselItems}
                      removeClippedSubviews={false}
                      sliderWidth={400}
                    itemWidth={90}
                    renderItem={this._renderItem1}/>
                  </View>
                  <View style={{flex:1 ,justifyContent:'center'}}>
                    <Timeline></Timeline>
                  </View>
                </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },backgroundColor:{
    backgroundColor:"#26bf57",
    borderBottomLeftRadius:90,
    height:height/3.5,
  },header:{
    height:55,
    backgroundColor:'#26bf57',
    paddingHorizontal:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },headerText:{
    fontSize:24,
    paddingLeft:15,
    color:'white',
  },itemMainContainer:{
    backgroundColor:'white',
    borderRadius: 5,
    height: height/1.6,
    padding: 50,
    marginLeft: 25,
    marginRight: 25, 
    paddingTop:20,
  },contentContainer:{
    marginTop:35 
  },itemHeaderContainer:{
    borderBottomColor:'#F5F5F5',
    elevation: 2,
    marginBottom:3,
    height:55,
    borderBottomWidth:1,
    paddingHorizontal:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },headerLogo:{
    flexDirection:'row',
    alignItems:'center',
  },logoName:{
    color:'#fff'
  },goBackIcon:{
    flexDirection:'row',
    alignItems:'center'
  },
});


