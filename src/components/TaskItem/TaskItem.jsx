import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateModalField from '../UpdateModalField/UpdateModalField';


function TaskItem({item,updatedTask,deleteTask}) {
  const [showUpdate, setShowUpdate] = useState(false);
    const handleCloseUp = () => setShowUpdate(false);
  const handleShowUp = () => setShowUpdate(true);
  const {title,date,id,description,category}=item
  const [complete,setComplete]=useState(false)
  const handleCompleted=()=>{
    setComplete(false)
  }
  const handleMakeComplete=()=>{
    setComplete(true)
  }
  const handleUpdate=()=>{
    handleShowUp()
  }
  return (
    <Card style={{maxWidth:'350px',marginTop:'20px'}}>
      <Card.Header>
        <div style={{display:'flex',gap:'9%',width:'30%',alignItems:'center'}}>
          <h6>{date}</h6>
          <h4>{title.slice(0,10)}</h4>
          <div>
            {
              complete?<h5 onClick={handleCompleted} style={{color:'green'}}>Done</h5>:
              <h6 onClick={handleMakeComplete} style={{color:'gray'}}>Pending...</h6>
            }
          </div>
        </div>
      </Card.Header>
      <Card.Body>
      <h5>catetory: {category}</h5>
        <Card.Title>Description:</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <div style={{display:"flex",gap:'8%'}}>
          {
            complete?<Button disabled onClick={handleUpdate} variant="primary">Update</Button>:
            <Button  onClick={handleUpdate} variant="primary">Update</Button>
          }
        
        
        <UpdateModalField updatedTask={updatedTask} id={id} handleCloseUp={handleCloseUp} showUpdate={showUpdate}></UpdateModalField>
        <Button onClick={()=>deleteTask(id)} variant="warning">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TaskItem;