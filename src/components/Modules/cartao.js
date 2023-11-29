import axios from "axios"

class cartaoClass {
    
    constructor() { }

    async enviarCartaoApi(data) {
        
            await axios.post('http://localhost:3333/createCadastro', data).then((res) => {
                console.log("sucesso");
            }).catch((err) => console.log('algo deu errado' + err))
        
    }


}

export default new cartaoClass