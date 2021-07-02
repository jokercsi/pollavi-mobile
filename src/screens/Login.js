import React from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'

import {AuthContext} from '../Components/context';

//https://www.youtube.com/watch?v=nQVCkqvU1uE&t=1417s

// Terms of Service
export const ToS = ({ navigation }) => {
    return (
        <View style={{flex:1 , flexDirection:"column"}}>
            <View style={styles.tosImage}>

            </View>
            <View style={styles.tosText}>
                <Text>당신의 모든 생각, 폴라비와 함께</Text>
            </View>
            <View style={styles.tosButton}>
                <Button title="동의하고 시작" onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    );
}

export const SignIn = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
        return (
        <View style={{flex:1, flexDirection:"column"}}>
            <View style={styles.signInImage}>
                <Text>Sign In Screen</Text>
            </View>
            <View style={styles.signInButton}>
                <Button title="Sign In" onPress={() => signIn()} />
                <Button
                    title="Create Account"
                    onPress={() => navigation.push("CreateAccount")}/>
            </View>
        </View>
    );
}

export const CreateAccount = () => {
    const { signUp } = React.useContext(AuthContext);
    return (
        <View>
            <Text>Create Account Screen</Text>
            <Button title="Sign Up" onPress={() => signUp()} />
        </View>
    );
  };

export const Profile = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext);
    return (
      <View>
        <Text>프로필</Text>
        <Button title="Sign Out" onPress={() => signOut()} />
      </View>
    );
};


const styles = StyleSheet.create({
    // tos
    tosImage :{
        flex:2,
        backgroundColor:"#f22"
        
    },
    tosText :{
        flex:1.5,
        backgroundColor:"#2ac"
    },    
    tosButton :{
        flex:0.5,
        backgroundColor:"#ca2"
    },    

    // signIn
    signInImage :{
        flex:1,
        backgroundColor:"#f22"
        
    },
    signInButton :{
        flex:1,
        backgroundColor:"#ca2"
    }


})