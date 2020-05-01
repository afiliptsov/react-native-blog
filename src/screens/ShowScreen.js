import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {Context} from '../context/BlogContext'


const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);

    //Broke Here
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam(id));
    //Broke 



    return(
        <View>
            <Text>Hi</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ShowScreen;