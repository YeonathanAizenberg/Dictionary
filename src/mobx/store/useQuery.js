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
            const allKeys = Object.keys(dictionary[0])
            const allValue = Object.values(dictionary[0])
            const letterOnKeys = allKeys.filter(word => word.includes(letter))
            const letterOnValue = allValue.filter(word => word.includes(letter))
            const totalLetters = letterOnKeys.length + letterOnValue.length
            this.data =
                totalLetters
        },
        bringEnd(letter){
            const adjustDictionary = Object.entries(dictionary[0])
            const correctData = adjustDictionary.filter(word => word[0].split("")[word[0].length -1] === letter)
            this.data =
                correctData
        },
        bringConjunction(letter){
            const adjustDictionary = Object.entries(dictionary[0])
            const correctData = adjustDictionary.filter(word => word[0].includes(letter))
            this.data =
                correctData
        },
    }
}