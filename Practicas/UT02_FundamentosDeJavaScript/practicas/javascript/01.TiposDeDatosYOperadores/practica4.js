let radius = prompt("¿Que medida tiene el radio?");
let unidades = prompt("¿Que unidades son?");

confirm(`El perimetro del circulo de radio ${radius} es ${Number(radius) * 2 * Math.PI}${unidades}, 
            y su área es ${Number(radius) * Number(radius) * Math.PI}${unidades}^2`);