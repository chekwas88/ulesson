const fetchData = () => {
    return fetch('https://jackiechanbruteforce.ulesson.com/3p/api/content/grade', {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    }).then(res => res.json());
    
}

export default fetchData;