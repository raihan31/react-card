import React from 'react';
import CustomButton from "../custom-button/custom-button";

class CustomButtons extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            buttons: props.buttons
        };
    }

    render() {
        return(
            <div className='card-content-button'>
                {this.state.buttons.map((button) => {
                   return <CustomButton value={button} key={button.id}>
                        {button.buttonText }
                    </CustomButton>
                })}
            </div>
        )
    }

}

export default CustomButtons;
