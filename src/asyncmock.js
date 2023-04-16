const productos = [
    {
        id: "1",
        nombre: "Alimento Excellent Pollo y Arroz Adulto +7 - 15 Kg",
        precio: 13360,
        img: "../img/id-01.jpg",
        idCat: "perro",
        descripcion: "La exclusiva combinación de ingredientes seleccionados le confiere a las fórmulas Excellent® la propiedad de generar cambios significativos en la calidad de vida de los perros y gatos, a través de una nutrición de vanguardia con beneficios fácilmente comprobables, que van desde una protección extra al sistema de defensas, un incremento en la absorción de nutrientes, hasta una conformación más consistente de las heces. PURINA® Excellent® ADULT 7+ CHICKEN & RICE brinda una nutrición especializada para los perros que necesitan mejorar su calidad y expectativa de vida. Ofrece una fórmula que incluye proteínas de alta digestibilidad y grasa moderada, prebióticos y minerales quelados, antioxidantes naturales, calcio y fósforo, garantizando así una salud prolongada."

    },
    {
        id: "2",
        nombre: "Alimento Excellent Perro Adulto Med y Grande - 20 Kg",
        precio: 13570,
        img: "../img/id-02.jpg",
        idCat: "perro",
        descripcion: "La exclusiva combinación de ingredientes seleccionados le confiere a las fórmulas Excellent® la propiedad de generar cambios significativos en la calidad de vida de los perros y gatos, a través de una nutrición de vanguardia con beneficios fácilmente comprobables, que van desde una protección extra al sistema de defensas, un incremento en la absorción de nutrientes, hasta una conformación más consistente de las heces. Los perros adultos tienen diferentes necesidades nutricionales que los cachorros o los perros maduros. PURINA® Excellent® ADULT CHICKEN & RICE ofrece una fórmula completa que incluye aminoácidos esenciales, inulina, vitaminas, minerales y zeolita, aportando un óptimo balance nutricional y un sabor irresistible."
    },
    {
        id: "3",
        nombre: "Alimento Excellent Skin Care Cordero para Perro Adulto - 15 Kg",
        precio: 12430,
        img: "../img/id-03.jpg",
        idCat: "perro",
        descripcion: "Purina Excellent Adulto Skin Care con cordero es un alimento balanceado completo para perros adultos de todos los tamaños con piel sensible. Su fórmula se basa en el exclusivo sistema smart nutrition (creado por Purina), el cual mediante una nutrición balanceada aporta múltiples beneficios provenientes de sus componentes de alta calidad, manteniendo a tu perro con un excelente estado de salud. Este alimento está compuesto con un 24% de proteína y un 11% de grasa."
    },
    {
        id: "4",
        nombre: "Alimento Excellent para Perro Adulto Pequeño - 15 Kg",
        precio: 11785,
        img: "../img/id-04.jpg",
        idCat: "perro",
        descripcion: "Los perros adultos tienen diferentes necesidades nutricionales que los cachorros o los perros maduros. PURINA® Excellent® ADULT CHICKEN & RICE SMALL BREED ofrece una fórmula completa que incluye aminoácidos esenciales, inulina, vitaminas, minerales y zeolita, aportando un óptimo balance nutricional y un sabor irresistible."
    },
    {
        id: "5",
        nombre: "Cama Huella Paris Negro - XL",
        precio: 30650,
        img: "../img/id-05.jpg",
        idCat: "perro",
        descripcion: "La Cama Huella París, es una gran alternativa para darle a tu perro un descanso de calidad. Ofrece un diseño chic y moderno para combinar con las decoraciones de tu hogar, pero sobre todo está confeccionada de forma que sea cómoda, suave y mullida para asegurar el confort de tu mascota. Incluye 2 almohadones toy (color sujeto a disponibilidad). 100% hecho a mano. Diseño de calidad. Promete un descanso superior para tu mascota. Telas tejidas Panamá. Espuma de Alta Densidad."

    },
    {
        id: "6",
        nombre: "Moises Huella Living Chocolate",
        precio: 14575,
        img: "../img/id-06.jpg",
        idCat: "perro",
        descripcion: "El Moises Huella Living Chocolate, es una opción ideal para tu mascota y tu hogar, su diseño en pana y simil cuero le da un estilo genial. Además, se puede abrir y extender para darle más espacio y comodidad a tu perro. Está relleno en guata y vellón siliconado. Diseño elegante. Extensible. Relleno de vellón sintético y guata. Tela simil cuero y pana. Si a tu mascota le gusta estirarse mientras duerme, las camas rectangulares son su mejor opción. Si en cambio es de los que se acurrucan, te recomendamos camas redondas o moisés."
    },
    {
        id: "7",
        nombre: "Almohadon Huella Oval Rosa - M",
        precio: 7665,
        img: "../img/id-07.jpg",
        idCat: "perro",
        descripcion: "El nuevo Almohadon Huella Oval Rosa, está pensado para darle las mejores horas de sueño a tu mascota. Confeccionado en pana super suave al tacto, con un tratamiento antimanchas, es ideal para mantener la limpieza del mismo. Su relleno es de vellón siliconado de primera calidad. Pana suave al tacto. Diseño clásico. Tratamiento antimanchas. Vellón siliconado."
    },
    {
        id: "8",
        nombre: "Juguete Kong Classic II",
        precio: 13100,
        img: "../img/id-08.jpg",
        idCat: "perro",
        descripcion: "El Kong clásico es el estándar dorado de los juguetes de perro y ofrece un enriquecimiento a los canes al ayudarlos a satisfacer sus necesidades instintivas. Su fórmula es ultra durable y tiene un pique impredecible para jugar con las mascotas. Enseña a masticar de manera correcta, a la vez enriqueciendo mentalmente a los cachorros. La goma de los juguetes Kong está diseñada especificamente para los dientes de un cachorro. Goma natural."
    },
    {
        id: "9",
        nombre: "Soga Cancat Fun Antiestres - 66 Cm",
        precio: 5100,
        img: "../img/id-09.jpg",
        idCat: "perro",
        descripcion: "La Soga con doble nudo Cancat pertenece a la línea de sogas FUN, diseñada especialmente para que tu mascota libere su stress mientras juega en el clásico “tira y afloje”. Ideal para interactuar con nuestro perro. También se usan para que tu mejor amigo pueda morder y fortalecer sus dientes. Anti-stress. Confeccionada con tela resistente. "

    },
    {
        id: "10",
        nombre: "Juguete Rascals Anillo Dispenser Amarillo",
        precio: 4850,
        img: "../img/id-10.jpg",
        idCat: "perro",
        descripcion: "El Juguete Rascals Anillo Dispenser Amarillo, está pensado para que tu perro pueda divertirse y jugar en todo momento, logrando así una vida alegre y libre de estrés. Además, el juguete se puede rellenar con snacks saludables, haciendo que tu mascota utilice la curiosidad y el ingenio para encontrarlos. Esto lo vuelve una gran opción para estimular el desarrollo mental de tu perro y lograr un nivel de actividad óptimo. Excelente para arrojar y jugar con tu mascota. Materiales resistentes y duraderos. Promueve dientes limpios y encías sanas. Estimula la mente de tu perro."
    },
    {
        id: "11",
        nombre: "Soga Dental Circular Star Wars Dental",
        precio: 2950,
        img: "../img/id-11.jpg",
        idCat: "perro",
        descripcion: "La Soga Circular Dental Star Wars , es un juguete divertido y con muchos beneficios para que tu perro juegue en cualquier momento. Sus materiales son súper resistentes y colaboran a mantener la salud dental ya que al morderlo, limpia los dientes. Resistente. Favorece la higiene dental y es super saludable. 100% lona de poliéster. "
    },
    {
        id: "12",
        nombre: "Cucha Durapets Roja - 4",
        precio: 24200,
        img: "../img/id-12.jpg",
        idCat: "perro",
        descripcion: "La Cucha Durapets, está pensada para darle a tu mascota un espacio cómodo y sobre todo seguro. Está hecha en un material totalmente inyectado, desarrollado con plástico 100% reciclado, que ofrece mayor resistencia, calidad y durabilidad. Además cuenta con una chimenea, que facilita la ventilación y la expulsión de posibles olores. El techo cuenta con tratamiento UV que protege a la mascota de los rayos ultravioleta."
    },
    {
        id: "13",
        nombre: "Alimento Excellent Pollo Y Arroz para Gato - 7,5 Kg",
        precio: 10345,
        img: "../img/id-13.jpg",
        idCat: "gato",
        descripcion: "La exclusiva combinación de ingredientes seleccionados le confiere a las fórmulas Excellent® la propiedad de generar cambios significativos en la calidad de vida de los perros y gatos, a través de una nutrición de vanguardia con beneficios fácilmente comprobables, que van desde una protección extra al sistema de defensas, un incremento en la absorción de nutrientes, hasta una conformación más consistente de las heces. PURINA® Excellent® ADULT 7+ CHICKEN & RICE brinda una nutrición especializada para los gatos que necesitan mejorar su calidad y expectativa de vida. Ofrece una fórmula que incluye proteínas de alta digestibilidad y grasa moderada, prebióticos y minerales quelados, antioxidantes naturales, calcio y fósforo, garantizando así una salud prolongada."

    },
    {
        id: "14",
        nombre: "Alimento Excellent Gato Skin Care - 7,5 Kg",
        precio: 12070,
        img: "../img/id-14.jpg",
        idCat: "gato",
        descripcion: "El Alimento Excellent Gato Skin Care está especialmente diseñado para gatos adultos con piel sensible. Al usar salmón como proteína principal de alta digestibilidad, aporta  los niveles esenciales de aminoácidos y contribuye a la vitalidad de la piel de tu mascota. PELAJE BRILLANTE: Con Omega 6 y Metionina, un aminoácido esencial para la síntesis de la queratina, que ayuda al proceso de formación y cuidado capilar. PIEL SALUDABLE: La combinación de los ácidos grasos omega 6 y 3, vitaminas A y E, zinc y selenio favorecen la salud de la piel reforzando la barrera cutánea."
    },
    {
        id: "15",
        nombre: "Alimento Excellent Reduced Calorie para Gato - 7,5 Kg",
        precio: 11665,
        img: "../img/id-15.jpg",
        idCat: "gato",
        descripcion: "El Alimento Excellent Reduced Calorie para Gato es un alimento super-premium para gatos adultos de 1 a 7 años con actividad moderada y/o acceso al exterior ocasional.El alimento completo y equilibrado que contiene los nutrientes necesarios que responden perfectamente a las necesidades nutricionales de los gatos adultos y ayuda a mantener un buen estado de salud. Hecho a base de ingredientes de alta calidad y en la dosis que tu mascota necesita: proteinas (36%), grasas (15%), fibra (5,4%), calcio (0,9 a 1,6%), vitaminas y minerales.Beneficios de una alimentación a base de cat fit 32:"
    },
    {
        id: "16",
        nombre: "Cama Huella Ibiza Rojo - L",
        precio: 31100,
        img: "../img/id-16.jpg",
        idCat: "gato",
        descripcion: "La Cama Huella Ibiza, ofrece un diseño cómodo, suave y mullido, para darle a tu mascota un descanso de calidad. Su cubierta ayuda a que tu perro se sienta seguro y relajado, satisfaciendo todas sus necesidades de confort. Diseño estético para tu hogar. Su relleno extraíble facilita la limpieza. 100% hecho a mano. Calidad superior. Exterior de tela chenille. Interior de tela bicapa. Relleno de espuma de 24."
    },
    {
        id: "17",
        nombre: "Colchoneta Puppis Eterna Gris - M",
        precio: 24200,
        img: "../img/id-17.jpg",
        idCat: "gato",
        descripcion: "La Colchoneta WePets Eterna es la opción de descanso “todo terreno” que tu mascota está necesitando! Está fabricada con materiales antidesgarro que resisten el uso intenso. Es impermeable, por lo que la podés usar tanto adentro como afuera. Además, al estar compuesta con cordura gruesa de la mejor calidad, asegura que tu mascota descanse de forma cómoda y relajada. Diseñada con colores cancheros para que nunca desentone en tu casa. Rellena de goma espuma de alta densidad y vellón siliconado premium. Fácil de lavar: pasarle un trapo húmedo y dejala secar."
    },
    {
        id: "18",
        nombre: "Litera Cerrada Cancat Nova - Gris",
        precio: 21550,
        img: "../img/id-18.jpg",
        idCat: "gato",
        descripcion: "La Litera Nova viene con filtro de carbono para evitar el mal olor y mantener los espacios de tu hogar 100% limpios. Su diseño es ideal para evitar que las piedras caigan fuera de la bandeja. Máxima higiene para tu hogar. Desmontable. Con filtro de carbono."

    },
    {
        id: "19",
        nombre: "Piedras Sanitarias Absorsol Premium - 3,6 Kg",
        precio: 650,
        img: "../img/id-19.jpg",
        idCat: "gato",
        descripcion: "Las Piedras Sanitarias Absorsol Premium, poseen máximo rendimiento con bajo mantenimiento. Su composición ecológica y reciclable, quita los olores de los excrementos, absorbe la cantidad de líquido equivalente a su peso rápidamente, y no desprende el líquido absorbido. Las piedritas son porosas y livianas (50% de su volumen es hueco), y tu mascota puede esconder sus excrementos sin desparramar y sin que se adhiera a sus patas. No hace barro: Mantiene su apariencia sólida y granulada cuando está saturado de líquido (cambia de color en este estado), sin deshacerse. Además, la composición micro porosa interna de los minerales retienen los gérmenes y bacterias."
    },
    {
        id: "20",
        nombre: "Rascador Puppis Infinity Cartón - 55x12x20 cm",
        precio: 4880,
        img: "../img/id-20.jpg",
        idCat: "gato",
        descripcion: "El Rascador Puppis Infinity Cartón es una gran opción para que tu gato se divierta y libere estrés. Su superficie tiene la textura adecuada para satisfacer las necesidades de rascado de tu gato y mantener sus garras en buen estado. Diseño moderno que combina con la decoración de tu hogar. Brinda una superficie de rascado que protege a tus muebles. Materiales: Cartón."
    },
    {
        id: "21",
        nombre: "Rascador Cancat con Pelota Clara - 53cm",
        precio: 9470,
        img: "../img/id-21.jpg",
        idCat: "gato",
        descripcion: "Rascador Cancat con Pelota Clara de madera maciza con juguete base de peluche y palo forrado con hilo sisal de 45 cm de altura x 53 cm de ancho la base y 40 cm de profundidad.Diseño moderno que combina con la decoración de tu hogar. Brinda una superficie de rascado que protege a tus muebles."
    },
    {
        id: "22",
        nombre: "Juguete con Masajeador Catit 3 en 1",
        precio: 6250,
        img: "../img/id-22.jpg",
        idCat: "gato",
        descripcion: "El Juguete Catit 3 en 1 con Masajeador, es ideal para los gatos amantes de la hierba gatera, ya que en el centro del juguete se encuentra un masajeador con múltiples texturas, donde podés rociar hierba gatera para incentivar a que tu gato frote su cabeza. De esta forma, tu gato logra relajarse con distintas texturas, y a la vez tiene el beneficio extra de masajear sus encías para promover su salud dental.La diversión no termina ahí, porque el juego también incluye un circuito con pelota y una abeja saltarina que activan los instintos cazadores de tu gato, contribuyendo a su entretenimiento y desarrollo mental. Promueve la estimulación mental."
    },
    {
        id: "23",
        nombre: "Juguete Animal Pet Ratón en Jaula",
        precio: 1835,
        img: "../img/id-23.jpg",
        idCat: "gato",
        descripcion: "El Juguete Animal Pet Ratón en Jaula, es una divertida opción para que tu gato se mantenga entretenido. Gracias a su diseño, tu mascota pasará largas horas de juego intentando capturar el ratón de su interior. Diseño divertido. Estimula la mente."
    },
    {
        id: "24",
        nombre: "Juguete Para Gato Kong Violeta",
        precio: 9470,
        img: "../img/id-24.jpg",
        idCat: "gato",
        descripcion: "El Kong clásico es el estándar Violeta de los juguetes de gato y ofrece un enriquecimiento a los gatos al ayudarlos a satisfacer sus necesidades instintivas. Su fórmula es ultra durable y tiene un pique impredecible para jugar con las mascotas. Enseña a masticar de manera correcta, a la vez enriqueciendo mentalmente a los gatos. La goma de los juguetes. Goma natural."
    }
]

//export antes de const, para poder exportar la funcion (la exporto a ItemListContainer)
export const getProducts = ()=> {
    return new Promise( (resolve) => {
        setTimeout( ()=> {
            resolve(productos);
        }, 500)
    })
}

//Creamos una nueva función similar pero que nos retorne un solo item: 
//export antes de const, para poder exportar la funcion (la exporto a ItemDetailContainer)
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 500)
    })
}

//Creamos unas nueva funcion que retornara todas la categoria.
export const getProductosPorCategoria = (idCategoria)=> {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 500)
    })
}