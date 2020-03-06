import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Box extends Component
{
    render()
    {
        return(
            <div style={{border: '1px solid #09F', margin: '5px', padding: '5px'}}>
                {this.props.children}
            </div>
        )
    }
}

class Article extends Component
{
    static propTypes = {author: PropTypes.string.isRequired}
    render()
    {
        const {title, author, date, children} = this.props
        return(
            <section>
                <h2>{title}</h2>
                {author && <p><em>Escrito por {author}</em></p>}
                <Box>{date}</Box>
        <article style={{textAlign: 'justify'}}>{children}</article>
            </section>
        )
    }
}

class BoxChildren extends Component
{
    render()
    {
        return(
            <div>
                <h4>Children props</h4>
                <Article
                    author="Eliott Salazar"
                    date={new Date().toLocaleDateString()}
                    title='Article about the children prop'
                    >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, urna a egestas aliquet, diam libero feugiat velit, sed laoreet mi enim sed nisl. Aenean ut enim tortor. Donec mollis, tellus sed dictum rutrum, diam nibh hendrerit enim, quis semper tellus tortor id arcu. Aliquam erat volutpat. Nam suscipit enim diam, vehicula volutpat ligula lobortis eget. Maecenas in eros eu arcu consequat malesuada. Maecenas eu placerat risus. Suspendisse ante lectus, feugiat ac diam ac, ullamcorper dictum arcu. Morbi eu ex ac elit dapibus sollicitudin. Quisque mollis lobortis lorem, tincidunt fermentum elit vestibulum id.</p>
                    <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, urna a egestas aliquet, diam libero feugiat velit, sed laoreet mi enim sed nisl. Aenean ut enim tortor.</strong>
                </Article>
            </div>
        )
    }
}
export default BoxChildren