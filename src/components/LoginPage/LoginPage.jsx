
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
                <form onSubmit={handleSubmit(formHandler)}>
                    <input placeholder="email" style={{borderRadius:'5px',border:'none'}} {...register('email')} required type="email" name="email" id="email" /><br></br><br />
                
                    <input required placeholder="password" style={{borderRadius:'5px',border:'none'}} {...register('password')} type="password" name="password" id="password" /><br></br>
                    <Button style={{marginTop:"10px",width:'185px'}} type="submit" variant="success" size="sm" >Log In</Button>
                
                </form>
                <div style={{paddingBottom:'20px'}}>
                    <div>
                        <h1 style={{marginTop:'10px'}}>OR</h1>
                        <h5>Login With...</h5>
                            <Button variant="secondary" style={{marginTop:'5px',marginLeft:'5px',marginRight:'5px'}} onClick={handleGoogleLogin} className="me-1" size="sm">Google</Button>
                        
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <h4>If you not register</h4>
                        <Link to='/register'><h6>Please register now!!!</h6></Link>
                    </div>
                </div>
           
        </div>
    );
};

export default LoginPage;