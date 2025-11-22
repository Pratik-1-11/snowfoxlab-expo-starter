import * as React from 'react';
import { View, StyleSheet } from 'react-native';

const Grid = React.forwardRef(({ columns = 1, gap = 16, children, style, ...props }, ref) => {
  // Calculate item width based on number of columns
  const itemWidth = `${100 / columns}%`;

  // Wrap each child to apply width
  const wrappedChildren = React.Children.map(children, (child, index) => (
    <View key={index} style={{ width: itemWidth, padding: gap / 2 }}>
      {child}
    </View>
  ));

  return (
    <View ref={ref} style={[styles.container, { margin: -gap / 2 }, style]} {...props}>
      {wrappedChildren}
    </View>
  );
});

Grid.displayName = 'Grid';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export { Grid };
