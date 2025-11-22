import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Card = React.forwardRef(
  (
    {
      title,
      description,
      children,
      onPress,
      variant = 'default',
      style,
      titleStyle,
      descriptionStyle,
      ...props
    },
    ref
  ) => {
    const Component = onPress ? TouchableOpacity : View;

    // Variant background & border colors
    const variantStyles = {
      default: { backgroundColor: '#ffffff', borderColor: '#e5e7eb' }, // white, slate-200
      primary: { backgroundColor: '#eff6ff', borderColor: '#dbeafe' }, // blue-50, blue-100
      secondary: { backgroundColor: '#f8fafc', borderColor: '#e5e7eb' }, // slate-50, slate-200
      success: { backgroundColor: '#f0fdf4', borderColor: '#dcfce7' }, // green-50, green-100
      error: { backgroundColor: '#fef2f2', borderColor: '#fee2e2' }, // red-50, red-100
      warning: { backgroundColor: '#fefce8', borderColor: '#fef9c3' }, // amber-50, amber-100
      outline: { backgroundColor: 'transparent', borderColor: '#e5e7eb' },
    };

    return (
      <Component
        ref={ref}
        style={[
          styles.card,
          variantStyles[variant] || variantStyles.default,
          style,
        ]}
        onPress={onPress}
        activeOpacity={0.9}
        {...props}
      >
        {(title || description) && (
          <View style={styles.cardBody}>
            {title && (
              <Text style={[styles.cardTitle, titleStyle]} numberOfLines={1} ellipsizeMode="tail">
                {title}
              </Text>
            )}
            {description && (
              <Text style={[styles.cardDescription, descriptionStyle]}>
                {description}
              </Text>
            )}
          </View>
        )}
        {children}
      </Component>
    );
  }
);

const CardHeader = ({ children, style, ...props }) => (
  <View style={[styles.cardHeader, style]} {...props}>
    {children}
  </View>
);

const CardTitle = ({ children, style, ...props }) => (
  <Text style={[styles.cardTitle, style]} {...props}>
    {children}
  </Text>
);

const CardDescription = ({ children, style, ...props }) => (
  <Text style={[styles.cardDescription, style]} {...props}>
    {children}
  </Text>
);

const CardContent = ({ children, style, ...props }) => (
  <View style={[styles.cardContent, style]} {...props}>
    {children}
  </View>
);

const CardFooter = ({ children, style, ...props }) => (
  <View style={[styles.cardFooter, style]} {...props}>
    {children}
  </View>
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardTitle.displayName = 'CardTitle';
CardDescription.displayName = 'CardDescription';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

const styles = StyleSheet.create({
  card: {
    borderRadius: 16, // rounded-xl
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2, // for Android shadow
  },
  cardBody: {
    padding: 20, // p-5
  },
  cardHeader: {
    padding: 20,
    paddingBottom: 0,
    flexDirection: 'column',
    gap: 6, // space-y-1.5 approximation
  },
  cardTitle: {
    fontSize: 18, // text-lg
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: 6, // mb-1.5
    color: '#111827', // slate-900
  },
  cardDescription: {
    fontSize: 14, // text-sm
    color: '#6b7280', // slate-500
  },
  cardContent: {
    padding: 20,
    paddingTop: 0,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 0,
  },
});

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
