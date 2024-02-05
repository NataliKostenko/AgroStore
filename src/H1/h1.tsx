import * as React from 'react';
import './h1.css';
import Decor from '/decor.svg';

export default function H1(props) {

	return <div className='h1'>
		<img src={Decor} />
		<h1> {props.text}</h1>
	</div>
}