import React from "react";
import Movie from "../Movie/Movie.jsx";
import "./Style.css";
class Movies extends React.Component {
  render() {
    return (
      <div className="movie-section">
        <Movie
          banner="https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          likes="123.0k"
          name="Bird's"
        />

        <Movie
          banner="https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhaW50aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          likes="123.0k"
          name="Girl"
        />

        <Movie
          banner="https://plus.unsplash.com/premium_photo-1677679817657-b94ed4ce1b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhaW50aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          likes="123.0k"
          name="Bocey"
        />
      </div>
    );
  }
}

export default Movies;
