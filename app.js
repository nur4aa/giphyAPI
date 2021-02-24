function sendApiRequest() {
    let userInput = document.getElementById('search__input').value
        console.log(userInput)

        const giphyApiKey = 'Ksl99P2qAshVOZB1TBvdZxFUoK5NkHLX'
        let giphyApiUrl = `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${giphyApiKey}&limit=10`

        fetch(giphyApiUrl)
            .then(function (data){
                return data.json()
            })
            .then(function (json){
     for(let i=0;i<10;i++){
                let imgPath = json.data[i].images.fixed_height.url
                let img = document.createElement('img');
                img.setAttribute('src', imgPath)
                document.body.appendChild(img)
                }
            })
    }