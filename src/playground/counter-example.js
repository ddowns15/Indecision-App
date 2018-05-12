
class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  handleAddOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
// console.log('App.js is running!');
//
// const app = {
//   title: 'Indecision App',
//   subtitle: 'Greatest App Ever',
//   options: ['One', 'Two']
// };
// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
//     <ol>
//       <li>Item One</li>
//       <li>Item Two</li>
//     </ol>
//   </div>
// );
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };
//
// const appRoot = document.getElementById('app');
//
// // Render JSX from above
// const renderCounterApp = () => {
//   const template2 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//
//   ReactDOM.render(template2, appRoot);
// };
//
// renderCounterApp();
//
//
//
// //////////////// old stuff from classes
// // Challenge from JSX lecture
// // const user = {
// //   name: 'Dave',
// //   age: 28,
// //   location: 'SoCal'
// // };
//
//
// // JSX - JavaScript XML
// //
// // //function introducted in conditional lecture
// // function getLocation(location) {
// //   if (location) {
// //     return <p>Location: {location}</p>;
// //   } else {
// //     return undefined;
// //   }
// // }
// //
// // const template2 = (
// //   <div>
// //     <h1>{user.name ? user.name : "Anonymous"}</h1>
// //     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
// //     {getLocation(user.location)}
// //   </div>
// // );
