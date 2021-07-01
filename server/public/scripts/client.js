console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

    getJokes();

    $('#addJokeButton').on('click', addJoke)
}

function addJoke(){
    console.log('added');

    $.ajax({    
        method: 'POST',
        url: '/allJokes',
        data: {
            whoseJoke: $('#whoseJokeIn').val(),
            jokeQuestion: $('#questionIn').val(),
            punchLine: $('#punchLineIn').val(),
        }
    })
    .then(() => {
        getJokes();
    })
    .catch(err => {
        console.error('POST failed', err);
     })
}

function getJokes(){
    $.ajax({
        method: 'GET',
        url: '/allJokes'
    })
    .then(res => {
        console. log('GET', res);
    
        let lastJokes = res[res.length - 1];
        
        $('#outputDiv').empty();
        for (let joke of res) {
            $('#outputDiv').append(`
            <div>
                ${joke.whoseJoke}
                ${joke.jokeQuestion}
                ${joke.punchLine}
            </div>
            `)
        }
    })
}