import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap'


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
        if (dish != null)
            return(
                 <div className="row">

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
                            {dish.comments ? renderComments(dish.comments):(<div></div>)}
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