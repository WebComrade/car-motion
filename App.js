import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import mqtt from 'react-native-mqtt'
import Camera from "./src/components/Camera";
import Joystick from "./src/components/Joystick";
import {useEffect} from "react";

const host = 'broker.emqx.io'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`

const App = () => {

    useEffect(()=>{
        mqtt.createClient({
            uri: connectUrl,
            clientId
        }).then(client => {
            client.connect()
        }).catch(err => console.log(err))
        // const client = new Mqtt.Client(connectUrl)
        //
        // client.connect( {
        //     clientId,
        //     clean: true,
        //     connectTimeout: 4000,
        //     username: 'emqx',
        //     password: 'public',
        //     reconnectPeriod: 1000,
        // }, err => {console.log(err)})
    },[])
    return (
        <View style={styles.container}>
            <Text style={{
                textAlign: 'center',
                fontSize: 14,
            }}>Камера</Text>
            <Camera/>
            <View style={styles.pad_menu}>
                <Joystick/>
            </View>
            <View style={styles.button_menu}>
                <TouchableOpacity style={styles.button} onPress={()=>{}}>
                    <Text>Старт</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{}}>
                    <Text>Стоп</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pad_menu: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_menu: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 80,
    },
    button: {
        width: 250,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#d3d3d3'
    }
});

export default App
