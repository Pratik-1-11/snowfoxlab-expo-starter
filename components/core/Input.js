import * as React from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Input = React.forwardRef(
  ({
    label,
    error,
    helperText,
    startIcon,
    endIcon,
    onPressEndIcon,
    size = 'default',
    fullWidth = true,
    style,
    inputStyle,
    ...props
  }, ref) => {
    // Size mapping
    const sizeStyles = {
      sm: { height: 32, fontSize: 14, paddingHorizontal: 8 },
      default: { height: 40, fontSize: 16, paddingHorizontal: 12 },
      lg: { height: 48, fontSize: 16, paddingHorizontal: 12 },
    };

    // Colors for variants
    const borderColor = error ? '#ef4444' : '#e5e7eb'; // red-500 or slate-200
    const textColor = '#111827'; // slate-900
    const placeholderColor = '#94a3b8'; // slate-400
    const helperTextColor = error ? '#dc2626' : '#6b7280'; // red-600 or slate-500

    return (
      <View style={[fullWidth ? { width: '100%' } : {}, style]}>
        {label && (
          <Text style={styles.label}>
            {label}
            {props.required && <Text style={{ color: '#ef4444' }}> *</Text>}
          </Text>
        )}

        <View
          style={[
            styles.inputContainer,
            { borderColor },
            sizeStyles[size],
            props.editable === false && { opacity: 0.8 },
          ]}
        >
          {startIcon && <View style={{ marginLeft: 12 }}>{startIcon}</View>}

          <TextInput
            ref={ref}
            style={[styles.input, { color: textColor, fontSize: sizeStyles[size].fontSize } , inputStyle]}
            placeholderTextColor={placeholderColor}
            selectionColor="#3b82f6"
            {...props}
          />

          {endIcon &&
            (onPressEndIcon ? (
              <TouchableOpacity
                onPress={onPressEndIcon}
                disabled={props.disabled}
                style={{ marginRight: 12 }}
              >
                {endIcon}
              </TouchableOpacity>
            ) : (
              <View style={{ marginRight: 12 }}>{endIcon}</View>
            ))}
        </View>

        {(error || helperText) && (
          <Text style={[styles.helperText, { color: helperTextColor }]}>
            {error || helperText}
          </Text>
        )}
      </View>
    );
  }
);

Input.displayName = 'Input';

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#374151', // slate-700
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  helperText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export { Input };
