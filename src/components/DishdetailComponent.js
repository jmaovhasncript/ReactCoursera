import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle  ,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'; 


const DishdetailComponent = (props)=> {

   var  renderComments = function(commentsDetails){
        var commentsSec = commentsDetails.map((commentsDetail)=>{
            return (
                     <ul className="list-unstyled">
                    <li>{commentsDetail.comment}</li>
                    <li>---{commentsDetail.author},{commentsDetail.date}</li>
                    </ul>
            )
        })
        return commentsSec;
    } ;  
        var dish = props.dish;
        var dishComments = props.comments;
        if (dish != null)
            return(
                 <div className="row">
                 <Breadcrumb>
                          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                      </Breadcrumb>
                      <div className='col-12'>
                        <h3>{dish.name}</h3>
                        <hr/>
                      </div>
                    <div  className="col-12 col-md-5 m-1">   
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                        <h4>Comments</h4>
                            {dishComments ? renderComments(dishComments):(<div></div>)}
                        </Card>
                    </div>
                </div>
        );
      else
          return(
              <div></div>
          );
    
} 

export default DishdetailComponent