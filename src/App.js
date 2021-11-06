import "./styles/variables.scss";
import "./styles/app.scss";
import React from 'react';
import Cards from "./containers/cards/cards";
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="app">
                <Cards></Cards>
            </div>
        );
    }
}

export default App;
