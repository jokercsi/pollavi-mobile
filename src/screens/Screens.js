import React from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'

import {AuthContext} from '../Components/context';

//https://www.youtube.com/watch?v=nQVCkqvU1uE&t=1417s

export const SignIn = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
        return (
        <View style={{flex:1}}>
            <Text>Sign In Screen</Text>
            <Button title="Sign In" onPress={() => signIn()} />
            {/* <Button title="Sign In" onPress={() => signIn()} /> */}
            <Button
                title="Create Account"
                onPress={() => navigation.push("CreateAccount")}
            />
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