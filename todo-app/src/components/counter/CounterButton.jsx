import React, {Component} from 'react'
import './counter.css'
class CounterButton extends Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }
    render (){
        return(
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
               {/* <span className="count">{this.state.counter}</span>*/}
            </div>

        )
    }

    increment(){
        {/*this.setState({
            counter:this.state.counter+this.props.by
        });*/}    
        this.props.incrementMethod(this.props.by);

    }

    decrement(){
        this.props.decrementMethod(this.props.by);
    }
}
export default CounterButton