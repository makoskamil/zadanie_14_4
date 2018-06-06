var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'http://1.fwcdn.pl/po/05/71/30571/7529392.3.jpg'
    },
    {
        id: 2,
        title: 'Król lew',
        desc: 'Film o simbie',
        img: 'https://images-na.ssl-images-amazon.com/images/I/A1sg4-TYT-L._SY445_.jpg'
    },
    {
        id: 3,
        title: 'Matrix',
        desc: 'Film łączący w sobie motywy kina futurystycznego, akcji, z elementami filozoficznymi i biblijnymi',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img}), 
    );
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));

