import React from 'react-native'
import { Text, View } from 'react-native';
import styles from './styles';


const Header = () => {
    return (
        <View style={styles.Header_s}>
            <Text>
                Album list
            </Text>
        </View>
    );
}

export default Header;