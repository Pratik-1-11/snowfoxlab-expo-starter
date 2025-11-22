import * as React from 'react';
import { TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

const IconButton = React.forwardRef(
  ({ icon: Icon, size = 'default', variant = 'default', loading, disabled, style, ...props }, ref) => {
    // Size mapping
    let sizeStyles = {};
    let iconSize = 20;
    switch (size) {
      case 'sm':
        sizeStyles = { width: 32, height: 32, padding: 4 }; // h-8 w-8 p-1
        iconSize = 16;
        break;
      case 'lg':
        sizeStyles = { width: 48, height: 48, padding: 12 }; // h-12 w-12 p-3
        iconSize = 24;
        break;
      default:
        sizeStyles = { width: 40, height: 40, padding: 8 }; // h-10 w-10 p-2
        iconSize = 20;
        break;
    }

    // Variant mapping
    let variantStyles = {};
    let iconColor = '#fff';
    switch (variant) {
      case 'ghost':
        variantStyles = { backgroundColor: 'transparent' };
        iconColor = '#0f172a';
        break;
      case 'outline':
        variantStyles = { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#e5e7eb' };
        iconColor = '#0f172a';
        break;
      case 'secondary':
        variantStyles = { backgroundColor: '#f1f5f9' };
        iconColor = '#0f172a';
        break;
      case 'destructive':
        variantStyles = { backgroundColor: '#ef4444' };
        iconColor = '#fff';
        break;
      default:
        variantStyles = { backgroundColor: '#111827' };
        iconColor = '#fff';
        break;
    }

    return (
      <TouchableOpacity
        ref={ref}
        style={[styles.button, sizeStyles, variantStyles, disabled || loading ? styles.disabled : {}, style]}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <ActivityIndicator size="small" color={iconColor} />
        ) : (
          Icon && <Icon size={iconSize} color={iconColor} />
        )}
      </TouchableOpacity>
    );
  }
);

IconButton.displayName = 'IconButton';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6, // rounded-md
  },
  disabled: {
    opacity: 0.5,
  },
});

export { IconButton };
