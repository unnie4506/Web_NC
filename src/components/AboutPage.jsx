import React, { useState, useEffect } from 'react';

const tabs = ['posts', 'comments', 'albums'];

function AboutPage() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState ('posts')

    useEffect(() => {
        
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts); 
            })
    }, [type]);
    return (

        <div>
            {tabs.map( tab=> (
            <button 
                key={tab}
                style ={type ===tab? {
                    color:'#e886a0',
                backgroundColor: '#5a7d32',
                }: {}}
                onClick = {() => setType(tab)}
            > 
                {tab} 
            </button>
            ))}
            <input value ={title} onChange={e =>setTitle(e.target.value)}/>
        <ul>
            {posts.map(post=> (
                <li key={post.id}>{post.title || post.name}</li>
            ))};
        </ul>

        </div>

        

    );
}

export default AboutPage;