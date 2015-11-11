import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar page="Home"/>
        <div className="container">
            <div className="textInfo">
                <h1>Ahhhhhhhhhhhhh!!!! Page Not Found</h1>
                <div>
                  <h3>We couldn't find the page you requested.</h3>
                </div>
                <div>In the mean time, we suggest you head back to our  <a href="/">home page</a>  or sit back and enjoy the relaxing sound of this screaming goat.</div>
            </div>
            <div className="videoContainer row">
                <iframe className="videoIFrame" src="http://www.youtube.com/embed/SIaFtAKnqBU?vq=hd720&amp;rel=0&amp;showinfo=0&amp;controls=0&amp;iv_load_policy=3&amp;loop=1&amp;playlist=SIaFtAKnqBU&amp;modestbranding=1&amp;autoplay=1" frameborder="0" webkitallowfullscreen="" allowfullscreen="" id="fitvid959060"></iframe>
            </div>
         </div>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById('main'));