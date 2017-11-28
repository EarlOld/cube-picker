import './home.styl'
import React, { Component } from 'react'
import data from './data'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      elements: data,
      itemID: null,
      itemTitle: null,
      itemColor: null
    }
  }
  handleClick (currentItem) {
    if (currentItem.id !== this.state.itemID) {
      this.setState({
        itemID: currentItem.id,
        itemTitle: currentItem.title,
        itemColor: currentItem.color,
        formVisible: true
      })
    } else {
      if (this.state.formVisible) {
        this.setState({
          itemID: '',
          itemTitle: '',
          itemColor: '',
          formVisible: false
        })
      } else {
        this.setState({
          itemID: currentItem.id,
          itemTitle: currentItem.title,
          itemColor: currentItem.color,
          formVisible: true
        })
      }
    }
  }
  handleChangeTitle ({ target }) {
    this.setState({
      itemTitle: target.value,
      elements: this.state.elements.map(item => {
        if (item.id === this.state.itemID) {
          item.title = target.value
        }
        return item
      })
    })
  }
  handleChangeColor ({ target }) {
    this.setState({
      itemColor: target.value,
      elements: this.state.elements.map(item => {
        if (item.id === this.state.itemID) {
          item.color = target.value
        }
        return item
      })
    })
  }
  render () {
    return (
      <div className='Home'>
        <div className='Home-items'>
          {
            this.state.elements.map(item => (
              <div key={item.id} onClick={() => this.handleClick(item)} style={{background: item.color}} className='Home-items-cub'>
                <a title={item.title}>{item.title}</a>
              </div>
            ))
          }
        </div>
        <div className={this.state.formVisible ? 'Home-form' : 'hidden'} >
          <div className='Home-form-body'>
            <label htmlFor='title'>Title: </label>
            <input name='title' onChange={e => this.handleChangeTitle(e)} value={this.state.itemTitle} type='text' /><br />
            <label htmlFor='color'>Color: </label>
            <input name='color' onChange={e => this.handleChangeColor(e)} value={this.state.itemColor} type='color' />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
