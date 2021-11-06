import React from 'react';

const originTypes  = Object.freeze({
    automated: 'automated',
    manual: 'manual'
});

class CardHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            automateImageSrc: './assets/images/boltIcon.svg'
        };
    }

    render() {
        switch (this.props.value.originType) {
            case originTypes.automated:
                return (
                    <div className='card-header card-automate-origin'>
                        <img src={require('../../assets/images/boltIcon.svg').default} alt=""/>
                        {this.props.value.originType} origin
                    </div>
                );
            case originTypes.manual:
                return (
                    <div  className='card-header card-manual-text'>
                        {this.props.value.originType}
                    </div>
                );
            default:
                return (
                    <div  className='card-header card-default-text'>
                        {this.props.value.originType}
                    </div>
                );
        }
    }
}

export default CardHeader;
