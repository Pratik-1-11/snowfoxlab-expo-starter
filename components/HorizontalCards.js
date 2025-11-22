import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7; // Increased width for better visibility
const CARD_MARGIN = 16;

// Bright color palette
const CARD_COLORS = [
  '#FF6B6B', // Coral
  '#4ECDC4', // Turquoise
  '#45B7D1', // Sky Blue
  '#96CEB4', // Mint
  '#FFEEAD', // Light Yellow
  '#FF9F1C', // Orange
];

export const HorizontalCards = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Sample data with more cards to showcase auto-scrolling
  const cards = [
    {
      id: '1',
      title: 'Daily Progress',
      description: 'Track your daily tasks and see your progress over time.',
    },
    {
      id: '2',
      title: 'Achievements',
      description: 'View your unlocked achievements and upcoming milestones.',
    },
    {
      id: '3',
      title: 'Learning Path',
      description: 'Continue where you left off in your learning journey.',
    },
    {
      id: '4',
      title: 'New Skills',
      description: 'Discover new skills to learn and grow.',
    },
    {
      id: '5',
      title: 'Challenges',
      description: 'Take on daily and weekly challenges.',
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % cards.length;
      scrollViewRef.current?.scrollTo({
        x: nextIndex * (CARD_WIDTH + CARD_MARGIN * 2),
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, cards.length]);

  const renderCard = (card, index) => {
    const colorIndex = index % CARD_COLORS.length;
    const cardStyle = {
      ...styles.card,
      backgroundColor: CARD_COLORS[colorIndex],
    };

    return (
      <TouchableOpacity 
        key={card.id}
        style={cardStyle}
        activeOpacity={0.9}
        onPress={() => console.log(`Card ${index + 1} pressed`)}
      >
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardDescription}>{card.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        decelerationRate="fast"
        snapToInterval={CARD_WIDTH + CARD_MARGIN * 2}
        snapToAlignment="center"
        scrollEventThrottle={16}
      >
        {cards.map(renderCard)}
      </ScrollView>
      
      {/* Dots indicator */}
      <View style={styles.dotsContainer}>
        {cards.map((_, index) => (
          <View 
            key={index} 
            style={[
              styles.dot,
              { 
                backgroundColor: currentIndex === index ? '#000' : '#ccc',
                width: currentIndex === index ? 12 : 8,
                height: currentIndex === index ? 8 : 8,
                borderRadius: currentIndex === index ? 4 : 4,
              }
            ]} 
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    position: 'relative',
  },
  scrollViewContent: {
    paddingHorizontal: 16,
  },
  card: {
    width: CARD_WIDTH,
    height: 180,
    borderRadius: 20,
    marginRight: CARD_MARGIN,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  cardContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 12,
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardDescription: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 22,
    fontWeight: '500',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#ccc',
  },
});
