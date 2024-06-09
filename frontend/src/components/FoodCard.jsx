import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import {Card,Button,Form,Row,Col} from 'react-bootstrap';
import { MdDeleteOutline } from "react-icons/md";
const FoodCard = ({foodData}) => {

  const cart=useContext(CartContext)
  const foodQuantity=cart.getFoodQuantity(foodData.id)
  console.log("foodQuantity",foodQuantity)


  return (
    <Card  style={{width:'300px',padding:"0px",margin:'5px' }}>
    <Card.Body style={{ padding:"0px",margin:'0px' }}>
        
        <Card.Img style={{ padding:"0px",margin:'0px' }} variant="top" src={foodData.foodImage}></Card.Img>
        <Card.Title>{foodData.title}</Card.Title>
        <Card.Text>${foodData.price}</Card.Text>
       {foodQuantity>0?
       <>
       <Form as ={Row}>
        <Form.Label column="true" sm="4">In Cart:{foodQuantity}</Form.Label>
        <Col sm="7 ">
          <Button sm="2" className="mx-2" onClick={()=>cart.addOneToCart(foodData.id)} style={{color:'#fff',border:'none',background:'linear-gradient( #FF7A7A,#F65900)'}}>+</Button>
          <Button sm="2" className="mx-2" onClick={()=>cart.removeOneFromCart(foodData.id)} style={{color:'#fff',border:'none',background:'linear-gradient( #FF7A7A,#F65900)'}}>-</Button>
        
       <Button sm="3" variant="danger" className=" mx-2 " onClick={()=>cart.deleteFromCart(foodData.id)}><MdDeleteOutline style={{fontSize:"18px"}}/></Button>
       </Col>
        
       </Form>
       </>
       : 
       <Button variant="primary" style={{marginBottom:'5px',color:'#fff',border:'none',background:'linear-gradient( #FF7A7A,#F65900)'}} onClick={()=>cart.addOneToCart(foodData.id)}>Add To Cart</Button>

       }
    </Card.Body>
</Card>
    
  )
}

export default FoodCard