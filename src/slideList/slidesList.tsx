/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import * as React from 'react';
import Slide from '../slide/slide';
import './slidesList.css';

export default function SlidesList({ slideNumber, items }) {

	return <div
		className="slide-list"
		style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
		{
			items.map((slide: any, index: any) => (
				<Slide data={slide} key={index} />
			))}
	</div>
}