import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  upBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  upMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="maincontainer">
        <div className="innercontainer">
          <h1>
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="container">
            <div className="mango">
              <img
                className="image1"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div>
                <button onClick={this.upMango} type="button">
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="banana">
              <img
                className="image1"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div>
                <button onClick={this.upBanana} type="button">
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
