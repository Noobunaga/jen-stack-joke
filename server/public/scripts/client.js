console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

    getJokes();

    $('#addJokeButton').on('click', onAddJoke)
}

function onAddJoke(){
    console.log('added');

    $.ajax({
        method: 'POST',
        url: '/allJokes',
        data: {
            whoseJoke: $('whoseJoke').val(),
            jokeQuestion: $('whoseJoke').val(),
            punchLine: $('punchLine').val(),
        }
    })
    .then(res => {
        console.log('POST res', res);

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
        console.log('GET', res);

        let lastJokes = res[res.length - 1];
        $('#')
    })
}