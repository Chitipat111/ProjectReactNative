import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
} from 'native-base';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userStoreContext} from '../context/UserContext'

import HomeScreen from './HomeScreen';

const LoginScreen = ({ navigation }) => {

  const userStore = React.useContext(userStoreContext)

  return (
    <Container>
      <Content padder>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          //login btn
          onSubmit={async (values, { setSubmitting }) => {
            // same shape as initial values
            // console.log(values);
            // alert(JSON.stringify(values));
            try {
              const url = 'https://api.codingthailand.com/api/login';
              const res = await axios.post(url, {
                email: values.email,
                password: values.password,
              });

              // alert(JSON.stringify(res.data));
              // setToken
              await AsyncStorage.setItem('@token',JSON.stringify(res.data));
              //getProfile
              const urlProfile = 'https://api.codingthailand.com/api/profile'
              const resProfile = await axios.get(urlProfile,{
                headers:{
                  Authorization: 'Bearer '+res.data.access_token
                }
              })

              // alert(JSON.stringify(resProfile.data.data.user))
              //set Profile in AsyncStorage
              await AsyncStorage.setItem('@profile',JSON.stringify(resProfile.data.data.user))

              const profile = await AsyncStorage.getItem('@profile')
              userStore.updateprofile(JSON.parse(profile))

              alert('sucess')

              // return home screen
              navigation.navigate(HomeScreen)

            } catch (error) {
              alert(error.response.data.message);
            } finally {
              setSubmitting(false);
            }
          }}>
          {(
            {
              errors,
              touched,
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            } //display error detect or touched on input
          ) => (
            <Form>
              <Item
                fixedLabel
                error={errors.email && touched.email ? true : false}>
                <Label>Email</Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {errors.email && touched.email && <Icon name="close-circle" />}
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{ color: 'red' }}>{errors.email}</Label>
                </Item>
              )}

              <Item
                fixedLabel
                error={errors.password && touched.password ? true : false}>
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                {errors.password && touched.password && (
                  <Icon name="close-circle" />
                )}
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{ color: 'red' }}>{errors.password}</Label>
                </Item>
              )}

              <Button
                block
                large
                style={{ marginTop: 30, backgroundColor: '#32C6E6' }}
                onPress={handleSubmit}
                disabled={isSubmitting}>
                <Text
                  style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
                  Login
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default LoginScreen;
