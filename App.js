import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Home, Settings, Bell } from 'lucide-react-native';
import './global.css';
import GalleryScreen from './screens/GalleryScreen';
import NotificationsScreen from './screens/NotificationsScreen';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg">Settings Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Home') {
                return <Home size={size} color={color} />;
              } else if (route.name === 'Settings') {
                return <Settings size={size} color={color} />;
              } else if (route.name === 'Notifications') {
                return <Bell size={size} color={color} />;
              }
            },
            tabBarActiveTintColor: '#4f46e5',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            tabBarStyle: {
              paddingTop: 8,
              paddingBottom: 8,
              height: 60,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              marginBottom: 4,
            },
          })}
        >
          <Tab.Screen 
            name="Home" 
            component={GalleryScreen} 
            options={{ title: 'Gallery' }}
          />
          <Tab.Screen 
            name="Notifications" 
            component={NotificationsScreen} 
            options={{
              title: 'Notifications',
              tabBarBadge: 3, // Example badge
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{ title: 'Settings' }}
          />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
