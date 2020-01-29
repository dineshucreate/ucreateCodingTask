import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import store from './store';
import AppNavigator from './navigation/AppNavigator';
import { setTopLevelNavigator } from './utilities/NavigationService';
import { commonStyles } from './utilities/commonStyles';

const App = () => (
	<SafeAreaView style={commonStyles.wrapper}>
		<Provider store={store}>
			<AppNavigator
				ref={navigatorRef => setTopLevelNavigator(navigatorRef)}
			/>
			<FlashMessage position="top" />
		</Provider>
	</SafeAreaView>
);

export default App;
