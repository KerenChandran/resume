import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/core';

import Title from '../components/Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  school: {
    fontFamily: "Lato Bold",
    fontSize: 10
  },
  degree: {
    fontFamily: "Lato",
    fontSize: 10
  },
  candidate: {
    fontFamily: "Lato",
    fontSize: 10
  }
});

export default () => (
  <View style={styles.container}>
    <Title title="Education" />
    <Text style={styles.school}>University of Waterloo</Text>
    <Text style={styles.degree}>Systems Design Engineering</Text>
    <Text style={styles.candidate}>2013 - 2018 (expected)</Text>
  </View>
);
