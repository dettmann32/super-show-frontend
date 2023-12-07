import axios from 'axios'

const config = {
    headers: {
       'x-access-token': document.cookie,
    },
   }
class Concluido{


    static async Concluir(data){

        
        await axios.post('http://192.168.0.181:3333/adm/CartaoConcluido',data, config ).then((res)=>{

            
            alert(res.data.message) 

        }).catch((err)=>{
            console.log(err)
            alert('Algo deu errado ao concluir o cadastro de usuario, tente novamente') 
        })
    }
}


export default Concluido