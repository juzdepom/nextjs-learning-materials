class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render() {
        let { USD, GBP, EUR  } = this.props.bpi
        let description, code, rate, currency = null;

        if(this.state.currency === 'USD') {
            currency = USD
        } else if(this.state.currency === 'GBP'){
            currency = GBP
        } else if(this.state.currency === 'EUR'){
            currency = EUR
        }

        description = currency.description
        code = currency.code
        rate = currency.rate

        return(<div>
            <ul className="list-group">
                <li className="list-group-item">
                    Bitcoin Rate for {description}:
                    <span className="badge badge-primary">
                        {code}
                    </span>
                    <strong>{rate}</strong>
                </li>
            </ul>
            <br/>
            <select
                onChange={e => this.setState({currency: e.target.value})}
                className="form-control">
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
            </select>


        </div>)
    }
}

export default Prices;