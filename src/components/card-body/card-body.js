import React from 'react';
import CustomButtons from "../custom-buttons/custom-buttons";

class CardBody extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {
                    id: 'button-1',
                    buttonType: 'primary',
                    buttonText: 'View',
                    buttonClass: 'button-element view-button'
                },
                {
                    id: 'button-2',
                    buttonType: 'primary',
                    buttonText: 'Cancel',
                    buttonClass: 'button-element remove-button'
                }
            ]
        };
    }
    render() {
        const intents = this.props.value.intents > 1 ? `${this.props.value.intents} Intents` : `${this.props.value.intents} Intent`;
        return (
            <div className='card-flex-content'>
                <div className='card-content-name'>
                    <h2>{this.props.value.name}</h2>
                </div>
                <div className='card-content-intent'>
                    {intents}
                </div>
                <CustomButtons buttons={this.state.buttons}></CustomButtons>
            </div>
        )
    }
}

export default CardBody;
