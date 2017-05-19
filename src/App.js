import React, { Component } from "react";
import { connect } from "react-redux";
import { changeNumber } from './ducks/counter';
import { test } from './ducks/testReducer';

import "./App.css";

export class App extends Component {
	render() {
		return (
			<div className="app">
				<section className="counter">
					<h1 className="counter__current-value">{ this.props.number}</h1>
					<div className="counter__button-wrapper">
						<button
							className="counter__button increment-one"
							onClick={ () => this.props.test(this.props.number + 1) }
						>
							+1
						</button>
						<button
							className="counter__button increment-five"
							onClick={ () => this.props.changeNumber(this.props.number + 5) }
						>
							+5
						</button>
						<button
							className="counter__button decrement-one"
							onClick={ () => this.props.changeNumber(this.props.number - 1) }
						>
							-1
						</button>
						<button
							className="counter__button decrement-five"
							onClick={ () => this.props.changeNumber(this.props.number - 5) }
						>
							-5
						</button>
						<br />
						<button
							className="counter__button undo"
							disabled={ true }
							onClick={ () => null }
						>
							Undo
						</button>
						<button
							className="counter__button redo"
							disabled={ true }
							onClick={ () => null }
						>
							Redo
						</button>
					</div>
				</section>
				<section className="state">
					<pre>
						{ JSON.stringify( this.props, null, 2 ) }
					</pre>
				</section>
			</div>
		);
	}
}


function mapStateToProps(state){
	console.log("mapStateToProps", state);
	if(state.counter.number > state.testReducer.number){
		return{
			number: state.counter.number,
		}
	}
	return{
		number:state.testReducer.number
	}
}

export default connect(mapStateToProps, {changeNumber, test})(App);
