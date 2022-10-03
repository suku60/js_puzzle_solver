import {  findLowestValueInPiece, piecesData,  sizeData, valuesData } from "./data.js";

console.log(
  "piecesdata:", piecesData,
  "sizedata:", sizeData,
  "valuesdata   ", valuesData
  )

const findSolution = (pieces, size, values) => {

    console.log("nos entra eso..")

    /*
     possible starts = corners.length
     possible solutions = ?
    
    vamos a buscar una solucion tan sólo utilizando un corner, e ir añadiendo lo que vamos
    obteniendo en las busquedas.
    */

    let solution = []
    // solution tendrá un length maximo de 16

    solution.unshift(pieces.cornerPieces[0])

    // console.log(size.totalNumberOfPieces)

    if(solution.length === size.totalNumberOfPieces){
        return solution
    }else{
        console.log("aún no hemos encontrado las 16 piezas, nos queda esto --->", solution)
    }
}

const finalSolution = findSolution(piecesData, sizeData, valuesData)

console.log(finalSolution)