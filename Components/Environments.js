import React from 'react';
import { StyleSheet, Text, View,Dimensions,SafeAreaView, ScrollView, RefreshControl,Image,TouchableOpacity,Button} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MapView,{ PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import Moment from 'moment';

const {width,height} = Dimensions.get('window');
function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default class Environments extends React.Component{

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
            data:[
              { temperature: 9, Moisture: 23 ,time: '3 am'},
              { temperature: 13, Moisture: 32 ,time: '4 am'},
              { temperature: 14, Moisture: 43 ,time: '5 am'},
              { temperature: 15, Moisture: 41 ,time: '6 am'},
              { temperature: 18, Moisture: 37 ,time: '7 am'},
              { temperature: 21, Moisture: 34 ,time: '8 am'},
              { temperature: 23, Moisture: 28 ,time: '9 am'},
              { temperature: 27, Moisture: 22 ,time: '10 am'},
              { temperature: 31, Moisture: 27 ,time: '11 am'},
              { temperature: 32, Moisture: 45 ,time: '12 pm'},
              { temperature: 25, Moisture: 47 ,time: '13 pm'},
              { temperature: 32, Moisture: 42 ,time: '14 pm'},
            ],
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
            data:[
              { temperature: 9, Moisture: 23 ,time: '3 am'},
              { temperature: 13, Moisture: 32 ,time: '4 am'},
              { temperature: 14, Moisture: 43 ,time: '5 am'},
              { temperature: 15, Moisture: 41 ,time: '6 am'},
              { temperature: 18, Moisture: 37 ,time: '7 am'},
              { temperature: 21, Moisture: 34 ,time: '8 am'},
              { temperature: 23, Moisture: 28 ,time: '9 am'},
              { temperature: 27, Moisture: 22 ,time: '10 am'},
              { temperature: 31, Moisture: 27 ,time: '11 am'},
              { temperature: 32, Moisture: 45 ,time: '12 pm'},
              { temperature: 25, Moisture: 47 ,time: '13 pm'},
              { temperature: 32, Moisture: 42 ,time: '14 pm'},
            ],

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
            data:[
              { temperature: 9, Moisture: 23 ,time: '3 am'},
              { temperature: 13, Moisture: 32 ,time: '4 am'},
              { temperature: 14, Moisture: 43 ,time: '5 am'},
              { temperature: 15, Moisture: 41 ,time: '6 am'},
              { temperature: 18, Moisture: 37 ,time: '7 am'},
              { temperature: 21, Moisture: 34 ,time: '8 am'},
              { temperature: 23, Moisture: 28 ,time: '9 am'},
              { temperature: 27, Moisture: 22 ,time: '10 am'},
              { temperature: 31, Moisture: 27 ,time: '11 am'},
              { temperature: 32, Moisture: 45 ,time: '12 pm'},
              { temperature: 25, Moisture: 47 ,time: '13 pm'},
              { temperature: 32, Moisture: 42 ,time: '14 pm'},
            ],

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
            data:[
              { temperature: 9, Moisture: 23 ,time: '3 am'},
              { temperature: 13, Moisture: 32 ,time: '4 am'},
              { temperature: 14, Moisture: 43 ,time: '5 am'},
              { temperature: 15, Moisture: 41 ,time: '6 am'},
              { temperature: 18, Moisture: 37 ,time: '7 am'},
              { temperature: 21, Moisture: 34 ,time: '8 am'},
              { temperature: 23, Moisture: 28 ,time: '9 am'},
              { temperature: 27, Moisture: 22 ,time: '10 am'},
              { temperature: 31, Moisture: 27 ,time: '11 am'},
              { temperature: 32, Moisture: 45 ,time: '12 pm'},
              { temperature: 25, Moisture: 47 ,time: '13 pm'},
              { temperature: 32, Moisture: 42 ,time: '14 pm'},
            ],
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
            data:[
              { temperature: 9, Moisture: 23 ,time: '3 am'},
              { temperature: 13, Moisture: 32 ,time: '4 am'},
              { temperature: 14, Moisture: 43 ,time: '5 am'},
              { temperature: 15, Moisture: 41 ,time: '6 am'},
              { temperature: 18, Moisture: 37 ,time: '7 am'},
              { temperature: 21, Moisture: 34 ,time: '8 am'},
              { temperature: 23, Moisture: 28 ,time: '9 am'},
              { temperature: 27, Moisture: 22 ,time: '10 am'},
              { temperature: 31, Moisture: 27 ,time: '11 am'},
              { temperature: 32, Moisture: 45 ,time: '12 pm'},
              { temperature: 25, Moisture: 47 ,time: '13 pm'},
              { temperature: 32, Moisture: 42 ,time: '14 pm'},
            ],
        },
      ]
    };
  }

  viewOnMap=(index)=>{
    return(
      this.props.navigation.navigate('Map',{index:index})//,
      //console.log('Pass index data :'+index)
  );
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
 
  _onRefresh = () => {
    this.setState({refreshing: true});
    wait(1000).then(() => {
      this.setState({refreshing: false,lastRefreshTime:Moment().format('MMMM Do YYYY, h:mm:ss a').toString()});
    });
  }

  _cardSetCardsChangeCard=(index)=>{
      this.carousel2.snapToItem(index);  
      //console.log(index);
    }
    _cardSetCardsChangeMain=(index)=>{
      this.carousel1.snapToItem(index);     //console.log(index);

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



  _renderItem2({item,index}){
    const {navigation} =this.props
    //using index only for testing purpose, check if both carousel have the same index
    return (
      <View style={{
          backgroundColor:'white',
          borderRadius: 25,
          height: height/1.7,
          marginLeft: 25,
          marginRight: 25,
          overflow:'hidden',
          }}>
          <View style={styles.itemHeaderContainer}>
            <Text style={{color:'#26bf57',fontWeight:'bold', fontSize:18,}}>{item.title}</Text>
            <SimpleLineIcons name="settings"size={25} color={'black'} style={{opacity:0.5}} ></SimpleLineIcons>
          </View>
          <View style={styles.dataContainer}>
              <View style={styles.moistureData}>
                <Text  style={{fontSize:14}}>Moisture</Text>
                <Text style={{color:'#00651F'}}>{item.Moisture}</Text>
              </View>
              <View style={styles.temperatureData}>
              <Text style={{fontSize:14}}>Temperature</Text>
                <Text style={{color:'#00651F'}}>{item.temperature}</Text>
              </View>
              <View style={styles.mapContainer}>
                <MapView
                style={{...StyleSheet.absoluteFill,borderRadius:25}}
                provider={PROVIDER_GOOGLE}
                region={item.Coordinates}
                />
                <View style={styles.coverMapContainer}/>
                <View style={styles.mapButton}>
                  <Button
                  title="View On Map"
                  color="#FFF"
                  onPress={()=>this.viewOnMap(index)}
                  />
                </View>
                 
              </View>
                <View style={styles.showCurrentStatusInfo}>
                  <Text>{item.timeInMillionSeconds}</Text>
                </View>
          </View>
      </View>
  
    )
  }


    render(){
      




          return (
                <SafeAreaView style={{flex:1 ,justifyContent:'flex-start'}}>
                <View style={styles.backgroundColor}>
                    <View style={styles.header}>
                      <TouchableOpacity style={styles.goBackIcon} onPress= {()=>this.goBack()}>
                        <Ionicons name="ios-arrow-back"size={35} color={'white'} ></Ionicons>
                        <Text style={{fontStyle:'italic',fontSize:16,color:'white'}}> DashBoard</Text>
                      </TouchableOpacity>
                    <View style={styles.notificationIcon}>
                    <Ionicons name="ios-notifications-outline"size={30} color={'white'} onPress= {()=>this.goToNotification()}></Ionicons>
                    </View>
                    </View>
                    <Text style={styles.headerText}>Environments</Text>
 
                    <Carousel style={styles.deviceIconAndCard}
                      contentContainerCustomStyle={{ width: 300 * 4}}
                      ref={ref => this.carousel1 = ref}
                      data={this.state.carouselItems}
                      removeClippedSubviews={false}
                      sliderWidth={400}
                    itemWidth={90}
                    renderItem={this._renderItem1}
                    onSnapToItem ={(index) => this._cardSetCardsChangeCard(index)} />

                </View>

                <ScrollView style={styles.contentContainer}
                  refreshControl={<RefreshControl
                      refreshing={this.state.refreshing} onRefresh={this._onRefresh} title={'Last Loading Time: '+this.state.lastRefreshTime}/>}>
                <Carousel style={styles.carouselContentView}
                  ref={ref => this.carousel2 = ref}
                  data={this.state.carouselItems}
                  containerCustomStyle={styles.itemDataContainer}
                  sliderWidth={width}
                  itemWidth={width}
                  renderItem={this._renderItem2.bind(this)}
                  onSnapToItem ={(index) => this._cardSetCardsChangeMain(index)} />
                </ScrollView>
                </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  },dataContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:8,
  },moistureData:{
    borderWidth:2,
    borderColor:'#F3F3F3',
    height:65,
    width:300,
    marginHorizontal:40,
    borderRadius:25,
    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:40,
  },temperatureData:{
    borderWidth:2,
    borderColor:'#F3F3F3',
    height:65,
    width:300,
    marginHorizontal:40,
    marginVertical:8,
    borderRadius:25,
    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:40,
  },mapContainer:{
    marginVertical:8,
    height:130,
    width:300,
    borderRadius:25,
    alignItems: 'center',
    justifyContent: 'center',
  },coverMapContainer:{
    position:'absolute',
    height:130,
    width:300,
    backgroundColor:'#000',
    opacity:0.1,
    borderRadius:25,
  },mapButton:{
    position:'absolute',
    backgroundColor:'#04374F',
    borderRadius:25,
    width:120,
    alignItems:'center',
    justifyContent:'center',
    opacity:0.85
  },showCurrentStatusInfo:{
    justifyContent:'flex-start',
    paddingLeft:40,
    overflow:'hidden',
    width:width,
    height:30,
  }
  
});


