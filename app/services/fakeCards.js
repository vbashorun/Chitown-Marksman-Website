app.factory('fakeCards', [function() {
    var demoCards = {
        
        cards: [
            {
                galleryName: 'Urban Playground',
                galleryImage: './images/marksman-slide-4.jpg',
                galleryLink: '#/gallery/{{$galleryInfo/id}}'
            },
            {
                galleryName: 'Flower Thoughts',
                galleryImage: './images/marksman-slide-2.jpg',
                galleryLink: '#/gallery/{{$galleryInfo/id}}'
            },
            {
                galleryName: 'Urban Anarchist',
                galleryImage: './images/marksman-slide-3.jpg',
                galleryLink: '#/gallery/{{$galleryInfo/id}}'
            },
            {
                galleryName: 'Street Style w/ Stella',
                galleryImage: './images/marksman-slide-5.jpg',
                galleryLink: '#/gallery/{{$galleryInfo/id}}'
            },
            {
                galleryName: 'Obey',
                galleryImage: './images/marksman-obey-2.jpg',
                galleryLink: '#/gallery/{{$galleryInfo/id}}'
            },
            {
                galleryName: 'Frank Santana Park',
                galleryImage: './images/marksman-bridge-1.jpg',
                galleryLink: '#/gallery/{{$galleryInfo/id}}'
            },
            {
                galleryName: 'Urban Playground',
                galleryImage: './images/marksman-slide-4.jpg',
                galleryLink: '#/gallery/{{$galleryInfo/id}}'
            }
        ]
    };
    
    return demoCards;
}]);