import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllExpensesScreen from './screens/AllExpensesScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import AddExpensesScreen from './screens/AddExpensesScreen';
import IconButton from './components/IconButton';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RecentExpenses" component={RecentExpensesScreen} options={{title: 'Recent Expenses'}} />
      <Stack.Screen name="AddExpenses" component={AddExpensesScreen} />
    </Stack.Navigator>
  )

}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { height: 70 },
          }}
          tab
        >
          <Tab.Screen
            name="TabExpenses"
            component={MyNavigator}
            options={{
              tabBarIcon: ({ focused, size }) => <IconButton name='ios-hourglass-outline' size={size} color={focused ? 'purple' : 'red'} />,
              headerShown: false,
            }} />
          <Tab.Screen
            name="AllExpenses"
            component={AllExpensesScreen}
            options={{
              tabBarIcon: ({ focused, size }) => <IconButton name='calendar' size={size} color={focused ? 'purple' : 'red'} />
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
