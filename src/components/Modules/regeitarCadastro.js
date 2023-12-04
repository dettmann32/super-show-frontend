import axios from 'axios'


class Regeitar{


    static async Regect(data, motivo){

        const AttData = {data , MOTIVO:motivo}

        console.log(AttData)
         
        await axios.post('http://192.168.0.181:3333/adm/Rejeitado', AttData).then((res)=>{

            
            alert(res) 

        }).catch((err)=>{
            console.log(err)
            alert('Algo deu errado ao concluir o cadastro de usuario, tente novamente') 
        })
    }
}


export default Regeitar