import React,{useState,useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator,FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Badge } from 'native-base';
import axios from 'axios';

import {useFocusEffect} from '@react-navigation/native'

const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} color='white' {...props} />
);

const ProductScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => alert('ลงทะเบียน')}
          />
        </HeaderButtons>
      ),  
    });
  }, [navigation]);

  //useState
  const [product,setProduct] = useState([]);
  const [loading,setLoading] = useState(false);

  let cancelToken;

  // getData() for get data from baclend
  const getData = async () => {
    setLoading(true);
    const res = await axios.get('https://api.codingthailand.com/api/course',{
      cancelToken : cancelToken.token
    })
    // alert(JSON.stringify(res.data.data))
    setProduct(res.data.data);
    setLoading(false);
  }

  // ทุกครั้งที่เข้าหนัาโปรดักจะให้ดึงข้อมูลทุกรอบที่เข้าใช้งาน
  useFocusEffect(
    //usecallBack for optimize fuction for not re-render of child component
    React.useCallback(() => {
      cancelToken = axios.CancelToken.source();
      getData();

      return()=>{
        // alert('Exit ProductScreen');
        cancelToken.cancle();
      }

    },[])
  )

  //useEffect ดึงข้อมูลรอบเดียว
  // useEffect(() => {
  //   getData();
  // },[])

  if(loading===true){
    return(
      <View style={styles.container}>
        <ActivityIndicator color='blue' size='large'/>
      </View>
    )
  }

  const _onRefresh = () =>{
    getData();
  }

  return (
    <View>
      <FlatList
        // ใช้สำหรับวนรอบแสดงข้อมูลใน backend
        data={product}
        //keyExtractor = main key
        keyExtractor = {(item,index) => item.id.toString()}
        //pull to refresh
        onRefresh={_onRefresh}
        refreshing={loading} // ถ้าเป็นจริง จะให้รีเฟรชข้อมูล ing
        //renderItem for render UI to user
        renderItem={({item})=>(
          <ListItem thumbnail onPress = {()=>{
            navigation.navigate('DetailScreen',{
              id:item.id,
              title:item.title //set value to variable from api
            })
          }}>
              <Left>
                <Thumbnail square source={{ uri: item.picture }} />
              </Left>
              <Body>
                <Text>{item.title}</Text>
                <Text note numberOfLines={1}>{item.detail}</Text>
              </Body>
              <Right>
                <Badge danger>
                  <Text>{item.view}</Text>
                </Badge>
              </Right>
            </ListItem>
        )}


      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});