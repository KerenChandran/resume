import React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/core';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#112131",
    borderBottomStyle: "solid",
    alignItems: "stretch"
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 9
  },
  linkColumn: {
    flexDirection: "column",
    flexGrow: 2,
    alignSelf: "flex-end",
    justifySelf: "flex-end"
  },
  name: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontFamily: "Lato Bold"
  },
  subtitle: {
    fontSize: 10,
    justifySelf: "flex-end",
    textTransform: 'uppercase',
    fontFamily: "Lato"
  },
  link: {
    fontFamily: "Lato",
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: "flex-end",
    justifySelf: "flex-end"
  }
});

export default () => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>Keren Chandran</Text>
      <Text style={styles.subtitle}>Front End Developer | Systems Design Engineer</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link style={styles.link}>github.com/kerenchandran</Link>
      <Link style={styles.link}>linkedin.com/in/kerenchandran</Link>
      <Link style={styles.link}>keren.chandran@gmail.com</Link>
    </View>
  </View>
);
