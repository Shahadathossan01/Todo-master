
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";


const LoginPage = () => {
    const {user,googleLogIn,setLoader,signInWithEaP}=useContext(AuthContext)
    const {register,handleSubmit}=useForm()
    const navigate=useNavigate()
    const handleGoogleLogin=()=>{
        googleLogIn()
        .then(result=>{
            const user=result.user
            setLoader(false)
            navigate('/')
        })
        .catch((e)=>console.log(e))
    }
    const formHandler=(data)=>{
        const {email,password}=data
        signInWithEaP(email,password)
        .then((result)=>{
            const user=result.user
            
            navigate('/')
        })
        .catch((e)=>console.log(e))
    }
    return (
        <div style={{textAlign:'center',backgroundColor:'AntiqueWhite'}}>
            <h1 style={{padding:'20px'}}>Please Login</h1>
            <div style={{paddingBottom:'40px'}}>
                <form onSubmit={handleSubmit(formHandler)}>
                <div>
                    <label style={{fontSize:'30px',fontWeight:'700px'}} htmlFor='email'>Email: </label>
                    <input style={{borderRadius:'5px',marginLeft:'60px',border:'none'}} {...register('email')} type="email" name="email" id="email" />
                </div>
                <div>
                    <label style={{fontSize:'30px',fontWeight:'700px'}} htmlFor='password'>Password: </label>
                    <input style={{borderRadius:'5px',marginLeft:'10px',border:'none'}} {...register('password')} type="password" name="password" id="password" />
                </div>
                <div style={{marginRight:'240px',marginTop:'30px'}}>
                    <Button type="submit">Log In</Button>
                </div>
                </form>
                <div style={{display:'flex', gap:'40%',padding:' 10px 20%'}}>
                    <div>
                        <h5>Login with...</h5>
                        <span>
                            <Button style={{marginTop:'5px',marginLeft:'5px',marginRight:'5px'}} onClick={handleGoogleLogin} className="me-1" size="sm">Google</Button>
                            <Button style={{marginTop:'5px',marginLeft:'5px',marginRight:'5px'}} className="me-1" size="sm">Facebook</Button>
                            <Button style={{marginTop:'5px',marginLeft:'5px',marginRight:'5px'}} size="sm">GitHub</Button>
                            
                        </span>
                    </div>
                    <div>
                        <h3>If you not register</h3>
                        <Link to='/register'><h6>Please regiter now!!!</h6></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;