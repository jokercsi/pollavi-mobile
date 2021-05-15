import React from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'

import {AuthContext} from '../Components/context';

export const Profile = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext);
  
    return (
      <View>
        <Text>Profile Screen</Text>
        <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
        <Button title="Sign Out" onPress={() => signOut()} />
      </View>
    );
};


export const SignIn = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
        return (
        <View>
            <Text>Sign In Screen</Text>
            <Button title="Sign In" onPress={() => signIn()} />
            {/* <Button title="Sign In" onPress={() => signIn()} /> */}
            <Button
                title="Create Account"
                onPress={() => alert("to do")}
            />
            {/* <Button
                title="Create Account"
                onPress={() => navigation.push("CreateAccount")}
            /> */}
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