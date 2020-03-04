import React, {Component} from 'react'

export default class Form extends Component
{
    constructor()
    {
        super()
        this.state = {
            inputName: '',
            inputEmail: '@',
            inputTerms: true
        }

    }
    handleSubmit = (e) =>
    {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = (e) =>
    {
        console.log('handleChange')
        console.log(e.target.checked)
        this.setState({inputTerms: e.target.checked})
    }
    render()
    {
        return(
            <div>
                <h4>Formulario</h4>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">First name</label><br/>
                    <input id="name" name="userName" type="text" onChange={e => this.setState({inputName: e.target.value})}
                    placeholder="First name" value={this.state.inputName} /><br/>
                    <label htmlFor="email">Email</label><br/>
                    <input id="email" name="email" type="text" onChange={e => this.setState({inputEmail: e.target.value})}
                    placeholder="Email" value={this.state.inputEmail} /><br/>
                    <button type="submit">Enviar</button><br/>
                    <label htmlFor="Terms">Accepted terms</label>
                    <input id="Terms" name="Terms" type="checkbox" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}