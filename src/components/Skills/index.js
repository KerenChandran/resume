import React from 'react';
import { Text, View } from '@react-pdf/core';

import SkillEntry from './SkillEntry';
import Title from '../Title';

import skillsDetails from './data';

export default () => (
  <View>
    <Title title="Skills" />
    { skillsDetails.data.map(skills => (
      <SkillEntry
        name={skills.name}
        skills={skills.skills}
      />
    ))}
  </View>
);
