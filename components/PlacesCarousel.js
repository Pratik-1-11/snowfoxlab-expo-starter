import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Animated } from 'react-native';
import PlaceCard from './PlaceCard';

// Sample places data - can be moved to a separate data file if needed
const PLACES = [
  {
    id: 1,
    title: 'Pokhara Lake',
    location: 'Pokhara, Nepal',
    rating: '4.8',
    description: 'Serene lakeside with stunning mountain views',
    image: require('../assets/Card.jpg'),
  },
  {
    id: 2,
    title: 'Mustang Valley',
    location: 'Mustang, Nepal',
    rating: '4.9',
    description: 'Rugged terrain and cultural heritage',
    image: require('../assets/Card.jpg'),
  },
  {
    id: 3,
    title: 'Kathmandu City',
    location: 'Kathmandu, Nepal',
    rating: '4.5',
    description: 'Vibrant mix of heritage and modern life',
    image: require('../assets/Card.jpg'),
  },
];

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;
const CARD_SPACING = 16;
const SNAP_INTERVAL = CARD_WIDTH + CARD_SPACING;

const PlacesCarousel = ({ 
  places = PLACES, // Use provided places or default to our sample data
  onPlacePress = (place) => console.log('Selected place:', place.title) 
}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / SNAP_INTERVAL);
        setActiveIndex(index);
      },
    }
  );

  const renderItem = ({ item, index }) => {
    const inputRange = [
      (index - 1) * SNAP_INTERVAL,
      index * SNAP_INTERVAL,
      (index + 1) * SNAP_INTERVAL,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={[
          styles.cardWrapper,
          {
            transform: [{ scale }],
            marginLeft: index === 0 ? 24 : 0,
            marginRight: index === places.length - 1 ? 24 : CARD_SPACING,
          },
        ]}
      >
        <PlaceCard
          title={item.title}
          location={item.location}
          rating={item.rating}
          image={item.image}
          onPress={() => onPlacePress(item)}
        />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Beautiful Places</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      
      <FlatList
        ref={flatListRef}
        data={places}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={SNAP_INTERVAL}
        decelerationRate="fast"
        contentContainerStyle={styles.listContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      
      <View style={styles.pagination}>
        {places.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { 
                backgroundColor: index === activeIndex ? '#007AFF' : '#E0E0E0',
                width: index === activeIndex ? 20 : 8,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E1E1E',
  },
  seeAll: {
    color: '#007AFF',
    fontWeight: '500',
  },
  listContent: {
    paddingBottom: 16,
  },
  cardWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#E0E0E0',
  },
});

export default PlacesCarousel;
