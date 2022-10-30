import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllExpensesScreen from './screens/AllExpensesScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import AddExpensesScreen from './screens/AddExpensesScreen';
import IconButton from './components/Details/IconButton';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RecentExpenses" component={RecentExpensesScreen} options={{ title: 'Recent Expenses', headerStyle: { backgroundColor: '#ba8115' } }} />
      <Stack.Screen name="AddExpenses" component={AddExpensesScreen} />
    </Stack.Navigator>
  )

}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <BottomTabs.Navigator
          screenOptions={{
            tabBarStyle: { height: 70 },
            tabBarStyle: { backgroundColor: '#ba8115' },

          }}
          
        >
          <BottomTabs.Screen
            name="TabExpenses"
            component={MyNavigator}
            options={{
              tabBarIcon: ({ focused, size }) => <IconButton name='ios-hourglass-outline' size={size} color={focused ? '#080020' : 'white'} />,
              headerShown: false,
              tabBarLabel: 'Recent',
              tabBarActiveTintColor: '#080020',
              tabBarInactiveTintColor: 'white'
            }} />
          <BottomTabs.Screen
            name="AllExpenses"
            component={AllExpensesScreen}
            options={{
              tabBarIcon: ({ focused, size }) => <IconButton name='calendar' size={size} color={focused ? '#080020' : 'white'} />,
              tabBarLabel: 'All',
              headerStyle: { backgroundColor: '#ba8115' },
              tabBarActiveTintColor: '#080020',
              tabBarInactiveTintColor: 'white'
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}
