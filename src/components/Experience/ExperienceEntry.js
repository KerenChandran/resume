import React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/core';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  date: {
    fontSize: 11,
    fontFamily: "Lato"
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
  headerContainer: {
    flexDirection: "row"
  },
  leftColumn: {
    flexDirection: "column",
    flexGrow: 9
  },
  rightColumn: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "flex-end",
    justifySelf: 'flex-end'
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: "Lato Bold"
  }
});

export default ({ company, details, endDate, position, startDate, url }) => {
  const title = `${company} | ${position}`;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Link style={styles.title} src={url}>{title}</Link>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{startDate} - {endDate}</Text>
        </View>
      </View>
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
