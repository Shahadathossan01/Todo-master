
import { Button, Col, Container, Row } from 'react-bootstrap';
import TaskItem from '../TaskItem/TaskItem';
import ModalField from '../ModalField/ModalField';
import { useEffect, useState } from 'react';

import EmptyField from '../EmptyField/EmptyField';
import { useForm } from 'react-hook-form';

function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  
    return randomId;
  }

  
const TaskField = () => {
    const [show, setShow] = useState(false);
    const [taskField,setTaskField]=useState([])
    const [filteredArray,setFilteredArray]=useState(taskField)
  
    
    const {register,handleSubmit}=useForm()

    useEffect(()=>{
        setFilteredArray(taskField)
    },[taskField])
    const createTask=(data)=>{
        const newItem={
            ...data,
            id:generateRandomId(8),
            date:new Date().toLocaleDateString()
        }
        setTaskField(prev=>[
            ...prev,
            newItem
        ])
    }
    const updatedTask=(data,id)=>{
        const updatedItems=taskField.map((item)=>{
            if(item.id===id){
                return {...item, title:data.title,description:data.description,category:data.category}
            }
            return item
        })
        setFilteredArray(updatedItems)
    }
    const deleteTask=(id)=>{
        const deleteItem=taskField.filter((item)=>item.id !=id);
        setTaskField(deleteItem)
        setFilteredArray(deleteItem)
    }
    const handleFilter=(data)=>{
        console.log(data.category)
        if(data.category==='all'){
            setFilteredArray(taskField)
            return
        }
        const filteredTasks=taskField.filter((item)=>item.category===data.category);
        setFilteredArray(filteredTasks)
        
    }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div style={{backgroundColor:'AntiqueWhite'}}>
            <div>
                <div style={{textAlign:'center',paddingTop:'20px',marginBottom:'20px'}}>
                    <Button onClick={handleShow} variant='success'>Create Your Tasks</Button>
                </div>
            <div>
            <form onSubmit={handleSubmit((data)=>handleFilter(data))}>
                <label style={{paddingLeft:'10px'}}><h3>Category: </h3></label>
                    <select {...register("category")}>
                        <option value="all">All</option>
                        <option value="working">Working</option>
                        <option value="personal">Personal</option>
                        <option value="shopping">Shopping</option>
                    </select>
                    <input type="submit" value='filter'/>
            </form>
            </div>
        </div>
            <div>
                <Container>
                    <Row>
                        
                            {   
                                filteredArray.map((item)=>( 
                                    <Col style={{marginBottom:'20px'}} xl={4} md={12} lg={6} key={item.id}>
                                       <TaskItem handleShow={handleShow} handleClose={handleClose} updatedTask={updatedTask} deleteTask={deleteTask} show={show} item={item}></TaskItem>
                                   </Col>
                               ))
                            }
                            
                        
                    </Row>
                </Container>
            </div>
            {
                taskField.length==0&&<EmptyField></EmptyField>
            }
            <ModalField handleClose={handleClose} handleShow={handleShow} show={show} createTask={createTask}></ModalField>
        </div>
    );
};

export default TaskField;