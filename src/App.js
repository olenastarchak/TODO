import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Items from './components/items';
import Header from './components/header';

function App() {
    const [items, setItems] = useState([
        {
            id: uuidv4(),
            text: "Beef",
            description: "blabla cooked beef",
            weight: "1200gr"
        },
        {
            id: uuidv4(),
            text: "Potato",
            description: "blabla cooked potato",
            weight: "300gr"
        },
        {
            id: uuidv4(),
            text: "Salad",
            description: "blabla salad",
            weight: "500gr"
        }
    ]);

    const onItemCreate = (item) => {
        setItems([...items, item]);
    }

    const onItemDelete = (id) => {
        setItems([...items.filter(item => item.id !== id)]);
    }

    const onItemEdit = (editeditem) => {
        setItems([...items.map(
            item => item.id === editeditem.id ? editeditem : item
        )]);
    }

    return (
        <React.Fragment>
            <Header onCreate={onItemCreate}/>
            <Items items={items} onDelete={onItemDelete} onEdit={onItemEdit}/>
        </React.Fragment>
    )
}

export default App;
