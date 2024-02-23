import About from "../about/about";
import Info from "../info/info";

const BuildPage = (index: number) => (
	<>
		<h3>Page {index}</h3>
		<div>
			Page {index} content: {<About />}
			Page {index} content:{<Info />}
		</div>
	</>
);

export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage(2);