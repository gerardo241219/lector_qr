import { StyleSheet } from "react-native";
import { responsive } from '../utils/responsive'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: responsive.number(30),
        marginBottom: responsive.number(20),
    },  
    camera: {
        width: responsive.deviceWidth * 0.9,
        height: responsive.deviceWidth * 1.5,
        marginBottom: responsive.number(20),
    },
    button: {
        width: responsive.deviceWidth * 0.9,
        padding: responsive.number(10),
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        marginBottom: responsive.number(10),
        borderRadius: responsive.number(10),
    }
})

export default Styles