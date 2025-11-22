import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RadioGroup = React.forwardRef(({ value, onValueChange, children, style, ...props }, ref) => {
  return (
    <View ref={ref} style={[styles.group, style]} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            checked: child.props.value === value,
            onPress: () => onValueChange(child.props.value),
          });
        }
        return child;
      })}
    </View>
  );
});

RadioGroup.displayName = 'RadioGroup';

const RadioGroupItem = React.forwardRef(({ value, checked, onPress, label, disabled, style, labelStyle, ...props }, ref) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        ref={ref}
        style={[
          styles.circle,
          checked ? styles.circleChecked : styles.circleUnchecked,
          disabled && styles.disabled,
          style,
        ]}
        onPress={onPress}
        disabled={disabled}
        {...props}
      >
        {checked && <View style={styles.innerCircle} />}
      </TouchableOpacity>
      {label && (
        <Text
          style={[styles.label, disabled && styles.disabledLabel, labelStyle]}
          onPress={onPress}
        >
          {label}
        </Text>
      )}
    </View>
  );
});

RadioGroupItem.displayName = 'RadioGroupItem';

const styles = StyleSheet.create({
  group: {
    gap: 8, // space between items
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleChecked: {
    borderColor: '#3b82f6', // primary
  },
  circleUnchecked: {
    borderColor: '#cbd5e1', // slate-400
  },
  innerCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3b82f6', // primary
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827', // slate-900
  },
  disabled: {
    opacity: 0.5,
  },
  disabledLabel: {
    opacity: 0.5,
  },
});

export { RadioGroup, RadioGroupItem };
