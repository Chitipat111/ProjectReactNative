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

const validateSchema = Yup.object().shape({
  name: Yup.string().required('กรุณาป้อนชื่อสกุล'),
  email: Yup.string().email('รูปแบบอีเมลไม่ถูกต้อง').required('กรุณากรอกอีกเมลใหม่'),
  password: Yup.string()
    .min(3, 'รหัสผ่านต้อง 3  ตัวขึ้นไป')
    .required('กรุณาป้อนรหัสผ่าน'),
});

const RegisterScreen = () => {
  return (
    <Container>
      <Content padder>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validateSchema}
          //regis btn
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}>
          {(
            { errors, touched, values, handleChange, handleBlur } //display error detect or touched on input
          ) => (
            <Form>
              <Item
                fixedLabel
                error={errors.name && touched.name ? true : false}>
                <Label>Name</Label>
                <Input
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
                {errors.name && touched.name && <Icon name="close-circle" />}
              </Item>
              {errors.name && touched.name && (
                <Item>
                  <Label style={{ color: 'red' }}>{errors.name}</Label>
                </Item>
              )}

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
                {errors.password && touched.password && <Icon name="close-circle" />}
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{ color: 'red' }}>{errors.password}</Label>
                </Item>
              )}

              <Button
                block
                large
                style={{ marginTop: 30, backgroundColor: '#32C6E6' }}>
                <Text
                  style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
                  Register
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
