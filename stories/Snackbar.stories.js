import React from 'react';

import {storiesOf} from '@storybook/react';

import {SnackbarExample} from '../src/examples/SnackbarExample';


const stories = storiesOf('App Test', module);

stories.add('Story 1', () => {
    return <SnackbarExample open />
})