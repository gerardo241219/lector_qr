import { createStackNavigator } from '@react-navigation/stack';
import qrScreen from '../screens/qrScreen';

const Stack = createStackNavigator();

const QrNavigate = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="QR" component={qrScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default QrNavigate;