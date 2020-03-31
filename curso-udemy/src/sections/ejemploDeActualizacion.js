import React, {Component} from 'react'
import PropTypes from 'prop-types'

const animal_images = {
    panda: 'https://image.shutterstock.com/image-photo/cute-panda-tree-260nw-201006434.jpg',
    cat: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=f6a7b1af&itok=1fdekAh2',
    dolphin: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
}

const animals = Object.keys(animal_images)

class AnimalImage extends Component
{
    state = {src: animal_images[this.props.animal]}

    componentWillReceiveProps (nextProps)
    {
        console.clear()
        console.log('1. ComponentWillReceiveProps')
        this.setState({src: animal_images[nextProps.animal]})
    }

    shouldComponentUpdate(nextProps)
    {
        console.log('2. ShouldComponentUpdate')
        return this.props.animal !== nextProps.animal
    }

    componentWillUpdate(nextProps, nextState)
    {
        console.log('3. ComponentWillUpdate')
        const img = document.querySelector('img')
        console.log('From img element', {alt: img.alt})
        //Web animation API.
        img.animate([
            {
            filter: 'blur(0px)'
            },
            {
                filter: 'blur(2px)'
            }],
            {
                duration: 500,
                easing: 'ease'
            })
    }

    render()
    {
        console.log('-> Render')
        return(
            <div>
                <p>Selected {this.props.animal}</p>
                <img
                alt={this.props.animal}
                src={this.props.src}
                width='250px'
                />
            </div>
        )
    }
}
AnimalImage.propTypes = {animal: PropTypes.oneOf(animals)}

class EjemploDeActualizacion extends Component
{
    state = {animal: 'panda'}

    _renderAnimalButton = (animal) => {
        return(
        <button
            disabled={animal === this.state.animal}
            key={animal}
            onClick={() => this.setState({animal})}>
            {animal}
            </button>)}

    render()
    {
        return(
            <div>
                <h4>Ciclos de actualización</h4>
                {animals.map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal} />
            </div>
        )
    }
}
export default EjemploDeActualizacion