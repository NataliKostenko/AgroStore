/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import './slider.css'
import Arrow from '../arrow/arrow'
import Dots from '../dots/dots'
import SlidesList from '../slideList/slidesList'
import * as React from "react";

const Slider = function ({ url, width, height, autoPlay, autoPlayTime, number, slideNumber, slidesCount, }) {
	const [items, setItems] = useState([]);
	const [curentSlideNumber, setCurentSlideNumber] = useState(0);
	const [touchPosition, setTouchPosition] = useState(null);

	useEffect(() => {
		const loadData = async () => {
			if (!url) throw new Error('URL for slider must be provided.');
			const images = await fetch(url)
				.then((images) => images.json());
			setItems(images);
		};
		loadData();
	}, []);

	const changeSlide = (direction = 1) => {
		let slideNumber = 0;
		if (curentSlideNumber + direction < 0) {
			slideNumber = items.length - 1;
		} else {
			slideNumber = (curentSlideNumber + direction) % items.length;
		}
		setCurentSlideNumber(slideNumber);
	};

	const goToSlide = (number) => {
		setCurentSlideNumber(number % items.length);
	};

	const handleTouchStart = (e) => {
		const touchDown = e.touches[0].clientX;
		setTouchPosition(touchDown);
	};

	const handleTouchMove = (e) => {
		if (touchPosition === null) {
			return;
		}
		const currentPosition = e.touches[0].clientX;
		const direction = touchPosition - currentPosition;
		if (direction > 10) {
			changeSlide(1);
		}
		if (direction < -10) {
			changeSlide(-1);
		}
		setTouchPosition(null);
	};

	useEffect(() => {
		if (!autoPlay) return;
		const interval = setInterval(() => {
			changeSlide(1);
		}, autoPlayTime);
		return () => {
			clearInterval(interval);
		};
	}, [items.length, curentSlideNumber]); // when images uploaded or slide changed manually we start timer

	return (
		<div
			style={{ width, height }}
			className="slider"
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
		>
			<div className="display">
				<Arrow angle={0} clickHandler={() => changeSlide(-1)} />
				<SlidesList items={items} slideNumber={curentSlideNumber} />
				<Arrow angle={180} clickHandler={() => changeSlide(1)} />
			</div>
			<Dots slidesCount={items.length} handler={goToSlide} />
		</div>
	);
};

Slider.defaultProps = {
	autoPlay: false,
	autoPlayTime: 5000,
	width: "100%",
	height: "100%"
};

export default Slider;
