import { Component } from "react";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
      seen: false,
    };
  }

  render() {
    console.log("render");
    const { favourite, seen } = this.state;
    const { title, year, description } = this.props;

    return (
      <div className="Movie">
        <div>{title}</div>
        <div>{year}</div>
        <div>{description}</div>
        <button
          type="button"
          onClick={() => {
            this.setState({
              favourite: !favourite,
            });
          }}
        >
          {this.state.favourite ? "Remove from favourite" : "Add to favourite"}
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({
              seen: !seen,
            });
          }}
        >
          {this.state.seen ? "Unseen" : "Seen"}
        </button>
      </div>
    );
  }
}

export default Movie;
