import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = React.forwardRef(({ style, ...props }, ref) => (
  <View ref={ref} style={[styles.card, style]} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ style, ...props }, ref) => (
  <View ref={ref} style={[styles.cardHeader, style]} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ style, ...props }, ref) => (
  <Text ref={ref} style={[styles.cardTitle, style]} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ style, ...props }, ref) => (
  <Text ref={ref} style={[styles.cardDescription, style]} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ style, ...props }, ref) => (
  <View ref={ref} style={[styles.cardContent, style]} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ style, ...props }, ref) => (
  <View ref={ref} style={[styles.cardFooter, style]} {...props} />
));
CardFooter.displayName = "CardFooter";

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB', // slate-200
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // for Android shadow
  },
  cardHeader: {
    padding: 16,
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6B7280', // slate-500
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingTop: 0,
    paddingBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 0,
    paddingBottom: 16,
  },
});

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
