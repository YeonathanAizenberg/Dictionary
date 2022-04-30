export function querySelect() {

    return {
        data: [],
        selectQuery(query){
            this.data.push(query)
        },
    }
}