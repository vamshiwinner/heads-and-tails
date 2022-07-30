// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
  }

  onClickButton = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossedImage = ''
    let head = headsCount
    let tail = tailsCount

    if (toss === 0) {
      tossedImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      head += 1
    } else if (toss === 1) {
      tossedImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      tail += 1
    }
    this.setState({
      imageUrl: tossedImage,
      headsCount: head,
      tailsCount: tail,
    })
  }

  render() {
    const {imageUrl} = this.state
    const {headsCount} = this.state
    const {tailsCount} = this.state
    const total = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="cart-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img className="image" src={imageUrl} alt="toss result" />

          <button onClick={this.onClickButton} className="button" type="button">
            Toss Coin
          </button>

          <div className="pera-container">
            <p className="pera">Total:{total}</p>
            <p className="pera">Heads:{headsCount}</p>
            <p className="pera">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
