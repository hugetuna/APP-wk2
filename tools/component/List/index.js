import React from 'react-native'
import { Text, View, ScrollView } from 'react-native';
import Single from '../Single/index.js';
import misicData from '../../json/music.json'
const List = () => {
    return (
        <ScrollView>
            <Single music={misicData[0]} />
            <Single music={misicData[1]} />
            <Single music={misicData[2]} />
            <Single music={misicData[3]} />
            <Single music={misicData[4]} />
        </ScrollView>
    );

}

export default List;