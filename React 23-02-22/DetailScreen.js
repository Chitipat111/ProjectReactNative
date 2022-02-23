import {StyleSheet, View, ActivityIndicator,FlatList} from 'react-native';
import React,{useState,useEffect} from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Badge } from 'native-base';
import axios from 'axios';

const DetailScreen = ({navigation,route}) => {
  
  const {id, title} = route.params;
  
  React.useLayoutEffect(()=>{
    navigation.setOptions({
      title:'รายละเอียดสินค้า'
    })    
  },[navigation])

  const [detail,setDetail] = useState([]);
  const [loading,setLoading] = useState(false);

  // getData() for get data from baclend
  const getData = async (id) => {
    setLoading(true);
    const res = await axios.get('https://api.codingthailand.com/api/course/'+id)
    
    setDetail(res.data.data);
    setLoading(false);
  }

  useEffect(() => {
    getData(id);
  },[id])

  const _onRefresh = () =>{
    getData(id);
  }

  return (
    <View>
      <FlatList
        data={detail}
        keyExtractor = {(item,index) => item.ch_id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={({item,index})=>(
          <ListItem thumbnail>
              <Left>
                <Text>{index+1}</Text>
              </Left>
              <Body>
                <Text>{item.ch_title}</Text>
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

export default DetailScreen;

const styles = StyleSheet.create({});