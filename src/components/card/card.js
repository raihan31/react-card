import React from 'react';
import CardBody from '../card-body/card-body';
import CardHeader from "../card-header/card-header";
import CardFooter from "../card-footer/card-footer";
import '../../styles/card.scss';

class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div id={this.state.key} className='card-flex-item'>
                <div className='card-flex-wrapper'>
                    <CardHeader value={this.props.value}></CardHeader>
                    <CardBody value={this.props.value}></CardBody>
                    <CardFooter value={this.props.value}></CardFooter>
                </div>
            </div>
        )
    }
}
export default Card;
