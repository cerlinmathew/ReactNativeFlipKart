import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { View, Button } from 'react-native';

import React from 'react';

const ReanimatedComponent = () => {
  const boxWidth = useSharedValue(100);
  const imageWidth = useSharedValue(100);

  const handlePress = () => {
    boxWidth.value = withTiming(Math.random() * 100 + 50, { duration: 500 });
  };

  const handlePressimage = () => {
    imageWidth.value = withTiming(Math.random() * 100 + 50, { duration: 500 });
  };



const boxStyle = useAnimatedStyle(() => {
    return {
      width: boxWidth.value,
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: imageWidth.value,
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
              boxStyle,
        ]}
      />
      <Button onPress={handlePress} title="Click me" />

      <Animated.Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkNfJXqGRMePB9nR7GLLPoyBL6C-49T8B2w&s', // sample product image
        }}
        resizeMode="cover"
        style={[
          {
            height: 150,
            borderRadius: 12,
          },
         imageStyle
        ]}
      />

      <Button onPress={handlePressimage} title="Resize Product" />
    </View>
  );
};

export default ReanimatedComponent;