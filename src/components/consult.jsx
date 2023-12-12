import img_consult from '../imagenes/consult.png'

function Consult () {
    function consult_user(){
        let obj_user = {"id": document.getElementById("identification").value}
        fetch("/consult_user", {
            "method":"post",
            "headers": {"Content-type":"application/json"},
            "body": JSON.stringify(obj_user)
        })
        .then(res => res.json())
        .then(message => {
            if(message != null) {
                console.log("okay")
                document.getElementById("data_consulted").value = message.id                
            }
            else {
                alert("The user doesn't exist")
            }
        })
    }
    return (
        <div>
            <h1 className="title"> Consultar Usuario </h1>
            <img className='img-icon' src={img_consult}></img>
            <form>
                <label> Identification </label> <input id='identification'/> <br/> <br/>
                <textarea id="data_consulted"/> <br/> <br/> <br/>
                <button type='button' className='button-form' onClick={consult_user}> Consult </button>
            </form>
        </div>
    )
}

export default Consult