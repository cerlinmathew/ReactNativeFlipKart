import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { View, Button } from 'react-native';

import React from 'react';

const ReanimatedComponent = () => {
  const width = useSharedValue(100);

  const handlePress = () => {
     width.value = withTiming(Math.random() * 100 + 50, { duration: 500 });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
    };
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View
        style={[
          {
            height: 100,
            backgroundColor: 'brown',
          },
          animatedStyle,
        ]}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
};

export default ReanimatedComponent;