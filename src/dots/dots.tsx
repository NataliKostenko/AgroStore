import Dot from '../dot/dot';
import './dots.css';

export default function Dots(props: { slidesCount: number; handler: (arg0: number) => void; }) {
	const dots = [];

	for (let i = 0; i < props.slidesCount; i++) {
		dots.push(<Dot key={`dot-${i}`} handler={() => props.handler(i)} />);
	}

	return <div className="dots">{dots}</div>;
}