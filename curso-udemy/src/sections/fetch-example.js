import React, {Component} from 'react'

class FetchExample extends Component
{
    state = {bpi: {}}
    componentDidMount()
    {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(res => res.json())
        .then(data => {const {bpi} = data
            this.setState({bpi})})
    }

    _renderCurrencies()
    {
        const {bpi} = this.state
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
            </div>
        )
    }
}

export default FetchExample