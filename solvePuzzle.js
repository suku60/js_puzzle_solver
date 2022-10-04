import { piecesData, sizeData, valuesData } from "./data.js";

const solvePuzzle = (pieces, size, values) => {

    /* función que crea cuantas posiles soluciones..
    función que elimine las piezas que ya tenemos en la solución de donde vamos a buscar
    funciones que busquen la próxima ficha */

    function createSolutions(corners){
        let starterSolutions = [];
      
        for (let i = 0; i < corners.length; ++i) {
            
            starterSolutions[i] = [];
            starterSolutions[i].unshift(corners[i])

        }

        for (let i = 0; i < starterSolutions.length; i++) { 
            
            if(((starterSolutions[i][0].pieceValues[3] === starterSolutions[i+3]?.[0].pieceValues[3])
            || (starterSolutions[i][0].pieceValues[3] === starterSolutions[i+2]?.[0].pieceValues[3])
            || (starterSolutions[i][0].pieceValues[3] === starterSolutions[i+1]?.[0].pieceValues[3])) &&
            ((starterSolutions[i][0].pieceValues[2] === starterSolutions[i+3]?.[0].pieceValues[2])
            || (starterSolutions[i][0].pieceValues[2] === starterSolutions[i+2]?.[0].pieceValues[2])
            || (starterSolutions[i][0].pieceValues[2] === starterSolutions[i+1]?.[0].pieceValues[2]))){

                starterSolutions.splice(i, 1)
            }

        }



        return starterSolutions;
      }

    function createStashes(starts){

        let stashes = []
      
        for (let i = 0; i < starts.length; ++i) {
            stashes[i] = new Object();
            stashes[i] = {...piecesData}
            
        }

        return stashes;
      }

    function cleanStashes(solutions){

        // lo que nos llegue, tenga 1 pieza o más, será un array
        // tan sólo vamos a eliminar la última pieza añadida, ya que
        // llamaremos a esta función cada vez que se añada una pieza a la solución

        for (let i = 0; i < solutions.length; i++) {
            
            let pieceToErase = solutions[i][0].pieceNumber

            let allpieces = stashes[i].cornerPieces.length + stashes[i].borderPieces.length + stashes[i].centerPieces.length 

            for (let b = 0; b < stashes[i].cornerPieces.length; b++) {

                if(pieceToErase === stashes[i].cornerPieces[b].pieceNumber){

                    let newStash = [...stashes[i].cornerPieces]
                    let erasedPiece = newStash.splice(b, 1);

                    stashes[i].cornerPieces = newStash
                    
                }

            }
        }
    }

    function findNextPieceTopRow(piece, length, stash){
        // esto corre 4 veces... una por cada solucion temporal

        let valueToSearch = piece.pieceValues[2]
        let possiblePieces = []
        let foundPiece

        console.log("------------------------------------------------")
        console.log("pieza que entra: ", piece)
        console.log("valuetosearch...", valueToSearch)
        console.log("length que entra en findnextppiece...", length)
        // console.log("stash que entra...", stash) 
        console.log("foundpiece", foundPiece)

        if(length === size.x_AxisPieces-1){
            // console.log("buscamos el proximo corner...")
        }else{
            // console.log("buscamos en borders...")
            for (let b = 0; b < stash.borderPieces.length; b++) {
        
                     //    console.log(stashes[i].borderPieces[b])
                  for (let c = 0; c < stash.borderPieces[b].pieceValues.length; c++) {
                  // const element = array[c];
                  // console.log("values...", stashes[i].borderPieces[b].pieceValues )
                  if(((stash.borderPieces[b].pieceValues[c] === valueToSearch)
                     && (stash.borderPieces[b].pieceValues[c+1] === valuesData.lowestValue)) 
                  || ((stash.borderPieces[b].pieceValues[c] === valueToSearch)
                  && (stash.borderPieces[b].pieceValues[c-3] === valuesData.lowestValue))
                  ){

                      console.log("coincidencia en...", stash.borderPieces[b].pieceNumber)
                    possiblePieces.unshift(stash.borderPieces[b])
                    // VAMOS A REDUCIR EL NUMERO DE STARTS PARA EVITAR EL DUPLICADO DE LAS 2 PIEZAS
                    // QUE SON IGUALES
                }
                
            }
            
        }
        
    }
    console.log("array de posibles soluciones", possiblePieces)

        // console.log(piece, valueToSearch)
    }

    let starts = createSolutions(pieces.cornerPieces)
      
    let stashes = createStashes(starts)
    
    cleanStashes(starts)

    // por cada corner, suponiendo que habrá una solución para cada uno, corremos una función.
    for (let a = 0; a < starts.length; a++) {

        // let starts = findNextPieceTopRow(starts[a][0], starts[a].length, stashes[a])





        
        // REACTIVAR!
        findNextPieceTopRow(starts[a][0], starts[a].length, stashes[a])



    }

    // console.log(starts[0][0].pieceValues)
    // console.log(starts[1][0].pieceValues)
    // console.log(starts[2][0].pieceValues)
    // console.log(starts[3][0].pieceValues)

    return starts
}


solvePuzzle(piecesData, sizeData, valuesData)

// console.log("last consolelog...", solvePuzzle(piecesData, sizeData, valuesData))
// console.log(piecesData.borderPieces)
// console.log(piecesData.centerPieces)
// console.log(piecesData.cornerPieces)