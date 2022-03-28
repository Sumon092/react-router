import React from 'react';

const Friend = (props) => {
    console.log(props)
    const { name, id, username } = props.friend;
    return (
        <div>
            <h2>
                Name : {name}
            </h2>
            <button>{username} id: {id}</button>
        </div>
    );
};

export default Friend;