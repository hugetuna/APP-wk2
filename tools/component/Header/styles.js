import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Header_s: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        // Android Only
        elevation: 4
    },
});

export default styles;