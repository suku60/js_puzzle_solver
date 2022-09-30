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

export const data = createPuzzleData(initialPuzzleDataString)
