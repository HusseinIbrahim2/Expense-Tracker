import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllExpensesScreen from './screens/AllExpensesScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import ManageExpensesScreen from './screens/ManageExpensesScreen';
import IconButton from './components/Details/IconButton';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyNavigator1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RecentExpenses" component={RecentExpensesScreen} options={{ title: 'Recent Expenses', headerStyle: { backgroundColor: '#ba8115' } }} />
      <Stack.Screen name="ManageExpenses" component={ManageExpensesScreen} options={{ title: 'Add Expenses', headerStyle: { backgroundColor: '#ba8115' } }} />
    </Stack.Navigator>
  )
}
function MyNavigator2() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllExpenses" component={AllExpensesScreen} options={{ title: 'All Expenses', headerStyle: { backgroundColor: '#ba8115' } }} />
      <Stack.Screen name="ManageExpenses" component={ManageExpensesScreen} options={{ title: 'Add Expenses', headerStyle: { backgroundColor: '#ba8115' } }} />
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
            headerStyle: { backgroundColor: '#ba8115' },
          }}

        >
          <BottomTabs.Screen
            name="TabRecentExpenses"
            component={MyNavigator1}
            options={{
              tabBarIcon: ({ focused, size }) => <IconButton name='ios-hourglass-outline' size={size} color={focused ? '#080020' : 'white'} />,
              tabBarLabel: 'Recent',
              tabBarActiveTintColor: '#080020',
              tabBarInactiveTintColor: 'white',
              headerShown: false,
            }} />
          <BottomTabs.Screen
            name="TabAllExpenses"
            component={MyNavigator2}
            options={{
              tabBarIcon: ({ focused, size }) => <IconButton name='calendar' size={size} color={focused ? '#080020' : 'white'} />,
              tabBarLabel: 'All',
              tabBarActiveTintColor: '#080020',
              tabBarInactiveTintColor: 'white',
              headerShown: false,
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}
