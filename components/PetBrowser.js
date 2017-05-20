const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
//   constructor() {
//     super();
//
// } //end constructor

  // petData() {
  //   let petsArray = this.props.pets //an array of pet objects
  //
  //   let petInfo = petsArray.map(function(pet) {
  //     return pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)}
  //   })
  //
  //   return petInfo
  // }


  render() {
    //got below line from classmate:
    const petInfo = this.props.pets.map(pet =>
      <Pet pet={pet}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(pet.id)}/>)

    return (
      <div className="ui cards">
        {/* < Pet.name /> */}
        {/* < Pet.length /> */}
        {/* {this.props} */}
        {/* {this.props.pets.length} */}
        {petInfo}
        {/* {this.petData()} */}
        {/* {this.props.adoptedPets} */}
        {/* {Array.from(this.props)} */}
      </div>
    );
  }
}

module.exports = PetBrowser;
