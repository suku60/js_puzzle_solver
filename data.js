const initialPuzzleDataString =  `4 4
1 4 3 5
0 5 3 5
1 5 3 0
5 4 5 2
1 5 0 0
0 5 2 1
0 4 4 1
2 4 4 2
4 5 0 5
3 2 1 0
4 0 0 3
0 1 3 0
5 5 1 0
5 0 0 1
0 4 2 4
4 5 1 4`

const createPuzzleData = (initialData) => {

    let data = initialData.split( "\n" ).map(( piece ) => {
        return piece.split( " " );
    });

    return data

}

export const initialData = createPuzzleData(initialPuzzleDataString)

const createSizeData = (puzzleSize = []) => {

    let sizeData = {}
    
    let x_AxisPieces = parseInt(puzzleSize[0])
    let y_AxisPieces = parseInt(puzzleSize[1])

    sizeData = {
        x_AxisPieces,
        y_AxisPieces,
        totalNumberOfPieces: x_AxisPieces*y_AxisPieces
    }

    return sizeData
}

export const sizeData = createSizeData(initialData[0])

const createValuesData = (puzzleData) => {

    let allValuesData = []

    for (let i = 0; i < puzzleData.length; i++) {
        if(!i){
    
        }else{
    
            for (let b = 0; b < puzzleData[b].length; b++) {
                
                allValuesData.push(parseInt(puzzleData[i][b]))
                
            }
        }
    }

    let lowestValue = Math.min(...allValuesData)
    let highestValue = Math.max(...allValuesData)
    let uniqueValues = [...new Set(allValuesData.sort())];

    return { uniqueValues,
             lowestValue,
             highestValue }
}

export const valuesData = createValuesData(initialData)

const organizePieces = (pieces) => {

    let cornerPieces = []
    let borderPieces = []
    let centerPieces = []

    for (let i = 0; i < pieces.length; i++) {

        if(!i){
            // console.log("doing nothing...")

        }else{
            
            let pieceNumber = i
            let pieceValuesArr = convertValuesIntoIntegers(pieces[i])
            let zeros = findLowestValue(pieceValuesArr)
            
            if(zeros === 2){
                
                let cornerRotatedValues = rotate(pieceValuesArr)
                
                cornerPieces.push({
                    pieceNumber,
                    pieceValues: cornerRotatedValues
                })
            }
            
            if(!zeros){
                
                centerPieces.push({
                    pieceNumber,
                    pieceValues: pieceValuesArr
                })
                
            }
            
            if(zeros === 1){
                
                borderPieces.push({
                    pieceNumber,
                    pieceValues: pieceValuesArr
                })
                
            }
        }
    }
    
    return {
        cornerPieces,
        borderPieces,
        centerPieces
    }
}

const convertValuesIntoIntegers = (values) => {

    let valuesIntArray = []

    for (let i = 0; i < values.length; i++) {
            
        valuesIntArray.push(parseInt(values[i]))

    }

    return valuesIntArray

}

const findLowestValue = (piece) => {

    let lowestValue = valuesData.lowestValue
    let borders = 0;

    for (let i = 0; i < piece.length; i++) {
        if(piece[i] === lowestValue){
            borders++
        }
    }

    return borders
}

export const findLowestValueInPiece = (piece) => {

    let values = piece.pieceValues
    let lowestValue = valuesData.lowestValue
    let borders = 0;

    for (let i = 0; i < values.length; i++) {
        if(values[i] === lowestValue){
            borders++
        }
    }

    return borders
}

const rotate = (sides = [], piece = {}) => {

    const howManyTimesToRotateCorner = (sidesArr) => {

        let valuesToSearch = sidesArr.length/2
        let timesToRotate = 0
    
        for (let i = 0; i < valuesToSearch; i++) {
    
            if(sidesArr[i] !== valuesData.lowestValue){
                timesToRotate++
            }
            
        }
        
        if(sidesArr[0] !== valuesData.lowestValue && sidesArr[1] === valuesData.lowestValue){
            timesToRotate++
            timesToRotate++
        }
    
        return timesToRotate
        
    }

    if(sides) {
        
        const timesToRotate = howManyTimesToRotateCorner(sides)
        let newSides = sides

        for (let i = 0; i < timesToRotate; i++) {
            // console.log("forloop")
            
            newSides.unshift(newSides.pop())        
        }
        
        return newSides

    }else{

        if(piece){

            // test later
            console.log("esto es una pieza completa")

        }
    }

}

export const piecesData = organizePieces(initialData)