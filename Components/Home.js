import React from 'react';
import { StyleSheet, Text, View,Dimensions,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import userNameOne from './Data/Data';
import { VictoryTheme,VictoryLine,VictoryAxis,VictoryGroup, VictoryChart,} from "victory-native";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const {width,height} = Dimensions.get('window');
//testing Data only 
const DATA = [];
for (let i = 0; i < 4; i++) {
  DATA.push("Value " + i)
}
export default class Home extends React.Component{

Environment = () => {
  return(
      this.props.navigation.navigate('Environments')
  );
}
History = () => {
  return(
      this.props.navigation.navigate('History')
  );
}
Setting= () => {
  return(
      this.props.navigation.navigate('Setting')
  );
}


  constructor(props){
    super(props);
    this.state = {
      index:0,
      carouselItems: [
      {
          title:"Device 1",
          Moisture:'29%',
          temperature:'32°C',
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


_renderItem({item}){
  console.log(item);
  return (
    <SafeAreaView style={styles.itemContainer}>
      <View  style={styles.itemHeader}>
        <Text>{item.title}</Text>
      </View>
      <View  style={styles.itemDataContainer}>
        <Text>Moisture: {item.Moisture}</Text>
        <Text>Temperature: {item.temperature}</Text>
      </View>
      <View style={{position:'absolute', top:50}}>
        <VictoryChart domain={{ x: [0, item.data.length+1], y: [-1,101] }} colorScale={'qualitative'} width={350} height={250}>
          <VictoryGroup >
            <VictoryLine color='skyblue'
              data={item.data} x="time" y="Moisture" 
            />
            <VictoryLine color='red'
              data={item.data} x="time" y="temperature"
            />
          </VictoryGroup>
        </VictoryChart>
      </View>
      
    </SafeAreaView>

  )
}
    render(){
        return (
            <SafeAreaView style={{flex:1 ,justifyContent:'flex-start'}}>
                 <View style={styles.header}>
                    <View style={styles.headerLogo}>
                        <Image source={require('../assets/logo.png')} style={{width:30,height:35}}/>
                     <Text style={styles.logoName}>griSave</Text>
                    </View>
                    <View style={styles.headerNotification}>
                        <Icon name="ios-notifications-outline"size={30}></Icon>
                    </View>
                 </View>
                 <Text style={{paddingLeft:15}}>Lets Get Started</Text>
                 <View style={styles.carouselStyles}>
                   <Carousel
                  ref={ref => this._carousel = ref}
                  loop={true}
                  data={this.state.carouselItems}
                  sliderWidth={width}
                  itemWidth={width}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({index:index}) } />
                  <Pagination
                  dotsLength={this.state.carouselItems.length}
                  activeDotIndex={this.state.index}
                  containerStyle={styles.paginationContainer}
                  dotColor={'#0909'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={"#000"}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                />
                 </View>
                
                 <View style={styles.containerButton}>
                  <TouchableOpacity style={styles.Environment} onPress= {()=>this.Environment()}><Text>Environment Status</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.History} onPress= {()=>this.History()}><Text>History</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.Setting} onPress= {()=>this.Setting()} ><Text>Setting</Text></TouchableOpacity>
                 </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },header:{
    height:55,
    backgroundColor:'#fff',
    elevation:3,
    paddingHorizontal:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderBottomWidth:0.2,

  },headerNotification:{

  },headerLogo:{
    flexDirection:'row',
    alignItems:'center',
  },logoName:{
    fontWeight:'normal',
    fontSize:18,
    fontStyle:'italic',
  },carouselStyles:{
    flex:1,
    paddingTop:10,
  },containerButton:{
    position:'absolute',
    top:height/1.6,
    left:0,
    right:0,
    flex : 1,
    backgroundColor : '#fff',
    borderTopRightRadius : 60,
    borderTopLeftRadius : 60,
    alignItems:'center'
  },Environment:{
    backgroundColor: '#26bf57',
    shadowColor: 'black',
    shadowOffset:{width: 8,  height: 8,},
    shadowOpacity:0.2,
    height:65,
    width:width/2,
    marginHorizontal:40,
    borderRadius:25,
    alignItems: 'center',
    justifyContent:'center',
    marginVertical:8,
  },History:{
    backgroundColor: '#26bf57',
    shadowColor: 'black',
    shadowOffset:{width: 8,  height: 8,},
    shadowOpacity:0.2,
    height:65,
    width:width/2,
    marginHorizontal:40,
    borderRadius:25,
    alignItems: 'center',
    justifyContent:'center',
    marginVertical:8,
  },Setting:{
    backgroundColor: '#26bf57',
    shadowColor: 'black',
    shadowOffset:{width: 8,  height: 8,},
    shadowOpacity:0.2,
    height:65,
    width:width/2,
    marginHorizontal:40,
    borderRadius:25,
    alignItems: 'center',
    justifyContent:'center',
    marginVertical:8,
  },chartContainer:{
    backgroundColor:'floralwhite',
    borderRadius: 5,
    height: 280,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
  },itemContainer:{
    backgroundColor:'white',
    borderRadius: 5,
    width:width-50,
    height: height/2.15,
    padding: 20,
    marginLeft: 25,
    marginRight: 25, 
    borderRadius:7.5,
  },itemDataContainer:{
    paddingHorizontal:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },itemHeader:{
    height:40,
    paddingHorizontal:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderBottomWidth:0.6,
    margin:10
  },paginationContainer:{
    position:'absolute',
    top:height/2.5,
    left:'40%',
    right:'40%',
  }
});


