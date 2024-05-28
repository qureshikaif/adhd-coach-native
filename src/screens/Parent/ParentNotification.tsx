import React from 'react';
import { View, ScrollView, StyleSheet, Animated } from 'react-native';

function Notification(): JSX.Element {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 64);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 64],
    outputRange: [0, -64],
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'red',
          width: '100%',
          height: 64,
          transform: [{ translateY: translateY }],
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          elevation: 4,
          zIndex: 1,
        }}>
        {/* You can add your header components here */}
        <View>
          
        </View>
      </Animated.View>
      <ScrollView
        style={styles.container}
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}>
        <View style={{ height: 64 }}></View>
        {/* Add your scroll view content here */}
        <View style={{ height: 1000, backgroundColor: 'gray' }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Notification;