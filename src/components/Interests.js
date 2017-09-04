import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/core';

import Title from '../components/Title';

const styles = StyleSheet.create({
  interest: {
    fontSize: 10
  }
});

const Interests = ({ interests }) => (
  <View>
    <Title title="Interests" />
    <Text style={styles.interest}>{interests.join(', ')}</Text>
  </View>
);

Interests.defaultProps = {
  interests: []
};

export default Interests;
