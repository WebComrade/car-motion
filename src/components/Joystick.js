import {StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";;

const Joystick = () => {

    const [stickPosition, setStickPosition] = useState({top: 0, left: 0})

    return (
        <TouchableOpacity style={styles.container}
            //onPress={event=>{
            // console.log(event.nativeEvent.locationX, event.nativeEvent.locationY)
            // }}
        >
            <View style={styles.button}>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        borderRadius: 300,
        backgroundColor: '#833939',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: '#DC2020',
        position: 'relative',
        top: 0,
        left: 0,
    }
});

export default Joystick
