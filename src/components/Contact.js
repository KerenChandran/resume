import React from 'react';
import { Text, View, StyleSheet } from '@react/core';

const styles = =StyleSheet.create({
  container: {

  },
});

export default () => (
  <View style={styles.container}>
    <Title title="Contact" />
    <Link style={styles.link}>github.com/kerenchandran</Link>
    <Link style={styles.link}>linkedin.com/in/kerenchandran</Link>
    <Link style={styles.link}>keren.chandran@uwaterloo.ca</Link>
  </View>
);
