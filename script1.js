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
        desc: 'Film ³¹cz¹cy w sobie motywy kina futurystycznego, akcji, z elementami filozoficznymi i biblijnymi',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg'
    }
];

var MovieTitle = React.createClass({
  propTypes: {
      content: React.PropTypes.string.isRequired,
  },
  
  render: function() {
    return React.createElement('h2', {}, this.props.content)
  }
});

var MovieDescription = React.createClass({
  propTypes: {
      desc: React.PropTypes.string.isRequired,
      src: React.PropTypes.string.isRequired,
  },
  
  render: function() {
    return React.createElement('div', {},
      React.createElement('p', {}, this.props.desc),
      React.createElement('img', {src: this.props.src})
    );
  }
});

var Movie = React.createClass({
  propTypes: {
      movie: React.PropTypes.object.isRequired,
  },
  
  render: function() {
    return React.createElement('li', {key: this.props.movie.id},
        React.createElement(MovieTitle, {content: this.props.movie.title}),
        React.createElement(MovieDescription, {desc: this.props.movie.desc, src: this.props.movie.img})
    );
  }
});

var MoviesList = React.createClass({
  propTypes: {
      movies: React.PropTypes.array.isRequired,
  },
  
  render: function() {
    var moviesElements = this.props.movies.map(function(movie) {
      return React.createElement(Movie, {movie: movie});
    });
    
    return React.createElement('ul', {}, moviesElements);
  }
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'lista filmów'),
        React.createElement(MoviesList, {movies: movies})
    );

ReactDOM.render(element, document.getElementById('app'));
