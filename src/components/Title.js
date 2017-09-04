import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/core';


const styles = StyleSheet.create({
  title: {
    fontFamily: "Lato Bold",
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase'
  }
});

const Title = ({ title }) => (
  <Text style={styles.title}>{title}</Text>
);

Title.defaultProps = {
  title: null
};

export default Title;
