import { createStackNavigator } from 'react-navigation-stack';

import AllDogs from '../screens/AllDogs';
import AddEditDog from '../screens/AddEditDog';

export default createStackNavigator(
    {
        AllDogs,
        AddEditDog
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);
