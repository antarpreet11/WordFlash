import React, {useState} from 'react'
import Card from '../UI/Card'

const FlashCard = (props) => {
     
    const [toggle, setToggle] = useState(true);

    const currentFlipHandler = (event) => { 
        setToggle(!toggle);
    }

    return (
        <div onClick={currentFlipHandler}>
            <Card>
                {toggle ? props.l1 : props.l2}         
            </Card>    
        </div>
    )
}

export default FlashCard