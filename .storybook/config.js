import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options'
import * as theme from '../src/theme'

const req = require.context('../src/', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

const style = {
  padding: '20px',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'auto',
}

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    <div style={style}>
      { storyFn() }
    </div>
  </ThemeProvider>
);
addDecorator(ThemeDecorator);

setOptions({
  name: 'WebMadeira',
  addonPanelInRight: true,
})

configure(loadStories, module)
