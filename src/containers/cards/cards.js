import '../../styles/cards.scss';
import React from 'react';
import Card from "../../components/card/card";
import {sampleData} from "../../data/sampleData";
class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: sampleData,
            searchValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({
            searchValue: e.target.value
        });

        const finalValues = sampleData.filter((data) => {
            if(data.name.indexOf(this.state.searchValue) > -1)
                return data;
        });
        this.setState({
            cards: finalValues
        });
    }

    render() {
        return(
            <div>

                <input type="text" placeholder='Search.....' value={this.state.searchValue} onChange={this.handleChange} />
                <div className="card-flex">
                    {this.state.cards.map((card) => {
                        return <Card value={card} key={card.id}></Card>
                    })}
                </div>
            </div>
        )
    }

}

export default Cards;
