import React, {Component} from 'react'

class BitCoinPrice extends Component
{
    _renderCurrencies()
    {
        const {bpi} = this.props
        const currencies = Object.keys(bpi)
        return currencies.map(currency =>(
        <div key={currency}>
            <p>1 BTC is {bpi[currency].rate}<span> {currency}</span></p>
        </div>)
        )
    }

    render()
    {
        return(
        <div>
            <h4>Bitcoin Example</h4>
            {this._renderCurrencies()}
        </div>)
    }
}
export default BitCoinPrice