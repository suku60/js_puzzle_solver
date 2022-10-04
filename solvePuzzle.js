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
      
        // console.log(starterSolutions[0])

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

        console.log(
            // "probandoooo----pieza a eliminar: ", solutions[3][0], "---queda--", stashes[3].cornerPieces,
            // "probandoooo----pieza a eliminar: ", solutions[2][0], "---queda--", stashes[2].cornerPieces,
        )
    }

    function findNextPieceTopRow(piece, length, stash){

        let valueToSearch = piece.pieceValues[2]

        console.log("pieza que entra: ", piece)
        console.log("valuetosearch...", valueToSearch)
        console.log("length que entra en findnextppiece...", length)
        console.log("stash que entra...", stash) 

        if(length === sizeData.x_AxisPieces-1){
            // console.log("buscamos el proximo corner...")
        }else{
            // console.log("buscamos en borders...")
            let foundPiece = 0

            for (let i = 0; i < stashes.length; i++) {

                // if(stashes[i].borderPieces){
                // }

                // console.log("found??", foundPiece)

                if(!foundPiece){

                    for (let b = 0; b < stashes[i].borderPieces.length; b++) {
            
                         //    console.log(stashes[i].borderPieces[b])
                      for (let c = 0; c < stashes[i].borderPieces[b].pieceValues.length; c++) {
                      // const element = array[c];
                      // console.log("values...", stashes[i].borderPieces[b].pieceValues )
                      if(((stashes[i].borderPieces[b].pieceValues[c] === valueToSearch)
                         && (stashes[i].borderPieces[b].pieceValues[c+1] === valuesData.lowestValue)) 
                      || ((stashes[i].borderPieces[b].pieceValues[c] === valueToSearch)
                      && (stashes[i].borderPieces[b].pieceValues[c-3] === valuesData.lowestValue))
                      ){
  
                        //   console.log("coincidencia en...", stashes[i].borderPieces[b].pieceValues)
                          foundPiece++
                        //   console.log("found piece:", foundPiece)
                          
                      }
                    
                   }
                   
                }
                }else{
                    // console.log("already found piece:", foundPiece)
                }
                
            }
        
        }

        // console.log(piece, valueToSearch)
    }

    let starts = createSolutions(pieces.cornerPieces)
      
    let stashes = createStashes(starts)
    
    cleanStashes(starts)
    
    // console.log de stashes limpios sin el primer corner
    // console.log(stashes.length)

    // por cada corner, suponiendo que habrá una solución para cada uno, corremos una función. 4 en total
    for (let a = 0; a < starts.length; a++) {
        
        // for (let i = 1; i < sizeData.x_AxisPieces; i++) {

        // va a correr 3 veces la función de buscar proxima pieza a la izquierda
            findNextPieceTopRow(starts[a][0], starts[a].length, stashes[a])
        // }

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