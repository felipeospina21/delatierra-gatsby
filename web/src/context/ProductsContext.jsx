import React, { useState, createContext } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = props => {
	const [ products, setProducts ] = useState([
		{
			title       : 'ghee',
			alias       : 'Ghee',
			slug        : 'ghee',
			image       : 'prod-ghee-vert.jpg',
			homeImage   : 'ghee.jpeg',
			id          : 0,
			excerpt     :
				'Mantequilla libre de lactosa y caseína con un deliciosos sabor y aroma. Ideal para reemplazar el aceite de cocina, la mantequilla y la margarina.',
			description :
				'El Ghee es conocido como el “oro líquido” de la ayurveda y la cocina india, ya que ofrece un sinfín de beneficios nutricionales y aporta un deliciosos sabor a las preparaciones. Se obtiene a partir del procesamiento de la mantequilla de vaca tradicional, en el cual se extrae la caseína, la lactosa y el agua. Nuestro GHEE es elaborado en pequeños lotes para garantizar alta calidad en cada una de las producciones. Utilizamos mantequilla pura, sin sal, proveniente de vacas alimentadas únicamente con pasto.',
			properties  : [
				'Aumenta la capacidad digestiva',
				'No altera el colesterol',
				'Lubrica las articulaciones',
				'Alto en antioxidantes',
				'Incrementa la absorción de las vitaminas',
				'Potencializa la memoria y la concentración',
				'Favorece el sistema cardiovascular'
			],
			ingredients : [ '100% mantequilla de vacas de pastoreo' ],
			sizes       : [ '315gr', '160gr' ],
			cost        : [ 24500, 13000 ],
			quantity    : [ 0, 0 ],
			showBuyMenu : false
		},
		{
			title       : 'crema de marañon',
			alias       : 'C.Marañon',
			slug        : 'crema-marañon',
			image       : 'prod-mar-vert.jpg',
			homeImage   : 'marañon.jpeg',
			id          : 1,
			excerpt     :
				'Elaborada con marañón natural tostado. Sabor con notas dulces y textura suave y cremosa.',
			description :
				'Nuestra crema combina todas las propiedades del marañón con una textura suave y un sabor indescriptible! Es 100% natural y no contiene saborizantes, conservantes ni ningún tipo de aditivo. Utilizamos marañones de origen local, sembrados y cosechados con amor y detenimiento en la región Caribe colombiana. ',
			properties  : [
				'Alto contenido de grasas saludables, fibra y proteína',
				'Bunea fuente de vitaminas E, B1 y B2',
				'Aporta  calcio, magnesio, fosforo, zinc, cobre y hierro',
				'Fortalece la memoria y estimula la actividad cerebral',
				'Gran aliado para el sistema cardiovascular, inmune y nervioso'
			],
			ingredients : [ 'Marañon natural tostada', 'Sal marina', 'Stevia' ],
			sizes       : [ '400gr', '200gr' ],
			cost        : [ 46500, 24000 ],
			quantity    : [ 0, 0 ],
			showBuyMenu : false
		},
		{
			title       : 'crema de almendras',
			alias       : 'C.Almendras',
			slug        : 'crema-almendras',
			image       : 'prod-almd-vert.jpg',
			homeImage   : 'almendra.jpg',
			id          : 2,
			excerpt     :
				'Elaborada con almendra natural tostada. Sabor con notas dulces y saladas, y textura balanceada entre crunchy y cremosa.',
			description :
				'Nuestra crema de almendras tiene un deliciosos sabor con notas dulces y saladas, y una textura con un balance rustico y cremoso. Nuestras almendras son procesadas con su piel ya que en ésta se encuentran la mayoría de antioxidantes que contiene este fruto seco. Es ideal para esparcir sobre pan, galletas, o incluir en deliciosas preparaciones como batidos o ensaladas de frutas. Es 100% natural y no contiene saborizantes, conservantes ni ningún tipo de aditivo',
			properties  : [
				'Alto contenido de grasas saludables, fibra y proteína ',
				'Buena fuente de antioxidantes ',
				'Alto contenido de vitamina E y B',
				'Potencializa el metabolismo ',
				'Genera sensación de saciedad',
				'Promueve la salud cardiovascular'
			],
			ingredients : [ 'Almendra natural tostada', 'Sal marina', 'Stevia' ],
			sizes       : [ '400gr', '200gr' ],
			cost        : [ 40500, 21000 ],
			quantity    : [ 0, 0 ],
			showBuyMenu : false
		},
		{
			title       : 'crema de macadamia',
			alias       : 'C.Macadamia',
			slug        : 'crema-macadamia',
			image       : 'prod-maca-vert.jpg',
			homeImage   : 'macadamia.jpg',
			id          : 3,
			excerpt     : 'Crema natural de macadamia, sin conservantes.',
			description : '',
			properties  : [],
			ingredients : [ 'Macadamia natural tostada' ],
			sizes       : [ '400gr', '200gr' ],
			cost        : [ 52000, 31000 ],
			quantity    : [ 0, 0 ],
			showBuyMenu : false
		}
	]);

	return (
		<ProductsContext.Provider value={[ products, setProducts ]}>
			{props.children}
		</ProductsContext.Provider>
	);
};

// export default ({ element }) => <ProductsProvider>{element}</ProductsProvider>;
