import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      url: 'http://dev108.100ege.ru/user/registration',
      iframes: [
        { name: 'Small', width: 320 },
        { name: 'Medium', width: 480 },
        { name: 'Large', width: 760 },
        { name: 'Extra large', width: 1024 }
      ],
      isEditMode: {}
    }
    this.handleInputKeyDown = event => {
      if (event.keyCode === 13) {
        this.setState({
          url: event.target.value
        })
      }
    }
  }
  render () {
    var lastWidth = 0
    return (
      <div>
        <div className='header'>
          <input
            placeholder='http://...'
            className='input-url'
            defaultValue={this.state.url}
            onKeyDown={this.handleInputKeyDown}
          />
        </div>
        <div className='iframes'>
          {this.state.iframes.map(iframe => {
            var _lastWidth = lastWidth
            lastWidth = iframe.width
            return (
              <div className='iframe' key={iframe.name}>
                <div className='iframe-head'>
                  <div className='iframe-name'>
                    {iframe.name}
                  </div>
                  <div className='iframe-name-edit'>
                    <div className='input-last-width'>{_lastWidth} {' - '}</div>
                    <input
                      type='number'
                      placeholder={iframe.width}
                      defaultValue={iframe.width}
                      onChange={event => {
                        this.setState({
                          iframes: this.state.iframes.map(_iframe => {
                            if (_iframe.name === iframe.name) {
                              _iframe.width = event.target.value < 200 ? 200 : event.target.value
                            }
                            return _iframe
                          })
                        })
                      }}
                      className='input-name'
                    />
                  </div>
                </div>
                <iframe
                  title={iframe.name}
                  height={window.innerHeight - 120}
                  src={this.state.url}
                  width={iframe.width}
                  frameBorder='0'
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App
