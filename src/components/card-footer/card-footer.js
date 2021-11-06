import React from 'react';

class CardFooter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getFormatDate(date) {
        return `${new Date(date).toDateString()} ${new Date(date).toLocaleTimeString()} `;
    }

    render() {

        return(
            <div className='card-footer'>
                <span>Last updated: </span>
                <span>{ this.getFormatDate(this.props.value.dateUpdated) }</span>
            </div>
        )
    }

}
export default CardFooter;
