import axios from 'axios'


class Concluido{


    static async Concluir(data){

        
        await axios.post('http://192.168.0.181:3333/adm/CartaoConcluido',data).then((res)=>{

            console.log(data.EMAIL)
            alert(res) 

        }).catch((err)=>{
            console.log(err)
            alert('Algo deu errado ao concluir o cadastro de usuario, tente novamente') 
        })
    }
}


export default Concluido