class BuildItVisible extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <title>Visibility Toggle</title>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && (
          <div>
            <p>Hey these are some details you can now see!</p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<BuildItVisible />, document.getElementById('app'));

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// const app = {
//   title: "Visibility Toggle"
// };
//
//
// const appRoot = document.getElementById('app');
// let state = 0;
// let buttonText = "Show Details";
//
// const flipOption = () => {
//   if (state === 0) {
//     state = 1,
//     buttonText = "Hide Details",
//     console.log(state);
//   }
//   else {
//     state = 0,
//     buttonText = "Show Details",
//     console.log(state);
//   };
//   render();
// };
//
//
// const render = () => {
//   const page = (
//     <div>
//       <title>{app.title}</title>
//       <h1>{app.title}</h1>
//       <button onClick={flipOption}>{buttonText}</button>
//       <p hidden={state === 0}>Here are the details</p>
//     </div>
//   );
//   ReactDOM.render(page, appRoot);
// };
//
// render();
