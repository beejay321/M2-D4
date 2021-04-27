import React from 'react'

export default class Counter extends React.Component {
    state = {
        showMessage: false
    }

    render() {
        return <div>
            <span>Spoiler alert:</span>
            <div className={this.state.showMessage ? 'd-flex' : 'd-none'}>
                in the end the protagonist dies
            </div>
            <button onClick={() => this.setState({showMessage: !this.state.showMessage})}>click me </button>
            
        </div>
    }
}