import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
          <img src={loading} alt="loading" className='h-25 w-25'/>
      </div>
    )
  }
}
