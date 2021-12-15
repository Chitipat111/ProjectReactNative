import React, {useState,useEffect}from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Footer = () => {

    const users = [
        {id:1, name:'John*Footer*'},
        {id:2, name:'Xina*Footer*'}
    ]

    const[count,setCount] = useState(0); 

    useEffect(() => {
        console.log('output use effect 1')
    })

    useEffect(() => {
        console.log('output use effect 2')
    },[])

    useEffect(() => {
        console.log('output use effect 3')
    }, [count])

    return (
        <View>
            <Text style = {styles.title}>Thai-Nichi Institute of Technology {count}</Text>
            {
                users.map((user,index)=>{
                    return <Text key={user.id}>{index+1} {user.name}</Text>
                })
            }
            <Button title='Click Footer' onPress = {()=>{
                // setCount(5)
                setCount(count+1)
            }}/>
        </View>        
    )
}

export default Footer

const styles = StyleSheet.create({
    title:{
        fontSize:25,
    }
})
