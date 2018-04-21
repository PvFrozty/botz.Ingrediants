import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/navigation/NavigationBar';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceImg from './components/faceImg/FaceImg';
import IngrediantsTable from './components/ingrediantsTable/IngrediantsTable';
import Rank from './components/rank/Rank';
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
 apiKey: 'e1f239a619e44b20811e3ca81c187c9a'
});

const particleOptions = {
  particles: {
               number: {
                 value: 40,
                  density: {
                    enable: true,
                    value_area: 510
                  }
               },
                line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    },
   
  

            }
}

class App extends Component {
constructor(){
  super();
  this.state={
    input: '',
    imgUrl:'',
    ingrediants: '',
    route:'SignIn',
    user:{
        id:'',
        name:'',
        email:'',
        entries:0,
        joined: ''

    }
  }
}

  setRoute = (route) => {
    this.setState({route:route});
  }

  loadUser = (data) => {
  this.setState({
    user:{
       id:data.id,
        name:data.name,
        email:data.email,
        entries:data.entries,
        joined: data.joined
    }
  })
}

// componentDidMount(){
//   fetch('http://localhost:3000/')
//     .then(response => response.json())
//     .then(data => console.log(data));
    
// }

onInputChange = (event) => {
this.setState({input:event.target.value});
}

getIngrediants = (arraylist) => {
  const ingrediantList = arraylist.outputs[0].data.concepts;
//  console.log(ingrediantList);
  //const list = ingrediantList.map(x => x.name);
const rows = ingrediantList.map(row => {
    // var cells = [];
    // for (var i in row) {
      
    //   cells.push(<td>{row[i]}</td>);
    // }    
    // console.log(cells);
    return <tr key={row.id.toString()}><td key={row.id}>{row.name}</td><td key={row.name}>{row.value}</td></tr>;
  });

this.setState({ingrediants: rows});

}

onSubmit = () => {
    this.setState({imgUrl: this.state.input})
    app.models.predict(Clarifai.FOOD_MODEL, this.state.input)
    .then( response => {
      if(response){
          fetch('http://localhost:3000/Image', {
          method: 'put',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            id:this.state.user.id
          })
        }).then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user,{entries:count}));
        });
      }

      this.getIngrediants(response);
    }
    
    ).catch(err => console.log(err));

  }



  render() {
    return (
      <div className="App Roboto">
          <Particles params={particleOptions} className='particleCSS'/>
        {
          this.state.route === 'SignIn'?
          <SignIn loadUser={this.loadUser} setRoute={this.setRoute}/>
          :(this.state.route === 'Register' ?
            <Register loadUser={this.loadUser} setRoute={this.setRoute}/>
            :        <div>
          
                      <NavigationBar setRoute={this.setRoute} />
                      <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                      <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
                      
                      <FaceImg imgUrl={this.state.imgUrl}/>
                      <IngrediantsTable ingArray={this.state.ingrediants}/>
                    </div>)
        }
      </div>
    );
  }
}

export default App;
