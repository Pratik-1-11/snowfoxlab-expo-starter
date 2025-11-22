import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Minus, Plus } from 'lucide-react-native';

const Stepper = React.forwardRef(
  ({ value = 0, onValueChange, min = 0, max = 100, step = 1, disabled, style, ...props }, ref) => {
    const handleIncrement = () => {
      if (value + step <= max) {
        onValueChange(value + step);
      }
    };

    const handleDecrement = () => {
      if (value - step >= min) {
        onValueChange(value - step);
      }
    };

    const isDecrementDisabled = disabled || value <= min;
    const isIncrementDisabled = disabled || value >= max;

    return (
      <View ref={ref} style={[styles.container, style]} {...props}>
        <TouchableOpacity
          onPress={handleDecrement}
          disabled={isDecrementDisabled}
          style={[styles.button, isDecrementDisabled && styles.disabledButton]}
        >
          <Minus size={16} color="#000" />
        </TouchableOpacity>

        <Text style={styles.value}>{value}</Text>

        <TouchableOpacity
          onPress={handleIncrement}
          disabled={isIncrementDisabled}
          style={[styles.button, isIncrementDisabled && styles.disabledButton]}
        >
          <Plus size={16} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }
);

Stepper.displayName = 'Stepper';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16, // spacing between buttons and value
  },
  button: {
    height: 32,
    width: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb', // slate-200
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  disabledButton: {
    opacity: 0.5,
  },
  value: {
    fontSize: 18,
    fontWeight: '500',
    width: 32,
    textAlign: 'center',
  },
});

export { Stepper };
