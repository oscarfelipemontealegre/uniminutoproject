import img_register from '../imagenes/register.png'

function Register () {
    function register_user () {
        alert("User registered")
    }
    return (
        <div>
            <h1 className="title"> Registrar Usuario </h1>
            <img className='img-icon' src={img_register}></img>
            <form action='/register_user' method='post'>
                <label> Name </label> <input name='name' /> <br/> <br/>
                <label> Last Name </label> <input name='lastname' /> <br/> <br/>
                <label> Identification </label> <input name="id" /> <br/> <br/>
                <label> Birth Day </label> <input name="birthday" /> <br/> <br/>
                <button className='button-form' onClick={register_user}> Register </button>
            </form>
        </div>
    )
}

export default Register