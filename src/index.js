import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'


export default class AnimatedCheckbox extends Component {
  state = {
    isChecked: false
  }

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    fill: PropTypes.bool
  }

  static defaultProps = {
    id: 'test',
    name: 'FRE',
    value: false,
    disabled: false,
    fill: true
  }

  render() {
    const {
      id, name, value, onChange, disabled, fill
    } = this.props

    return (
      <div>
        <input
          id={id}
          type="checkbox"
          className={styles.hiddenCheckbox}
          value={value}
          disabled={disabled}
          onChange={() => { this.setState({ isChecked: !this.state.isChecked })}}
        />
        <label htmlFor={id}>
          <div className={fill ? styles.checkCircleFill : styles.checkCircle}>
            <svg
              id="Layer_1"
              viewBox="0 0 104 104"
              enableBackground="new 0 0 104 104"
            >
              <polyline
                id="Line-6"
                stroke="#979797"
                points="8.5 17.1666667 43.3333333 4.5 8.5 28.0238095 43.3333333 10.8333333 8.5 35.2619048 52.5 17.1666667 19.5 35.2619048 52.5 23.047619 14 42.5 52.5 29.1547619"
              ></polyline>
            </svg>
          </div>
          <span>{name}</span>
        </label>
      </div>
    );
  }
}
