import React from 'react'
import {Text, View, StyleSheet, SafeAreaView} from 'react-native'
import Tags from './Tags'

const Recommend = () => {
        return (
            <View>
                <Text>
                    폴라비에서 인기있는 태그들을 확인해보세요
                </Text>
                <SafeAreaView> 
                    <Tags />
                </SafeAreaView>

            </View>
        );
};
export default Recommend;