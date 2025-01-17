import React from 'react'
import {useState} from "react";
import {Text, View, StyleSheet, Button, ImageBackground, TouchableOpacity ,TextInput } from 'react-native'

import {AuthContext} from '../Components/context';
import Icon from 'react-native-vector-icons/FontAwesome5';


import IntimacyScreen from "./Profile/Intimacy";
import PostingScreen from "./Profile/Posting";
import PollingScreen from "./Profile/Polling";

//체크박스 참고자료
//https://www.youtube.com/watch?v=6VYQLa8OyMw
import CheckBox from '@react-native-community/checkbox';


//프로필 사진 업로드하기
//참고하기 https://www.reactnativeschool.com/how-to-upload-images-from-react-native
import { launchCamera, launchImageLibrary} from 'react-native-image-picker'

// bottomsheet만들기
import { BottomSheet, ListItem } from 'react-native-elements';


// TopTab
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const TopTab = createMaterialTopTabNavigator();// 윗 탭 Upper Tab





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
    const [inputEmail, setInputEmail] = useState('');

    //이메일 조건에 따라 체크하는 부분
    const checkInputEmail = () => {
        //Check for the Email TextInput
        if (!inputEmail.trim()) {
            alert('Please Enter Email');
            return;
        }

        //Checked Successfully
        //Do whatever you want
        alert('Success');
        navigation.push("Password")
    };
    
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
                    onChangeText={inputEmail => setInputEmail(inputEmail)}
                    defaultValue={inputEmail}
                    keyboardType={"email-address"}
                />
            </View>
            <View style={{flex:1}}>
                <TouchableOpacity
                    style={[styles.loginButton, , {backgroundColor:inputEmail ? '#C64DF7' : '#D9D8D8'}]} 
                    onPress={checkInputEmail}
                    disabled={!inputEmail}>
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

    //프로필누르면 나오는 창
    const [isVisible, setIsVisible] = useState(false);
    const list = [
      { title: '갤러리에서 가져오기',
        onPress: () => {setIsVisible(false), handleChoosePhoto()}

      },
      { title: '사진 촬용하기',
        onPress: () => {setIsVisible(false), handleTakePhoto()}
      },
      {
        title: '취소',
        containerStyle: { backgroundColor: 'red' },
        titleStyle: { color: 'white' },
        onPress: () => setIsVisible(false),
      },
    ];

    //사진 선택하기
    const [photo, setPhoto] = React.useState(null);

    const handleChoosePhoto = () => {
      launchImageLibrary({ noData: true }, (response) => {
        // console.log(response);
        if (response) {
          setPhoto(response);
        }
      });
    };

    // 사진 촬용
    const handleTakePhoto = () => {
        launchCamera({ noData: true }, (response) => {
          // console.log(response);
          if (response) {
            setPhoto(response);
          }
        });
      };

    
    return (
        <View style={{flex:1}}>
            <View style={{flex:1.5 , justifyContent:'center', marginHorizontal:15}}>
                <Text style={styles.loginTitle}>프로필을 완성해주세요</Text>
                <Text style={styles.loginSubtitle}>거의 다 왔어요:){"\n"}프로필 사진을 업로드하여 회원가입을 완성해주세요</Text>
            </View>
            <View style={{flex:3.5}}>
                <TouchableOpacity
                    style={{margin:10, padding:8, width:280, height:280, borderRadius:280/2,backgroundColor:"pink", alignSelf:"center"}}
                    onPress={() => setIsVisible(true)} 
                >
                </TouchableOpacity>
                <BottomSheet
                    isVisible={isVisible}
                    containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
                    >
                    {list.map((l, i) => (
                        <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                            <ListItem.Content>
                                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))}
                </BottomSheet>
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




// 프로필 창
export const Profile = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext);
    return (
      <View style={{flex:1}}>
        <View style={{flex:1 ,flexDirection:"row", margin:10, justifyContent:"space-between"}}>
            <View style={{}}>
                <TouchableOpacity style={{backgroundColor:"black", marginVertical:10, width:100,height:100, borderRadius:100/2}}>
                </TouchableOpacity>
                <Text>프로필 이름</Text>
                <Text>자기소개</Text>
            </View>
            <View style={{margin:10, backgroundColor:"yellow"}}>
                <Button title="sign out" onPress={() => signOut()} />
                <Button title="프로필 편집" onPress={() => signOut()} />
                <View style={{flexDirection:"row"}}>
                    <View style={{padding:10}}>
                        <Text>팔로워</Text>
                        <Text>111</Text>
                    </View>
                    <View style={{padding:10}}>
                        <Text>팔로잉</Text>
                        <Text>222</Text>
                    </View> 
                </View>
            </View>
        </View>
        <View style={{flex:3}}>            
            <TopTab.Navigator
                tabBarOptions={{
                    labelStyle: { fontSize: 12 },
                    pressOpacity: 9,
                    tabStyle: { },
                    style: { },
                    //inactiveTintColor: "blue", 
                    indicatorStyle :{
                    },
                }}
            >
                <TopTab.Screen name="친밀도" component={IntimacyScreen} />
                <TopTab.Screen name="폴링" component={PollingScreen} />
                <TopTab.Screen name="포스팅" component={PostingScreen} />
            </TopTab.Navigator>
        </View>
      </View>
    );
};




const styles = StyleSheet.create({
    // tos
    tosHeader :{
        flex:2,
        backgroundColor:"#fff"
        
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