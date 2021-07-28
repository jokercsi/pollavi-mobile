import React from 'react'
import {useState} from "react";
import {Text, View, StyleSheet, Button, ImageBackground, TouchableOpacity ,TextInput } from 'react-native'

import {AuthContext} from '../Components/context';
import Icon from 'react-native-vector-icons/FontAwesome5';

//체크박스 참고자료
//https://www.youtube.com/watch?v=6VYQLa8OyMw
import CheckBox from '@react-native-community/checkbox';


//프로필 사진 업로드하기
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



//https://www.youtube.com/watch?v=nQVCkqvU1uE&t=1417s

// Terms of Service
export const ToS = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={{flex:1 , flexDirection:"column"}}>
            <View style={styles.tosHeader}>
                <ImageBackground
                    style={{ resizeMode:"cover" , flex: 1, justifyContent: "center" }}
                    source={require('../assets/images/ToS.png')}
                />
            </View>
            <View style={styles.tosContent}>
                <Text style={styles.tosText}>당신의 모든 생각,{"\n"}폴라비와 함께</Text>
                <View style={styles.tosCheckBoxContainer}>
                    <CheckBox
                        tintColors={{ true: '#C64DF7', false: '#D9D8D8' }}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={[styles.tosCheckBoxText, {fontWeight:"bold"}]}>약관 전체 동의</Text>
                </View>
                <View style={styles.tosCheckBoxContainer}>
                    <CheckBox
                        boxType={'circle'}
                        tintColors={{ true: '#C64DF7', false: '#D9D8D8'}}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={styles.tosCheckBoxText}>이용 약관 동의 (필수)</Text>
                </View>
                <View style={styles.tosCheckBoxContainer}>
                    <CheckBox
                        tintColors={{ true: '#C64DF7', false: '#D9D8D8' }}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={styles.tosCheckBoxText}>개인 정보 수집 및 이용동의 (필수)</Text>
                </View>

            </View>
            <View style={styles.tosFooter}>
                <TouchableOpacity 
                    style={[styles.loginButton, {backgroundColor:toggleCheckBox ? '#C64DF7' : '#D9D8D8'}]} 
                    onPress={() => navigation.navigate('Login')}
                    disabled={!toggleCheckBox}>
                    <Text style={styles.loginButtonText}>다음</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export const SignIn = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
        return (
        <View style={{flex:1, flexDirection:"column"}}>
            <View style={styles.signInImage}>
                <ImageBackground
                    style={{ resizeMode:"cover" , flex: 1,  margin:50  }}
                    source={require('../assets/images/pollavi1.png')}
                >
                    <Text style={{textAlign:"center", fontWeight:"bold", fontSize:18, color:"#090240"}}>Show Your View</Text>
                </ImageBackground>
            </View>
            <View style={styles.signInButton}>
                <TouchableOpacity
                    style={styles.loginButton} 
                    onPress={() => signIn()}>
                    <Text style={styles.loginButtonText}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.loginButton} 
                    onPress={() => navigation.push("Email")}>
                    <Text style={styles.loginButtonText}>회원가입</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export const Email = ({ navigation }) => {
    const [text, setText] = useState('');
    return (
        <View style={{flex:1}}>
            <View style={{flex:1.5 , justifyContent:'center', marginHorizontal:15}}>
                <Text style={styles.loginTitle}>이메일을 입력해주세요</Text>
                <Text style={styles.loginSubtitle}>로그인 및 회원가입에 필요합니다</Text>
            </View>
            <View style={{flex:3.5}}>
                <TextInput
                    style={styles.input}
                    placeholder='welcome@pollavi.com'
                    autoCapitalize="none"
                    placeholderTextColor='gray'
                    textContentType={'emailAddress'}
                    underlineColorAndroid={'transparent'}
                    maxLength={40}
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                    keyboardType={"email-address"}
                />
            </View>
            <View style={{flex:1}}>
                <TouchableOpacity
                    style={[styles.loginButton, , {backgroundColor:text ? '#C64DF7' : '#D9D8D8'}]} 
                    onPress={() => navigation.push("Password")}
                    disabled={!text}>
                    <Text style={styles.loginButtonText}>확인</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export const Password = ({ navigation }) => {
    const [text, setText] = useState('');
    const [hidePass, setHidePass] = useState(true);

    return (
        <View style={{flex:1}}>
            <View style={{flex:1.5 , justifyContent:'center', marginHorizontal:15}}>
                <Text style={styles.loginTitle}>비밀번호을 입력해주세요</Text>
                <Text style={styles.loginSubtitle}>최소 8자리 이상 : 영어 대문자, 소문자, 숫자, 특수문자 중 3종류 조합</Text>
            </View>
            <View style={{flex:3.5, flexDirection: 'row',}}>
                <TextInput
                    style={{
                        flex:6,
                        height: 55,
                        marginLeft: 10,
                        paddingLeft: 8,
                        color: 'black',
                        borderBottomWidth : 2.0,
                        borderBottomColor:"#C64DF7",
                        fontSize: 24,
                    }}
                    placeholder='Password'
                    autoCapitalize="none"
                    placeholderTextColor='gray'
                    underlineColorAndroid={'transparent'}
                    maxLength={40}
                    textContentType={'password'}
                    secureTextEntry={hidePass ? true : false}
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                <View style={{flex:1, marginRight: 10, borderBottomWidth:2.0, borderBottomColor:"#C64DF7",height: 55, justifyContent:"center", alignItems:"center"}}>
                    <Icon
                        name={hidePass ? 'eye-slash' : 'eye'}
                        size={20}
                        color="grey"
                        onPress={() => setHidePass(!hidePass)}
                    />
                </View>
            </View>
            <View style={{flex:1}}>
                <TouchableOpacity
                    style={[styles.loginButton, , {backgroundColor:text ? '#C64DF7' : '#D9D8D8'}]} 
                    onPress={() => navigation.push("Username")}
                    disabled={!text}>
                    <Text style={styles.loginButtonText}>확인</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export const Username = ({ navigation }) => {
    const [text, setText] = useState('');
    return (
        <View style={{flex:1}}>
            <View style={{flex:1.5 , justifyContent:'center', marginHorizontal:15}}>
                <Text style={styles.loginTitle}>닉네임을 정해주세요</Text>
                <Text style={styles.loginSubtitle}>8자 이내로 설정해주세요</Text>
            </View>
            <View style={{flex:3.5}}>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    autoCapitalize="none"
                    placeholderTextColor='gray'
                    underlineColorAndroid={'transparent'}
                    maxLength={20}
                    textContentType={'nickname'}
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
            </View>
            <View style={{flex:1}}>
                <TouchableOpacity
                    style={[styles.loginButton, , {backgroundColor:text ? '#C64DF7' : '#D9D8D8'}]} 
                    onPress={() => navigation.push("CreateAccount")}
                    disabled={!text}>
                    <Text style={styles.loginButtonText}>확인</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export const CreateAccount = () => {
    const { signUp } = React.useContext(AuthContext);

    return (
        <View style={{flex:1}}>
            <View style={{flex:1.5 , justifyContent:'center', marginHorizontal:15}}>
                <Text style={styles.loginTitle}>프로필을 완성해주세요</Text>
                <Text style={styles.loginSubtitle}>거의 다 왔어요:){"\n"}프로필 사진을 업로드하여 회원가입을 완성해주세요</Text>
            </View>
            <View style={{flex:3.5}}>
                <TouchableOpacity
                    style={{width:300, height:300, borderRadius:300/2, backgroundColor:"black", alignSelf:"center"}}
                >
                </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
                <TouchableOpacity
                    style={[styles.loginButton]} 
                    onPress={() => signUp()}
                >
                    <Text style={styles.loginButtonText}>회원가입 완료하기</Text>
                </TouchableOpacity>
            </View>
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
    tosHeader :{
        flex:2,
        backgroundColor:"#f22"
        
    },
    tosContent :{
        flex:1.5,
        backgroundColor:"#FFF"
    },  
    tosText :{
        fontSize: 34,
        fontWeight:"bold",
        margin:10,
        color:"#454545",
        fontFamily:"spoqa han sans Neo"
    }, 
    tosCheckBoxContainer:{
        flexDirection:"row",
        margin:10,
        alignItems:"center"
    },
    tosCheckBoxText:{
        marginLeft: 15,
        color: "#454545",
        fontSize:16
    },

    tosFooter :{
        flex:0.5,
        backgroundColor:"#fff"
    },    
    loginButton :{
        borderRadius:30,
        height:50,
        backgroundColor:"#C64DF7",
        justifyContent:"center",
        margin:10
    },  
    loginButtonText :{
        textAlign:"center",
        color:"#fff", 
        fontSize:16, 
        fontWeight:"bold"
    },

    // signIn
    signInImage :{
        flex:1,
        justifyContent: "center"
    },
    signInButton :{
        flex:1,
    },
    input: {
        height: 55,
        margin: 10,
        padding: 8,
        color: 'black',
        borderBottomWidth : 2.0,
        borderBottomColor:"#C64DF7",
        fontSize: 24,
    },
    inputIcon:{

    },

    loginTitle:{
        fontSize:26, 
        fontWeight:"bold"
    }

})