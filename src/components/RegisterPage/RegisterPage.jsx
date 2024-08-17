
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const RegisterPage = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const navigate=useNavigate()
    const {signUpWithEaP,updateName}=useContext(AuthContext)
    const handleRegister=(data)=>{
        const {name,email,password}=data
        signUpWithEaP(email,password)
        .then((result)=>{
            const user=result.user
            updateName(name)
            .then(()=>{})
            .catch((e)=>console.log(e))
            navigate('/')
            console.log(user)
        })
        .catch((e)=>console.log(e))
    }
    return (
        <div style={{textAlign:'center',backgroundColor:'AntiqueWhite'}}>
            <h1 style={{padding:'20px'}}>Register Now</h1>
            <div style={{paddingBottom:'40px'}}>
                <form onSubmit={handleSubmit(handleRegister)}>
                
                    <input placeholder='username' style={{borderRadius:'5px',border:'none'}} {...register("name",{required:'username is required!'})}  type="name" name="name" id="name" /><br></br>
                
                <span style={{color:'red'}}>{errors.name?.message}</span><br />
                
                    <input placeholder='email' style={{borderRadius:'5px',border:'none'}} {...register("email",{required:'email is required!'})} type="email" name="email" id="email" /><br></br>

                    <span style={{color:'red'}}>{errors.email?.message}</span><br />

                    <input placeholder='password' style={{borderRadius:'5px',border:'none'}} {...register("password",{required:'password is required!',minLength:{
                        value:8,
                        message:"must be 8 character"
                    }})} type="password" name="password" id="password" /><br></br>
                <span style={{color:'red'}}>{errors.password?.message}</span><br />
                    <Button style={{marginTop:"10px",width:'185px'}} type="submit" variant="success" size="sm" >Sign Up</Button>
                </form>
                <div style={{marginTop:'20px'}}>
                    <h5>If already have an account.</h5>
                    <Link to='/login'><h6>Please Login!!!</h6></Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;