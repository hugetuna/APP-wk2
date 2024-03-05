import React from 'react-native'
import { Text, View, ScrollView, Image } from 'react-native';
import styles from './styles.js';

//上半，曲名+專輯圖
//下半，MV預覽圖
const Single = (props) => {
    const { songName, alubmName, alubmPic, songPic } = props.music;
    return (
        <View>
            <View style={styles.top}>
                <Image
                    style={styles.alubm_pic}
                    source={{
                        uri: alubmPic
                    }}
                />
                <View style={styles.top_textbox}>
                    <Text style={styles.songName}>{songName}</Text>
                    <Text style={styles.alubmName}>來自:{alubmName}</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <Image
                    style={styles.single_pic}
                    source={{
                        uri: songPic
                    }}
                />
            </View>
        </View>
    );

}

export default Single;