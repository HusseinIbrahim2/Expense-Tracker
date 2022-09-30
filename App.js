import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllExpensesScreen from './screens/AllExpensesScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import IconButton from './components/IconButton';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {height: 70 },
          }}
          tab
        >
          <Tab.Screen
           name="RecentExpenses" 
           component={RecentExpensesScreen} 
           options={{
            tabBarIcon: ({focused,size}) => <IconButton name='ios-hourglass-outline' size={size} color={focused ? 'purple': 'red' } />,
          }} />
          <Tab.Screen
           name="AllExpenses" 
           component={AllExpensesScreen} 
           options={{
            tabBarIcon: ({focused,size}) => <IconButton name='calendar' size={size} color={focused ? 'purple': 'red' } />
          }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
