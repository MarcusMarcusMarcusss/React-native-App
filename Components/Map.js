import React from 'react';
import {View,StyleSheet,Text,Dimensions,Image,TouchableOpacity } from 'react-native';
import MapView,{ PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import RetroMapStyles from './MapStyles/RetroMapStyles.json'
import Carousel from 'react-native-snap-carousel';
import openMap,{createOpenLink} from 'react-native-open-maps';
import Moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
let { width, height } = Dimensions.get('window');

const LATITUDE = -31.953322;
const LONGITUDE = 115.857048;
const LATITUDE_DELTA = 0.1452;
const ASPECT_RATIO = width / height;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default class Maps extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
          markerCoordinates:[
            {name:'0',latitude:-31.943322,longitude:115.857048,description: "Device One",Moisture: "29%",Temperature:"32°C"},
            {name:'1',latitude:-31.973142,longitude:115.857048,description: "Device Two",Moisture: "24%",Temperature:"27°C"},
            {name:'2',latitude:-31.967322,longitude:115.827048,description: "Device Three",Moisture: "23%",Temperature:"23°C"},
            {name:'3',latitude:-31.923362,longitude:115.847048,description: "Device Four",Moisture: "27%",Temperature:"22°C"},
            {name:'4',latitude:-31.925362,longitude:115.857048,description: "Device Five",Moisture: "33%",Temperature:"17°C"},
            ],
            markers:[]
        };
      }
      goBack = () => {
        return(
            this.props.navigation.navigate('Environments')
        );
      }

      _renderCallOut=()=>{
          if (this.state.markerCallOutIsRendered === true) return;
          this.setState({markerCallOutIsRendered:true});
          let index = 0;
          let indexOne = this.props.route.params.index ? this.props.route.params.index:0;
          console.log(indexOne);
          let location = this.state.markerCoordinates[indexOne];
          this._map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0293,
            longitudeDelta: 0.0355
          })
          this.state.markers[indexOne].showCallout();
          this._carousel.snapToItem(indexOne);
      }

      onMarkerClick=(location,index)=>{
        this._map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0293,
            longitudeDelta: 0.0355
          })

          this._carousel.snapToItem(index);      
        }
        
      cardSetMarkerChange=(index)=>{
          let location = this.state.markerCoordinates[index];
          this._map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0793,
            longitudeDelta: 0.0155
          })
          this.state.markers[index].showCallout()
      }

      _renderItem=({item}) =>
      <View style={styles.cardContainer}>
            <View style={{borderBottomWidth:0.6,flexDirection:'row',justifyContent:'space-between',alignItems:'center',alignContent:'center',height:40}}>
                <Text style={styles.cardTitle}>{item.description}</Text>
                <TouchableOpacity onPress={createOpenLink({ latitude: item.latitude, longitude: item.longitude, provider:'google',zoom: 0,query: item.description,zoom:30})} style={{borderRadius:25,backgroundColor:'skyblue',justifyContent:'center',alignItems:'center',width:80,height:25}}><Text>Direction</Text></TouchableOpacity>
            </View>
          
          <View style={styles.cardInfo}>
            <View style={styles.cardValue}>
                <Text>Moisture</Text>
                <Text>{item.Moisture}</Text>
            </View>
            <View style={styles.cardValue}>
                <Text>Temperature</Text>
                <Text>{item.Temperature}</Text>
            </View>
          </View>
      </View>


      
    render(){

        return(
            <View style={{...StyleSheet.absoluteFill}}>
                <MapView
                ref={(map) => this._map = map}
                style={{...StyleSheet.absoluteFill}}
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                customMapStyle={RetroMapStyles}
                region={this.state.region}
                onRegionChangeComplete={() => this._renderCallOut()}
                >
                    {this.state.markerCoordinates.map((marker,index) => (
                    <Marker
                    onPress={()=> this.onMarkerClick(marker,index)}
                    ref={ref => this.state.markers[index] = ref}
                    key={marker.name}
                    coordinate={{latitude: marker.latitude,longitude: marker.longitude}}
                    title={marker.title}
                    description={marker.description}
                    />
                    ))}
                </MapView>
                <TouchableOpacity onPress={()=> this.goBack()} style={{position:'absolute',top:30,right:15, borderRadius:50,backgroundColor:'#fff',width:30,height:30,justifyContent:'center',alignItems:"center",elevation:3,opacity:0.8}}><Text style={{fontSize:22,fontStyle:'normal',fontWeight:'300',fontFamily:'Arial'}}>X</Text></TouchableOpacity>
                <View style={styles.carouselStyles}>
                    <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.markerCoordinates}
                    renderItem={this._renderItem}
                    sliderWidth={width}
                    itemWidth={300}
                    onSnapToItem ={(index) => this.cardSetMarkerChange(index)}
                    //scrollEnabled={false}
                    removeClippedSubviews={false}
                    firstItem={0}
                    initialNumToRender={this.state.markerCoordinates.length}/> 

                </View>
            </View>
        );
    }
}
const styles= StyleSheet.create({
    container:{
        marginLeft:10,
        marginTop:10,
        marginRight:10,
        marginBottom:10,
        color: 'black',
        fontSize: 18,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent:'center',
    },carouselStyles:{
        position:'absolute',
        bottom:0,
        marginBottom:10,
    }, infoStyles:{
        position:'absolute',
        width:120,
        height:150,
        bottom:0,
        left:20,
        marginBottom:215,
        backgroundColor:'#eee',
        borderRadius:25,
        opacity:0.4,
    },cardContainer:{
        //rgba(0,0,0,0.5)
        backgroundColor:'rgba(255,255,255,0.9)',
        height:200,
        width:300,
        padding:20,
        borderRadius:30,
    },cardImage:{
        height:120,
        width:300,
        bottom:0,
        position:"absolute",
        overflow:'hidden',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },cardTitle:{
        color: 'black',
        fontSize: 22,
        alignSelf: 'center'
    },cardValue:{
        borderWidth:4,
        borderColor:'#F3F3F3',
        height:65,
        marginHorizontal:20,
        marginVertical:3,
        borderRadius:25,
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },cardInfo:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
    }
        
    
})