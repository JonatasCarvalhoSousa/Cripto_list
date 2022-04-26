import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListCripto from '../src/ListCripto';
import SingIn from '../src/SingIn';
import Welcome from '../src/Welcome';

const Stack = createNativeStackNavigator();

export default function Routes() {
 return (
    <Stack.Navigator>
        <Stack.Screen 
        name='Welcome'
        component={Welcome}
        />
        <Stack.Screen 
        name='SingIn'
        component={SingIn}
        />
        <Stack.Screen 
        name='ListCripto'
        component={ListCripto}/>
    </Stack.Navigator>
    );
}