/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from './components/Home';
import Setup from './components/Setup';
import Products from './components/Products';
import { StackNavigator } from 'react-navigation';

const Stacknavigator = StackNavigator({
  Home: { screen: Home },
  Products: { screen: Products },
  Setup: { screen: Setup }
});
export default Stacknavigator;

