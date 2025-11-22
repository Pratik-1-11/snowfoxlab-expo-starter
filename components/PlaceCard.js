import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
// Linear gradient removed - using solid color instead
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;
const CARD_HEIGHT = CARD_WIDTH * 1.3;

const PlaceCard = ({ title, location, rating, image, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.cardContainer}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <View style={styles.card}>
        {/* Image with gradient overlay */}
        <View style={styles.imageContainer}>
          <Image 
            source={typeof image === 'number' ? image : { uri: image }} 
            style={styles.image}
            resizeMode="cover"
            defaultSource={require('../assets/Card.jpg')}
          />
          <TouchableOpacity style={styles.heartButton}>
            <Ionicons name="heart" size={24} color="#FF3B30" />
          </TouchableOpacity>
        </View>

        {/* Card content */}
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.rating}>{rating}</Text>
            </View>
          </View>
          <Text style={styles.location} numberOfLines={2}>
            <Ionicons name="location" size={14} color="#777" /> {location}
          </Text>
          <View style={styles.footer}>
            <Text style={styles.exploreText}>Explore →</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginRight: 16,
    borderRadius: 24,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  card: {
    flex: 1,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: '70%',
    width: '100%',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  heartButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 6,
  },
  content: {
    padding: 16,
    height: '30%',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 4,
    color: '#666',
    fontWeight: '600',
  },
  location: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  exploreText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});

export default PlaceCard;
