import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    console.log('MyNavLink收到的props是:', this.props)
    return (
      <NavLink className={({isActive}) => [
            'list-group-item',
            isActive ? 'router-link-active' : null
          ].join(' ')
        } {...this.props}
      />
    )
  }
}
