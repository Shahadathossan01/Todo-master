
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
                <div>
                    <label style={{fontSize:'30px',fontWeight:'700px'}} htmlFor='name'>Name:</label>
                    <input style={{borderRadius:'5px',marginLeft:'50px',border:'none'}} {...register("name",{required:'This is Required!'})}  type="name" name="name" id="name" />
                </div>
                <span style={{color:'red'}}>{errors.name?.message}</span>
                <div>
                    <label style={{fontSize:'30px',fontWeight:'700px'}} htmlFor='email'>Email: </label>
                    <input style={{borderRadius:'5px',marginLeft:'60px',border:'none'}} {...register("email",{required:'This is Required!'})} type="email" name="email" id="email" />
                </div>
                <div>
                    <label style={{fontSize:'30px',fontWeight:'700px'}} htmlFor='password'>Password: </label>
                    <input style={{borderRadius:'5px',marginLeft:'10px',border:'none'}} {...register("password",{required:'This is Required!',minLength:{
                        value:8,
                        message:"must be 8 character"
                    }})} type="password" name="password" id="password" />
                </div>
                <span style={{color:'red'}}>{errors.password?.message}</span>
                <div style={{marginRight:'240px',marginTop:'30px'}}>
                    <Button type='submit'>Sign Up</Button>
                </div>
                </form>
                <div style={{marginLeft:'60%'}}>
                    <h3>If already have an account.</h3>
                    <Link to='/login'><h6>Please Login!!!</h6></Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;