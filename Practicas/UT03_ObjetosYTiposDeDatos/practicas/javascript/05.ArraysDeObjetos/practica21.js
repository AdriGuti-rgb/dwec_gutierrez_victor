let arr = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWES: 9.4,
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4,
        }
    }
]

console.log(getAverageGrade("DIW"));

function getAverageGrade(str) {

    let media = 0;
    let suma = 0;

    arr.forEach ( a => {
        suma = str === "DIW" ? suma + a.notas.DIW
                    : str === "DWEC" ? suma + a.notas.DWEC
                    : str === "DWES" ? suma + a.notas.DWES
                    : suma = 0;
        media = suma / arr.length;
    });

    return `La media en ${str} es: ${media.toFixed(2)}`;
}