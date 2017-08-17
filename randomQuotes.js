$(document).ready(function () {

    var quote;
    var author;

    function getNewQuote() {
        // getting ajax request
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            //we write if we are successfull then...
            success: function (response) {
                quote = response.quoteText;
                author = response.quoteAuthor;

                $('#quote').text("' "+ quote + " '");
                if (author) {
                    $('#author').text('said by: ' + author);
                } else {
                    $('#author').text('- unknown');
                }
            }
        });
    }
    getNewQuote();

    $('.get-quote').on('click', function () {
        getNewQuote();
    });

    $('.send-quote').on('click', function (event) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '\n --- ' + author));
    });
});
