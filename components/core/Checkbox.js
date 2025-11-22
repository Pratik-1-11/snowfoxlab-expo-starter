import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Check } from 'lucide-react-native';

const Checkbox = React.forwardRef(
  ({ checked, onCheckedChange, label, disabled, style, labelStyle, ...props }, ref) => {
    const handlePress = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity
          ref={ref}
          style={[
            styles.checkbox,
            checked ? styles.checked : styles.unchecked,
            disabled && styles.disabled,
            style,
          ]}
          onPress={handlePress}
          disabled={disabled}
          {...props}
        >
          {checked && (
            <View style={styles.iconContainer}>
              <Check size={12} color="#fff" strokeWidth={3} />
            </View>
          )}
        </TouchableOpacity>
        {label && (
          <Text
            style={[styles.label, disabled && styles.labelDisabled, labelStyle]}
            onPress={handlePress}
          >
            {label}
          </Text>
        )}
      </View>
    );
  }
);

Checkbox.displayName = 'Checkbox';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // spacing between checkbox and label
  },
  checkbox: {
    width: 16, // h-4 w-4
    height: 16,
    borderRadius: 2, // rounded-sm
    borderWidth: 1,
    borderColor: '#3b82f6', // primary border default
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#3b82f6', // primary bg
    borderColor: '#3b82f6',
  },
  unchecked: {
    backgroundColor: 'transparent',
    borderColor: '#cbd5e1', // slate-400
  },
  disabled: {
    opacity: 0.5,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: 14, // text-sm
    fontWeight: '500',
    lineHeight: 16,
  },
  labelDisabled: {
    opacity: 0.5,
  },
});

export { Checkbox };
