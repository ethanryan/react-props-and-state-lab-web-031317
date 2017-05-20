import React from 'react';

//import pets from '../data/pets'; //need this imported??
//import Pet from './Pet';    //need this imported??
import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  constructor() {
    super();

    this.changeType = this.changeType.bind(this); //adding this
    this.adoptPet = this.adoptPet.bind(this); //adding this
    //this.onFindPetsClick = this.onFindPetsClick.bind(this); //adding this???

    this.state = {
      //pets: pets.getAll(),
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  } //end constructor

  changeType(value) {
    console.log('onChangeType is called with this argument: ', value);
    this.setState({
      filters: Object.assign({}, this.state.filters, {type: value})
      //filters: {type: type} //setting state.filters.type to argument passed into changeType
    })
  }

  //got this from classmate:
  results(){
    //console.log(this.state.filters);
     const URL = this.state.filters.type === "all" ? "/api/pets" : `/api/pets?type=${this.state.filters.type}`
     fetch(URL, {method: 'GET'}).then(function(response){
       this.setState({
         pets: response
       })
     })
   }

  adoptPet(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId] //adding petId to array of adoptedPets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.changeType}
                onFindPetsClick={this.results.bind(this)}
                //need to bind onFindPetsClick to this.results!!!!
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.adoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
