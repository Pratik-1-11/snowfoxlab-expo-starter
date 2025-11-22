import * as React from 'react';
import { ScrollView, View } from 'react-native';

const Carousel = ({ data, renderItem, itemWidth, gap = 16, style, ...props }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        flexDirection: 'row',
        gap, // note: gap works only in React Native >= 0.72
      }}
      decelerationRate="fast"
      snapToInterval={itemWidth ? itemWidth + gap : undefined}
      style={style}
      {...props}
    >
      {data.map((item, index) => (
        <View key={index} style={{ width: itemWidth, marginRight: index === data.length - 1 ? 0 : gap }}>
          {renderItem({ item, index })}
        </View>
      ))}
    </ScrollView>
  );
};

export { Carousel };
