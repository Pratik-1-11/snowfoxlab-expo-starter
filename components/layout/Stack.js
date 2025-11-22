import * as React from 'react';
import { View, StyleSheet } from 'react-native';

const Stack = React.forwardRef(({ direction = 'column', gap = 8, children, style, ...props }, ref) => {
  // gap in pixels, defaulting to 8
  const isRow = direction === 'row';
  
  // Wrap children to add spacing between them
  const spacedChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child, {
      style: [
        child.props.style,
        index !== 0
          ? isRow
            ? { marginLeft: gap }
            : { marginTop: gap }
          : {},
      ],
    });
  });

  return (
    <View
      ref={ref}
      style={[{ flexDirection: isRow ? 'row' : 'column' }, style]}
      {...props}
    >
      {spacedChildren}
    </View>
  );
});

Stack.displayName = 'Stack';

export { Stack };
