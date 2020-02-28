import React, {Component} from 'react'

class NumbersList extends Component
{
    render()
    {
        const numbers = [1,1,3,4,5]
        return(
            <div>
            {numbers.map((number,index) => {
                return <p key={index}>{number}</p>
            })}
            </div>
            )
    }
}

export default class NumberList extends Component
{
    render()
    {
        return <NumbersList />
    }
}