import React from 'react';
import { Text, View } from '@react-pdf/core';

import ProjectEntry from './ProjectEntry';
import Title from '../Title';

import projectDetails from './data';

export default () => (
  <View>
    <Title title="Projects" />
    { projectDetails.data.map(project => (
      <ProjectEntry
        company={project.company}
        details={project.details}
        name={project.name}
        subtitle={project.subtitle}
        url={project.url}
      />
    ))}
  </View>
);
