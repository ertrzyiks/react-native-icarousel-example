/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Carousel = require('react-native-icarousel');

var CarouselTest = React.createClass({
  render: function() {
    return (
      <Carousel style={styles.container} type={Carousel.Type.iCarouselTypeWheel}>
        <Text> One! </Text>
        <Text> Two! </Text>
        <Text> Three! </Text>
        <Text> Four! </Text>
        <Text> Five! </Text>
      </Carousel>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('CarouselTest', () => CarouselTest);
