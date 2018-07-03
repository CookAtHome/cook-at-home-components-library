/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

const buttonStories = storiesOf('Atoms / Button', module);

buttonStories.add(
  'Simple button', () => (
  <Button>Hello</Button>
));
