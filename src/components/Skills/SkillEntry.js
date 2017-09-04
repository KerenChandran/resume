import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/core';

const styles = StyleSheet.create({
  title: {
    fontFamily: "Lato Bold",
    fontSize: 11,
    marginBottom: 10
  },
  skills: {
    fontFamily: "Lato",
    fontSize: 10,
    marginBottom: 10
  }
});

export default ({ name, skills }) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.skills}>
      {skills.join(', ')}
    </Text>
  </View>
);
