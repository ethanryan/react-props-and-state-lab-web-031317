const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();

  this.changeHandler = this.changeHandler.bind(this); //adding this
  //this.onFindPetsClick = this.onFindPetsClick.bind(this); //adding this

} //end constructor

  changeHandler(event) {
    console.log('what are the props in changeHandler: ', this.props);
    this.props.onChangeType(event.target.value)
  }

  // onFindPetsClick(event) {
  //   event.preventDefault();
  //   console.log('You chose: ' + event.target.value);
  // }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">

          <select name="type" id="type"
            value={this.props.filters.type}
            // needed to add .filters in line above!
            onChange={this.changeHandler}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          {/* <button onClick={this.onFindPetsClick} */}
          <button
            className="ui secondary button"
            onClick={this.props.onFindPetsClick}
            // need to add .props in line above
            >Find pets</button>
        </div>
      </div>
    );
  }
} //end class

module.exports = Filters;
