import * as React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

const Container = React.forwardRef(({ safeArea, style, children, ...props }, ref) => {
  const Comp = safeArea ? SafeAreaView : View;
  return (
    <Comp ref={ref} style={[styles.container, style]} {...props}>
      {children}
    </Comp>
  );
});

Container.displayName = 'Container';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // replace with your background color
    padding: 16, // equivalent to p-4
  },
});

export { Container };
