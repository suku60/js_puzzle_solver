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

            // console.log("piecetoerase...", pieceToErase, "stash: ,", allpieces,"piezas")

            for (let b = 0; b < stashes[i].cornerPieces.length; b++) {

                if(pieceToErase === stashes[i].cornerPieces[b].pieceNumber){
                    // stashes[i].cornerPieces[b]
                    let newStash = [...stashes[i].cornerPieces]
                    let erasedPiece = newStash.splice(b, 1);
                    
                    // console.log("erased piece...: ", erasedPiece)
                    // console.log("stash:", stashes[i].cornerPieces)

                    // stashes[i].cornerPieces.splice(b,1)
                    
                    // return 
                    stashes[i].cornerPieces = newStash
                    // console.log("stash later:", stashes[i].cornerPieces)
                    
                }
                

            }
        }

        console.log(
            "probandoooo----pieza a eliminar: ", solutions[3][0], "---queda--", stashes[3].cornerPieces,
            "probandoooo----pieza a eliminar: ", solutions[2][0], "---queda--", stashes[2].cornerPieces,
        )
    }

    let starts = createSolutions(pieces.cornerPieces)
      
    let stashes = createStashes(starts)

    cleanStashes(starts)
      
    return starts
}

console.log("last consolelog...", solvePuzzle(piecesData, sizeData, valuesData))