import * as React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

const Button = React.forwardRef(({
  variant = 'default',
  size = 'default',
  children,
  loading,
  disabled,
  style,
  textStyle,
  ...props
}, ref) => {

  // Map variant to background & text colors
  let variantStyles = {};
  let variantTextStyles = {};
  switch (variant) {
    case 'destructive':
      variantStyles = { backgroundColor: '#ef4444' }; // red-500
      variantTextStyles = { color: '#fff' };
      break;
    case 'outline':
      variantStyles = { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#e5e7eb' }; // slate-200
      variantTextStyles = { color: '#111827' }; // slate-900
      break;
    case 'secondary':
      variantStyles = { backgroundColor: '#f1f5f9' }; // slate-100
      variantTextStyles = { color: '#111827' };
      break;
    case 'ghost':
      variantStyles = { backgroundColor: 'transparent' };
      variantTextStyles = { color: '#111827' };
      break;
    case 'link':
      variantStyles = { backgroundColor: 'transparent' };
      variantTextStyles = { color: '#1d4ed8', textDecorationLine: 'underline' }; // blue-700
      break;
    default:
      variantStyles = { backgroundColor: '#111827' }; // slate-900
      variantTextStyles = { color: '#fff' };
      break;
  }

  // Map size to height, padding, width if needed
  let sizeStyles = {};
  switch (size) {
    case 'sm':
      sizeStyles = { height: 36, paddingHorizontal: 12 };
      break;
    case 'lg':
      sizeStyles = { height: 44, paddingHorizontal: 32 };
      break;
    case 'icon':
      sizeStyles = { height: 40, width: 40, padding: 0 };
      break;
    default:
      sizeStyles = { height: 40, paddingHorizontal: 16, paddingVertical: 8 };
      break;
  }

  return (
    <TouchableOpacity
      ref={ref}
      style={[
        styles.button,
        variantStyles,
        sizeStyles,
        disabled || loading ? styles.disabled : {},
        style
      ]}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={(variant === 'outline' || variant === 'ghost') ? '#000' : '#fff'}
        />
      ) : (
        <Text style={[styles.text, variantTextStyles, textStyle]}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
});

Button.displayName = 'Button';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6, // rounded-md
    fontSize: 14,
    fontWeight: '500',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.5,
  },
});

export { Button };
