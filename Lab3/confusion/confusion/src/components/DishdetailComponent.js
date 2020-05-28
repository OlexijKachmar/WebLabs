import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, ListGroup, BreadcrumbItem, Breadcrumb
} from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else
        return (
            <div></div>
        );
}

function RenderComments({ comments }) {
    if (comments != null) {
        const cmnts = comments.map((d) => {
            return (
                <ListGroup>
                    <p>{d.comment}</p>
                    <p>--{d.author}</p>
                    <p>{d.date}</p>
                </ListGroup>
            )
        });
        return (
            <div>
                <h1>Comments:</h1>
                {cmnts}
            </div>

        )
    }
    else {
        return (<div></div>)
    }
}


const DishDetail = (props) => {
    //        const dish = this.props.dish;
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (<div></div>)
    }
}

export default DishDetail;