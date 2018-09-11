import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap'


class DishdetailComponent extends Component{
    constructor(props){
        super(props);
    }
    renderComments(commentsDetails){
        var commentsSec = commentsDetails.map((commentsDetail)=>{
            return (
                     <ul className="list-unstyled">
                    <li>{commentsDetail.comment}</li>
                    <li>---{commentsDetail.author},{commentsDetail.date}</li>
                    </ul>
            )
        })
        return commentsSec;
    }   

    render (){
        var dish = this.props.dish;
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
                            {dish.comments ? this.renderComments(dish.comments):(<div></div>)}
                        </Card>
                    </div>
                </div>
        );
      else
          return(
              <div></div>
          );
    }
} 

export default DishdetailComponent