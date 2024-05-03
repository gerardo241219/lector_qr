import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./AppNavigate";

const MainNavigate = () => {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}

export default MainNavigate;
