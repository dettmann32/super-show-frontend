import axios from 'axios'

const config = {
    headers: {
       'x-access-token': document.cookie,
    },
   }
class Concluido{


    static async Concluir(data){

        
        await axios.post('http://192.168.0.181:3333/adm/CartaoConcluido',data, config )
    }
}


export default Concluido