import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions, 
  SafeAreaView,
  StatusBar 
} from 'react-native';
import SearchBar from '../components/SearchBar';
import PlacesCarousel from '../components/PlacesCarousel';
import PlaceCard from '../components/PlaceCard';
import Login from './Login';
import Register from './Register';

const { width } = Dimensions.get('window');

const NotificationsScreen = () => {
  const [activeTab, setActiveTab] = useState('places');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data for PlacesCarousel
  const places = [
    {
      id: '1',
      title: 'Mountain View',
      location: 'California, USA',
      rating: 4.8,
      price: 120,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '2',
      title: 'Beach Paradise',
      location: 'Maldives',
      rating: 4.9,
      price: 350,
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '3',
      title: 'City Lights',
      location: 'New York, USA',
      rating: 4.6,
      price: 200,
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'places':
        return (
          <View style={styles.tabContent}>
            <SearchBar
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search places..."
              showMic={true}
            />
            <PlacesCarousel 
              places={places}
              onPlacePress={(place) => console.log('Selected place:', place.title)}
            />
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Featured Place</Text>
              <PlaceCard 
                title={places[0].title}
                location={places[0].location}
                rating={places[0].rating}
                price={places[0].price}
                image={places[0].image}
                onPress={() => console.log('Place card pressed')}
                style={styles.featuredCard}
              />
            </View>
          </View>
        );
      case 'login':
        return (
          <View style={styles.tabContent}>
            <Login />
          </View>
        );
      case 'register':
        return (
          <View style={styles.tabContent}>
            <Register />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'places' && styles.activeTab]}
          onPress={() => setActiveTab('places')}
        >
          <Text style={[styles.tabText, activeTab === 'places' && styles.activeTabText]}>
            Places
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'login' && styles.activeTab]}
          onPress={() => setActiveTab('login')}
        >
          <Text style={[styles.tabText, activeTab === 'login' && styles.activeTabText]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'register' && styles.activeTab]}
          onPress={() => setActiveTab('register')}
        >
          <Text style={[styles.tabText, activeTab === 'register' && styles.activeTabText]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <ScrollView 
        style={styles.contentContainer}
        contentContainerStyle={styles.scrollContent}
      >
        {renderTabContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6e6e73',
  },
  activeTabText: {
    color: '#007AFF',
  },
  contentContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  tabContent: {
    flex: 1,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1c1c1e',
  },
  featuredCard: {
    borderRadius: 12,
    overflow: 'hidden',
  },
});

export default NotificationsScreen;
