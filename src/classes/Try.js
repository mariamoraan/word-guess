class Try{
    constructor(try_number, characteres_number){
        this.try_number = try_number
        this.green = []
        this.yellow = []
        this.green = []
        this.try_word = new Array(characteres_number).fill('',0,characteres_number)
    }
    setTryWord(t){
        this.try_word = t
    }
}

export default Try