import React from "react";
import { Card as BCard} from "react-bootstrap";

const Card = (props) => {
    const { urlImage,title,description } = props;
    return (
        <BCard style={{width: '18rem'}} className="mx-2">
            <BCard.Img  variant="top" src={urlImage}/>
            <BCard.Body>
                <BCard.Title>{title}</BCard.Title>
                <BCard.Text>{description}</BCard.Text>
            </BCard.Body>
        </BCard>
    )
}

export default Card