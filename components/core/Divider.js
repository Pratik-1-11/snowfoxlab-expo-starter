import * as React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = React.forwardRef(({ orientation = 'horizontal', style, ...props }, ref) => {
  return (
    <View
      ref={ref}
      style={[
        styles.divider,
        orientation === 'horizontal' ? styles.horizontal : styles.vertical,
        style,
      ]}
      {...props}
    />
  );
});

Divider.displayName = 'Divider';

const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#e5e7eb', // bg-border (slate-200)
  },
  horizontal: {
    height: 1,
    width: '100%',
  },
  vertical: {
    width: 1,
    height: '100%',
  },
});

export { Divider };
