import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { X } from 'lucide-react-native';

const Chip = React.forwardRef(
  ({ label, icon: Icon, onClose, variant = 'default', style, textStyle, ...props }, ref) => {
    // Determine variant styles
    let variantStyles = {};
    let variantTextStyles = {};
    switch (variant) {
      case 'outline':
        variantStyles = { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#e5e7eb' }; // slate-200
        variantTextStyles = { color: '#111827' }; // slate-900
        break;
      case 'secondary':
        variantStyles = { backgroundColor: '#f1f5f9' }; // slate-100
        variantTextStyles = { color: '#111827' };
        break;
      default:
        variantStyles = { backgroundColor: '#111827' }; // slate-900
        variantTextStyles = { color: '#fff' };
        break;
    }

    return (
      <TouchableOpacity
        ref={ref}
        style={[styles.chip, variantStyles, style]}
        disabled={!props.onPress}
        {...props}
      >
        {Icon && (
          <Icon
            size={14}
            color={variant === 'default' ? '#fff' : '#000'}
            style={{ marginRight: 4 }}
          />
        )}
        <Text style={[styles.label, variantTextStyles, textStyle]}>{label}</Text>
        {onClose && (
          <TouchableOpacity
            onPress={onClose}
            style={styles.closeButton}
          >
            <X size={12} color={variant === 'default' ? '#fff' : '#000'} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  }
);

Chip.displayName = 'Chip';

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 999, // rounded-full
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14, // text-sm
    fontWeight: '500',
  },
  closeButton: {
    marginLeft: 4,
    borderRadius: 999,
    padding: 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Chip };
