const el = React.createElement;

class HelloButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "Hello World!";
    }

    return el(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Hello"
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(el(LikeButton), domContainer);
