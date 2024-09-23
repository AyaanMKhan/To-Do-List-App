import React from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.squareColor}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.checkBox}></View>
        </View>
    );
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    squareColor: {
        width: 24,
        height: 24,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    checkBox: {
        width: 12,
        height: 12,
        borderColor: '#FF0000',
        borderWidth: 2,
        borderRadius: 5,
    }

});


export default Task;