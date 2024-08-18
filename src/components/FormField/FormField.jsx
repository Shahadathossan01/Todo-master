
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
const init={
    category:'',
    title:'',
    description:''
}
const FormField = ({update=false, handleClose,createTask,id}) => {
    const[formState,setFormState]=useState({...init})
    const {register,handleSubmit,watch,formState:{errors}}=useForm()
    const hander=(data)=>{
        if(createTask){
            createTask(data,id)
        }
        
        handleClose()
    }
    return (
        <div style={{margin:'20px',marginBottom:'20px'}}>
            <form onSubmit={handleSubmit(hander)}>
                <div style={{margin:'10px'}}>
                <label style={{marginRight:'10px',fontSize:'25px',color:'gray'}}  htmlFor="category">category:</label>
                <select style={{borderRadius:'5px'}} {...register('category')} id="category">
                    <option value="working">working</option>
                    <option value="personal">personal</option>
                    <option value="shopping">shopping</option>
                </select>
                </div>
                <div style={{margin:'10px'}}>
                    <label style={{fontSize:'20px',marginRight:'80px'}} htmlFor="title">Title:</label>
                    <input style={{borderRadius:'5px'}} type="text" {...register('title',{required:'This is required.',minLength:{
                        value:4,
                        message:'min length 4'
                    }})} id="title" />
                    <p>{errors.title?.message}</p>
                </div>
                <div style={{margin:'10px'}}>
                    <label style={{fontSize:'20px',marginRight:'23px'}} htmlFor="description">Description</label>
                    <input style={{borderRadius:'5px',width:'300px'}} type="text" {...register('description',{required:'This is required.',minLength:{
                        value:10,
                        message:'min length 10'
                    }})} id="description" />
                    <p>{errors.description?.message}</p>
                </div>
                <div style={{margin:'10px'}}>
                    {
                        update?<Button  type='submit'>Update</Button>:
                        <Button  type='submit'>Add Task</Button>
                    }
                </div>
            </form>
        </div>
    );
};

export default FormField;