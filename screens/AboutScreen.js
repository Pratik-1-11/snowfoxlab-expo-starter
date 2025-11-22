import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import PlacesCarousel from '../components/PlacesCarousel';

const { width } = Dimensions.get('window');

export default function AboutScreen() {
  const handlePlacePress = (place) => {
    // Handle place selection
    console.log('Selected place:', place.title);
    // You can navigate to a detail screen here
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <PlacesCarousel onPlacePress={handlePlacePress} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Our App</Text>
        <Text style={styles.text}>
          Experience the majestic beauty of Nepal through our curated collection of the most breathtaking destinations. 
          From the serene lakes of Pokhara to the rugged trails of Mustang, discover the heart of the Himalayas.
        </Text>
      </View>

      <View style={styles.feature}>
        <View style={styles.featureIcon}>
          <Text style={styles.featureEmoji}>🏔️</Text>
        </View>
        <View style={styles.featureText}>
          <Text style={styles.featureTitle}>Expert Guides</Text>
          <Text style={styles.featureDescription}>Local insights and expert recommendations</Text>
        </View>
      </View>

      <View style={styles.feature}>
        <View style={styles.featureIcon}>
          <Text style={styles.featureEmoji}>📸</Text>
        </View>
        <View style={styles.featureText}>
          <Text style={styles.featureTitle}>Stunning Views</Text>
          <Text style={styles.featureDescription}>Capture memories that last a lifetime</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 24,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1E1E1E',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    margin: 16,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E1E1E',
    marginBottom: 12,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
  },
  feature: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F0F7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureEmoji: {
    fontSize: 24,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E1E1E',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
  },
});
