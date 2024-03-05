import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    //上層
    top: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        // Android Only
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    top_textbox: {
        flexDirection: 'columns',
        justifyContent: 'space-around'
    },
    songName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    alubmName: {
        fontStyle: 'italic'
    },
    alubm_pic: {
        height: 50,
        width: 50
    },
    //bottom
    bottom: {
        marginLeft: 5,
        marginRight: 5
    },
    single_pic: {
        height: 300,
        width: null
    }
});

export default styles;