import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithms/SortingAlgorithms.js';
import './SortingVisualizer.css';

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';

const ANIMATION_SPEED_MS = 2;

const NUMBER_OF_ARRAY_BARS = 100;


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
        for (let i=0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5,650));
        }
        this.setState({array});
    }

    MergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }

    }

    QuickSort() {

    }

    HeapSort() {

    }

    BubbleSort() {

    
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
        <br></br>
        <button onClick={() => this.resetArray()}>Generate new Array</button>
        <button onClick={() => this.MergeSort()}>Merge Sort</button>
        <button onClick={() => this.QuickSort()}>Quick Sort</button>
        <button onClick={() => this.HeapSort()}>Heap Sort</button>
        <button onClick={() => this.BubbleSort()}>Bubble Sort</button>
        </div>
        );

    }


}






function randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


