import  {Component} from "react";

class Home extends Component {    
    render() {
        function view_register () {
            window.location.href = '/register'
        }
        function view_consult () {
            window.location.href = '/consult'
        }
        return (
            <div>
                <h1 className="title"> WEB APPLICATION </h1>
                <div className="button-block">
                    <button className="button-home" onClick={view_register}> Registrar Usuario </button>
                    <button className="button-home" onClick={view_consult}> Consultar Usuario </button>
                </div>                
                <img className="img-home" src="https://img.freepik.com/vector-gratis/ilustracion-concepto-formularios_114360-4947.jpg?w=740&t=st=1702336654~exp=1702337254~hmac=f1660a07e5081b9c911707af1982b5e4d6e9c997a57495a1525e0cbc9b10fb4a" />
            </div>            
        )
    };
}

export default Home;