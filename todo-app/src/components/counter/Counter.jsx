
import React, {Component} from 'react'
import './counter.css'
import CounterButton from './CounterButton'
class Counter extends Component{
    render (){
        return(
            <div className="counter">
                <CounterButton by={1}></CounterButton>
                <CounterButton by={5}></CounterButton>
                <CounterButton by={10}></CounterButton>
            </div>

        )
    }
    
}
export default Counter