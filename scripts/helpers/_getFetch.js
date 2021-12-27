const getFetch = async ( category="users/1/posts" ) => {
    
    const url = `https://jsonplaceholder.typicode.com/${category}`;
    const rta = await fetch(url);
    const data = await rta.json();

    return data;
}

const postFetch = async ( data ) => {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
    const post = await response.json();

    return post;
}

const deleteFetch = () => {

}

export {
    getFetch,
    postFetch,
    deleteFetch
}
