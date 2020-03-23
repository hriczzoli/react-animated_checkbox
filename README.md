# react-animated_checkbox

> A customizable animated checkbox for React

![Preview of checkbox](checkbox-animation.gif)

[![NPM](https://img.shields.io/npm/v/react-animated_checkbox.svg)](https://www.npmjs.com/package/react-animated_checkbox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @hriczzoli/react-animated_checkbox
```

## Usage

```jsx
import React, { Component } from 'react'

import {default as AnimatedCheckbox} from '@hriczzoli/react-animated_checkbox'

class Example extends Component {
  render () {
    return (
      <AnimatedCheckbox />
    )
  }
}
```

## Props

| Props | Values |
| --- | --- |
| id | string |
| name | string |
| value | bool |
| onChange | function |
| disabled | bool |
| fill | bool |

```jsx
import React, { Component } from 'react'

import {default as AnimatedCheckbox} from '@hriczzoli/react-animated_checkbox'

class App extends Component {
  render () {
    return (
      <AnimatedCheckbox
        id="check"
        name="NPM"
        value={value}
        disabled={disabled}
        onChange={() => { this.setState({ isChecked:!this.state.isChecked })}}
      />
    )
  }
}

```


## License

MIT © [hriczzoli](https://github.com/hriczzoli)
