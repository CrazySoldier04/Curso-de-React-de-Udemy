import React, {Component} from 'react'
import cars from '../data/cars.json'

class CarItem extends Component
{
    render()
    {
        return(
            cars.map((car) => {
            return(
                <div key={car.id}>
                <li>
                    <p>Serie: {car.id}</p>
                    <p><strong>Marca: </strong>{car.company}</p>
                    <p><strong>Modelo: </strong>{car.name}</p>
                </li>
                </div>
                )}
            )
        )
    }
}

/*class NumbersList extends Component
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
        return <CarItem id={car.id} key={car.id} car={car}/>
    }
}
*/

export default class CarItemList extends Component
{
    render()
    {
        return <CarItem />
    }
}