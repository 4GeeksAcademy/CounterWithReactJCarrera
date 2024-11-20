import React, { useState} from "react";
import { Counter } from "./Counter";

//include images into your bundle

//create your first component
const Home = () => {

	const [contadorActual, setearContador] = useState(0);

	setTimeout(() => {
		setearContador(contadorActual + 1);
	}, 1000);

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Counter Your Time👽</h1>
		    <Counter contadorActual={contadorActual} />
		</div>
	);
};

export default Home;
