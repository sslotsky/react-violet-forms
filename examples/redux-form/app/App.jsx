import React, { Component } from 'react'
import SignUp from './SignUp'
import OrderForm from './OrderForm'

const componentMap = {
  1: SignUp,
  2: OrderForm
}

export default class App extends Component {
  state = {
    page: 1
  };

  render() {
    const { submit, saving } = this.props
    const { page } = this.state
    const next = () => this.setState({
      page: page + 1
    })

    const prev = () => this.setState({
      page: page - 1
    })

    const Example = componentMap[page];
    return (
      <div className="soft">
        <ul className="pagination">
          <li><button onClick={prev} disabled={page === 1}>&lt;</button></li>
          <li><button onClick={next} disabled={page === 2}>&gt;</button></li>
        </ul>
        <Example />
      </div>
    )
  }
}
