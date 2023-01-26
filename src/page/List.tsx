import React, {useContext} from "react";
import './list.css';
import ListProvider, {ElementContext} from "../hooks/ListProvider";


const List = () => {

    const elements = useContext(ElementContext);
    console.log(elements)

    if (!elements) {
        console.log("CZEKAM")
        return (<div>CZEKAM</div>)
    }

    return (
        <div className="card_container">
            {elements.map((el) => (
                <div className="bicycle_card">{el.name}</div>
            ))}
        </div>
    )
};

const elements = () => {
    return <ListProvider><List/></ListProvider>
}

export default elements