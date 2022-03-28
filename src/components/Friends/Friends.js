import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friend, setFriend] = useState([]);
    console.log(friend)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h2>Hello, friends ,How are you???</h2>
            <p><small>parle kichu taka dhar de.</small></p>
            {
                friend.map(person => <Friend key={person.id} friend={person}></Friend>)
            }
        </div>
    );
};

export default Friends;