const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();


  this.state = {
    //value: '', //adding this
  };

  this.handleChange = this.handleChange.bind(this); //adding this
  } //constructor

  // Should have a pet prop. Use the attributes in this data to render
  // the pet card correctly. It should show the
  // pet's name, type, age and weight. Based on the pet's gender,
  // the component also needs to contain either a male (♂) or female (♀) symbol.

  handleChange() {
    //debugger
    console.log('adoptButton clicked');
    //event.preventDefault();
    let petId = this.props.pet.id
    this.props.onAdoptPet(petId) //passing petId in as argument to onAdoptPet
  }

  //ternary operator, in extra content below:::
  // {this.props.isAdopted === false ? <button className="ui primary button" onClick={this.handleChange}>Adopt pet</button> : <button className="ui disabled button" >Already adopted</button>}
  //or:
  // {this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.handleChange}>Adopt pet</button>}

////why doesn't this function work? why do i have to use ternary operator??
  // adoptedPets() {
  //   //event.preventDefault();
  //   if (this.props.pet.isAdopted) {
  //     return (
  //       <div>
  //       <button className="ui disabled button">Already adopted</button>
  //     </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //       <button className="ui primary button" onClick={this.handleChange}>Adopt pet</button>
  //     </div>
  //     )
  //   }
  // }

  render() {
    //console.log(this.props);
    let disabledButton = <button className="ui disabled button">Already adopted</button>
    let adoptButton = <button className="ui primary button" onClick={this.handleChange}>Adopt pet</button>

    return (
      <div className="card">
        <div className="content">

          <a className="header"> Pet name: {this.props.pet.name}</a>
          <p>Pet gender: {(this.props.pet.gender === 'male') ? '♂' : '♀' }</p>

          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? disabledButton : adoptButton}
          {/* if pet is adopted render disabledButton, else render adoptButton */}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
