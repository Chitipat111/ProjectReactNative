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
  //useEffect
  useEffect(() => {
    // getData() for get data from baclend
    const getData = async () => {
      const res = await axios.get('https://api.codingthailand.com/api/course')
      // alert(JSON.stringify(res.data.data))
      setProduct(res.data.data);
    }

    getData();

  },[])

  return (
    <View style={styles.container}>
      <FlatList
        // ใช้สำหรับวนรอบแสดงข้อมูลใน backend
        data={product}
        //keyExtractor = main key
        keyExtractor = {(item,index) => item.id.toString()}
        //renderItem for render UI to user
        renderItem={({item})=>(
          <ListItem thumbnail>
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