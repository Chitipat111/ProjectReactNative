import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Logo = () =>{

    const title = 'TNI*Logo*';
    const isTitle = true;

    const showData = () => <Text>Hello December*Logo*</Text>

    return(
        <View>
            <Text style = {{color:'blue',fontSize:20}}>Thai-Nichi*Logo*</Text>
            {
                isTitle === true && <Text>{title}</Text>
            }
            {
                isTitle === true?<Text>{title}</Text>:<Text>Thai-Nichi*Logo*</Text>
            }
            {
                showData()
            }
        </View>
    );
};

export default Logo

const style = StyleSheet.create({})