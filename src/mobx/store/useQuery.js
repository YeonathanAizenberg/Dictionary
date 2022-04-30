// import dictionary from '../../utils/dictionary/dictionaryT.json'
import dictionary from '../../utils/dictionary/dictionary.json'

export function useQuery() {

    return {
        data: [],
        bringStart(letter){
            const adjustDictionary = Object.entries(dictionary[0])
            const correctData = adjustDictionary.filter(word => word[0].split("")[0] === letter)
            this.data =
                correctData
        },
        bringLetterAppear(letter){
            let correctData
            //logic To bring the correct data from dictionary
            this.data.push(
                correctData
            )
            console.log("bringLetterAppear",letter)
        },
        bringEnd(letter){
            const adjustDictionary = Object.entries(dictionary[0])
            const correctData = adjustDictionary.filter(word => word[0].split("")[word[0].length -1] === letter)
            this.data =
                correctData
        },
        bringConjunction(letter){
            let correctData
            //logic To bring the correct data from dictionary
            this.data.push(
                correctData
            )
            console.log("bringConjunction",letter)
        },
    }
}