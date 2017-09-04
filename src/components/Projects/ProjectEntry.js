import React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/core';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  detailContainer: {
    flexDirection: "row"
  },
  detailLeftColumn: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10
  },
  detailRightColumn: {
    flexDirection: "column",
    flexGrow: 9
  },
  bulletPoint: {
    fontSize: 10
  },
  details: {
    fontSize: 10,
    fontFamily: "Lato"
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: "Lato Bold"
  },
  subtitle: {
    fontSize: 10,
    fontFamily: "Lato Italic"
  }
});

export default ({ company, details, name, subtitle, url }) => {
  const title = `${company} | ${name}`;
  return (
    <View style={styles.container}>
      { !url ?
        <Text style={styles.title}>{title}</Text> :
        <Link style={styles.title} src={url}>{title}</Link>
      }
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View>
        { details.map(detail => (
          <View style={styles.detailContainer}>
            <View style={styles.detailLeftColumn}>
              <Text style={styles.bulletPoint}>•</Text>
            </View>
            <View style={styles.detailRightColumn}>
              <Text style={styles.details}>{detail}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
