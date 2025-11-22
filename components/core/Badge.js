import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Badge = React.forwardRef(({
  variant = 'default',
  size = 'default',
  children,
  style,
  textStyle,
  ...props
}, ref) => {

  // Determine variant styles
  let variantStyles = {};
  let variantTextStyles = {};
  switch (variant) {
    case 'secondary':
      variantStyles = { backgroundColor: '#f1f5f9' }; // slate-100
      variantTextStyles = { color: '#1e293b' }; // slate-800
      break;
    case 'destructive':
      variantStyles = { backgroundColor: 'rgba(254, 202, 202, 0.3)' }; // red-900/30
      variantTextStyles = { color: '#b91c1c' }; // red-700
      break;
    case 'success':
      variantStyles = { backgroundColor: 'rgba(22, 163, 74, 0.3)' }; // green-900/30
      variantTextStyles = { color: '#15803d' }; // green-700
      break;
    case 'warning':
      variantStyles = { backgroundColor: 'rgba(254, 202, 0, 0.3)' }; // amber-900/30
      variantTextStyles = { color: '#b45309' }; // amber-700
      break;
    case 'info':
      variantStyles = { backgroundColor: 'rgba(59, 130, 246, 0.3)' }; // blue-900/30
      variantTextStyles = { color: '#1d4ed8' }; // blue-700
      break;
    case 'outline':
      variantStyles = { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#e2e8f0' }; // slate-200
      variantTextStyles = { color: '#334155' }; // slate-700
      break;
    case 'ghost':
      variantStyles = { backgroundColor: 'transparent' };
      variantTextStyles = { color: '#334155' };
      break;
    default: // default
      variantStyles = { backgroundColor: '#111827' }; // slate-900
      variantTextStyles = { color: '#f9fafb' }; // slate-50
      break;
  }

  // Determine size styles
  let paddingStyles = {};
  switch (size) {
    case 'sm':
      paddingStyles = { paddingHorizontal: 8, paddingVertical: 2 }; // px-2 py-0.5
      break;
    case 'lg':
      paddingStyles = { paddingHorizontal: 12, paddingVertical: 4 }; // px-3 py-1
      break;
    default:
      paddingStyles = { paddingHorizontal: 10, paddingVertical: 2 }; // px-2.5 py-0.5
      break;
  }

  return (
    <View
      ref={ref}
      style={[
        styles.container,
        variantStyles,
        paddingStyles,
        style
      ]}
      {...props}
    >
      <Text style={[styles.text, variantTextStyles, textStyle]}>
        {children}
      </Text>
    </View>
  );
});

Badge.displayName = 'Badge';

const styles = StyleSheet.create({
  container: {
    borderRadius: 999, // rounded-full
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 0,
  },
  text: {
    fontSize: 12, // text-xs
    fontWeight: '500',
    lineHeight: 16, // leading-4
  },
});

export { Badge };
