import React from 'react';

import './SortingVisualizer.css';

const PRIMARY_COLOR = 'turquoise';

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i=0; i <100; i++) {
            array.push(randomIntFromInterval(5,650));
        }
        this.setState({array});
    }

    render() {
         const {array} = this.state;

        return( 
        <div className="array-container">
        {array.map((value,idx) => (
            <div 
            className="array-bar" 
            key={idx}
            style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,}}>
            </div>
        ))}
        </div>
        );

    }


}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


