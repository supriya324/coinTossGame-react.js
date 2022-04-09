import {Component} from 'react'

import './index.css'

const HEADS_IMG = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
class CoinToss extends Component {
  state = {tossResultImage: HEADS_IMG, headsCount: 0, tailsCount: 0}

  TossCoinButton = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let TossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (tossResult === 0) {
      TossImage = HEADS_IMG
      latestHeadsCount += 1
    } else {
      TossImage = TAILS_IMG
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: TossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph"> Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="image" />
          <button
            className="button"
            type="button"
            onClick={this.TossCoinButton}
          >
            Toss Coin
          </button>
          <div className="coin-toss">
            <p className="total"> Total:{totalCount} </p>
            <p className="total"> Heads:{headsCount} </p>
            <p className="total">Tails:{tailsCount} </p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
