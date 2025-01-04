import { useMatches } from "react-router-dom";
import './breadcrumbs.css';

export default function Breadcrumbs() {
	let matches = useMatches();
	let crumbs = matches
		.filter((match) => Boolean(match.handle))
		.map((match) => match.handle(match.data));

	return (
		<ul className="breadcrumbs">
			{crumbs.map((crumb, index) => (
				<li key={index}>{crumb}</li>
			))}
		</ul>
	);
}