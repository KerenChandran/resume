import React from 'react';
import { Text, View } from '@react-pdf/core';

import ExperienceEntry from './ExperienceEntry';
import Title from '../Title';

import experienceDetails from './data';

export default () => (
  <View>
    <Title title="Experience" />
    { experienceDetails.data.map(experience => (
      <ExperienceEntry
        company={experience.company}
        details={experience.details}
        endDate={experience.endDate}
        position={experience.position}
        startDate={experience.startDate}
        url={experience.url}
      />
    ))}
  </View>
);
