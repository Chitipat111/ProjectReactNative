import React from 'react'
import { StyleSheet, Text, View,Alert,SafeAreaView,Button } from 'react-native'

const AlertExample = () => {

    const simpleAlertHadler = ()=>{
        alert('Alert (JS)')
    }

    const twoOptiontHadler = ()=>{
        Alert.alert(
            'Alert title (React)',
            'Alert Message',
            [
                {
                    text: "NO", 
                    onPress: () => console.log("No Pressed")
                },
                {
                    text: "Yes", 
                    onPress: () => console.log("Yes Pressed")
                },
            ],{cancelable:false}
        )
    }

    const threeOptiontHadler = ()=>{
        Alert.alert(
            'Alert title (React)',
            'Alert Message',
            [
                {
                    text: "MAY BE", 
                    onPress: () => console.log("May be Pressed")
                },
                {
                    text: "NO", 
                    onPress: () => console.log("No Pressed")
                },
                {
                    text: "Yes", 
                    onPress: () => console.log("Yes Pressed")
                },
            ],{cancelable:true}
        )
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Button title='Simple Alert (JS)' onPress={simpleAlertHadler}/>
                <Button title='Two Alert (React)' onPress={twoOptiontHadler}/>
                <Button title='Three Alert (React)' onPress={threeOptiontHadler}/>
            </View>
        </SafeAreaView>
    );
};

export default AlertExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
});
