import React from 'react';
import './App.css';
import Header from './Components/Header'
//import {} from '@material-ui/core';
import Home from './Pages/Home-F/Home';
import Gallery from "./Pages/Gallery-F/Gallery";
import Booking from './Pages/Booking-F/Booking'

/*  RENDER INFO FROM PORTFOLIO.JSON FILE
state = {
      foo: 'bar',
      resumeData: {}
    };

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

*/

function App() {

  
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Gallery/>
      <Booking/>
    </div>
  );
}

export default App;
