import { useMatches } from "react-router-dom";
import './breadcrumbs.css';

export default function Breadcrumbs() {
	let matches = useMatches();
	let crumbs = matches
		.filter((match) => match.handle);

	return (
		<ul className="breadcrumbs">
			{crumbs.map((crumb, index) => (
				<li key={index}>{crumb.handle as unknown as React.ReactNode}</li>
			))}
		</ul>
	);
}