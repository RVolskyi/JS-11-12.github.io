$(function () {
    var html = $('#test').html();
    
    var profiles = [
        {
            name: 'Bam Boom',
            photo: 'img/warwick.jpg',
            alt: 'Warwick bass guitar',
            dateOfBirth: '11.07.1985',
            instrument: 'bass'
        },
        {
            name: 'Flageo Let',
            photo: 'img/esp.jpg',
            alt: 'ESP guitar',
            dateOfBirth: '15.02.1989',
            instrument: 'guitar'
        },
        {
            name: 'Para Diddle',
            photo: 'img/drums.jpg',
            alt: 'Drums in smoke',
            dateOfBirth: '04.10.1987',
            instrument: 'drums'
        },
        {
            name: 'Lala Lalala',
            photo: 'img/mic.jpg',
            alt: 'Microphone',
            dateOfBirth: '04.10.1987',
            instrument: 'vocals'
        }
    ];

    var content = tmpl(html, {
        data: profiles
    });

    $('body').append(content);

});
