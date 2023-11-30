import axios from "axios"

class cartaoClass {

    constructor() { }

    async enviarCartaoApi(data, router) {

        await axios.post('http://192.168.0.181:3333/createCadastro', data).then((res) => {
            console.log("sucesso");
            router.push('/verify')
        }).catch((err) => {
            console.log('algo deu errado' + err)
            return false
        }
        )

    }


}

export default new cartaoClass