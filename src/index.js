import React, { Component } from 'react';
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View
} from '@react-pdf/core';
import ReactPDF from '@react-pdf/node';

import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Skills from './components/Skills';

// Create styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  leftColumn: {
    flexDirection: "column",
    flexGrow: 4,
    marginLeft: 30,
    marginRight: 15,
    marginTop: 20
  },
  rightColumn: {
    flexDirection: "column",
    flexGrow: 8,
    marginLeft: 15,
    marginRight: 30,
    marginTop: 20
  }
});

Font.register(`${__dirname}/assets/fonts/Open_Sans/OpenSans-Regular.ttf`, { family: 'Open Sans' });
Font.register(`${__dirname}/assets/fonts/Lato/Lato-Regular.ttf`, { family: 'Lato' });
Font.register(`${__dirname}/assets/fonts/Lato/Lato-Italic.ttf`, { family: 'Lato Italic' });
Font.register(`${__dirname}/assets/fonts/Lato/Lato-Bold.ttf`, { family: 'Lato Bold' });

const App = () => (
  <Page size="A4">
    <Header />
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Education />
        <Skills />
        <Interests
          interests={[
            'Gaming',
            'Photography',
            'Ping Pong'
          ]}
        />
      </View>
      <View style={styles.rightColumn}>
        <Experience />
        <Projects />
      </View>
    </View>
  </Page>
);

ReactPDF.render(
  <Document>
    <App />
  </Document>, `${__dirname}/resume.pdf`);
