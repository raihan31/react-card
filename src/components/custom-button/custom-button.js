import React from 'react';

class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonObj: props.value
        };
    }

    render() {
        return(
            <button type="button" id={this.state.buttonKey} className={ this.state.buttonObj.buttonClass }>
                {this.state.buttonObj.buttonText }
            </button>
        )
    }

}

export default CustomButton;
