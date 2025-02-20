import React from 'react';
import Card from './Card';

const CardList = ({ users }) => {
    return (
        <div>
            {
                users.map((user, index) => {
                    return ( <Card 
                        key={index} // Incase we need to handle actions (i.e deleting)
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}                 
                    />
                    )
                })
            }
        </div>
    )
}

export default CardList;