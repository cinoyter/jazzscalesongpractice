import React from 'react';
import 'fomantic-ui-css/semantic.css';
import './App.css';
import ChordSearch from './ChordSearch'

import { Container, Header } from 'semantic-ui-react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: []
    }
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState( { posts: json } ));
  }
  
  render() {
    const { posts } = this.state;
    return( 

      <Container>
        <ChordSearch></ChordSearch>
        <Header>
          <h1 class="display-4">Posts from our API call</h1>
        </Header>
        {posts.map( (post) => (
          <div className="card" key={post.id}>
            <div className="card-header">
              ID #{post.id} {post.title}
            </div>
            <div className="card-body">
              <img src={post.thumbnailUrl}></img>
            </div>
          </div>

        ))}
      </Container>
    );

  }

}

export default App;
