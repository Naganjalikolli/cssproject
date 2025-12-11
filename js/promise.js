const URL="https://dummyjson.com/quotes";
        fetch(URL).then(res=>res.json()).then(data=>console.log(data.quotes));