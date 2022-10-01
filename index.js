import {  findLowestValueInPiece, piecesData,  sizeData, valuesData } from "./data.js";

// console.log(
//   "piecesdata:", piecesData,
//   "sizedata:", sizeData,
//   "valuesdata", valuesData
//   )

const giveMeAvailablePieces = (solutionSoFar) => {
  console.log("solution so far....", solutionSoFar)

  let allPiecesAvailable = piecesData
  let temporarySolution = solutionSoFar

  for (let i = 0; i < solutionSoFar.length; i++) {
      
      let pieceToEraseNumber = solutionSoFar[i].pieceNumber
      let howManyZerosThisPieceHas = findLowestValueInPiece(solutionSoFar[i])
      let whereToLook 

      switch (howManyZerosThisPieceHas) {

          case 1: whereToLook = allPiecesAvailable.borderPieces;
          console.log("entro case 1")
                  
                  break;

          case 2: whereToLook = allPiecesAvailable.cornerPieces
          console.log("entro case 2", whereToLook.length)
                  
                  break;

          default: whereToLook = allPiecesAvailable.centerPieces

                  break;
      }

      let newData

      for (let b = 0; b < whereToLook.length; b++) {

          if ( whereToLook[b].pieceNumber === pieceToEraseNumber) { 
  
              let deteledPiece = whereToLook.splice(b, 1); 
              
          }
      }

      console.log("deletedpiece...",
              "queda....", whereToLook,
              "habian,", piecesData)

      // if(whereToLook === )
  }

  // return data
}

const getAllSolutions = (data) => {

    let allCorners = data?.cornerPieces

    let allSolutions = []

    // dejo el bucle en sólo 1 ya que cuando se repite el bucle no se hacen bien las cosas
    // y se eliminan varias piezas...

    for (let i = 0; i < 1; i++) {

       let solution = []

       solution.unshift(allCorners[i])

       console.log("pieza que introduzco", solution[0])

      //  esto debera ir en un bucle

      let availablePieces = giveMeAvailablePieces(solution)

      console.log("available pieces", availablePieces)

      //  esto estará condicionado a entrar sólo cuando solution tenga 16 piezas
       allSolutions.push(solution)

    }

    return allSolutions
}

getAllSolutions(piecesData)
// console.log()