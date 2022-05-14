import React from 'react';

import {storiesOf} from '@storybook/react';

import {Snackbar} from '../src/components/Snackbar';


const stories = storiesOf('App Test', module);

stories.add('Story 1', () => {
    return <Snackbar />
})