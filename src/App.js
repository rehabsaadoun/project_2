import React, { Component } from 'react'
import Visited from './Visited';
import WillVisit from './WillVisit';
import WantVisit from './WantVisit';
import image18 from './image/18.PNG'
import image4 from './image/4.PNG'
import image5 from './image/5.jpg'



import swal from 'sweetalert'
import './style.css';


import './App.css';

class App extends Component {

  state= {
   visited : [],
   willvisit:[],
   wantvisit:[],
  }

  changeHandler = (e) => {
    let data = {...this.state}
    data[e.target.name] = e.target.value
    this.setState(data)
  }

  newModel= (e) => {
    if (e.target.innerText === "East Stroudsburg") {
      
swal({title: "PA/East Stroudsburg",

text: "lived from 2014 to 2017 - Got My Master Degree from East Stroudsburg University",

  icon: "http://www.totsandtravel.com/images/hotels/US_PA/pocono_palace_resort_all_inclusive_east_stroudsburg_pennsylvania-main.jpg" })
    } else if(e.target.innerText === "Mecca"){
      swal({title: "KSA/Mecca🕋",

      text: "Travel in  (11- Ramadan)-stay 23 days ",
      
        icon: "https://blog.britishmuseum.org/wp-content/uploads/2017/08/Ka%E2%80%99ba-Mecca-1.jpg" })
          } else if(e.target.innerText === "Santorini"){
            swal({title: "santorini",

text: "Some day",

  icon: "https://cdn.thecrazytourist.com/wp-content/uploads/2018/04/ccimage-shutterstock_632387108.jpg" })
          }else if(e.target.innerText === "Hawaii"){
    swal({title: "Hawaii/Honolulu",

    text: " Honeymoon ",
    
      icon: "https://www.classicvacations.com/sites/default/files/main-hawaii-pool_0.jpg" })
        } else if(e.target.innerText === "Orlando"){
   
      swal({title: "FL/Orlando",
  
     
      text:"Travel in 8 Aug/2019 -Many things for fun-especially I have lived from 2019 to 2013 __ I miss it😀",
      
        icon: "https://www.paymentsjournal.com/wp-content/uploads/2019/02/disney-2692578_1920.jpg" })
  } 
  else if(e.target.innerText === "Turkey"){
   
    swal({title: "Turkey",

   
    text:"visited in 2010 with my family- 2018 Girls Trip",
    
      icon: "https://www.barcelo.com/pinandtravel/wp-content/uploads/2018/11/Ap1-17-1170x532.jpg" })
  }
  }


  submitHandler= (e) =>{
    let data = {...this.state}
    console.log(e.target.name);
    console.log(e.target.previousSibling.value);
    console.log(e.target.previousElementSibling.value);
    
    
    
    data[e.target.name].push(e.target.previousSibling.value)
   this.setState(data)
  }

  removeTask = (e) => {

    let data = {...this.state}

    data[e.target.name].splice(e.target.index, 1)
   this.setState(data)
    ///
    // var index= e.target.index;
    // let newTodo= {...this.state}
    // newTodo.todos.splice(index, 1);
    // this.setState(newTodo);
  }

  // changeHandler = (e) => {
  //   this.setState({ todo : { task : e.target.value}})
  // }

  // submitHandler= () =>{
  //   let data = {...this.state}
  //   data.todos.push(data.todo)
  //  this.setState(data)
  // }
  // removeTask = (e) => {
  //   var index= e.target.index;
  //   let newTodo= {...this.state}
  //   newTodo.todos.splice(index, 1);
  //   this.setState(newTodo);
  // }

  // changeHandler= (e) => {
  //   this.setState({ todo : { task : e.target.value}})
  // }

  // submitHandler = () =>{
  //   let data = {...this.state}
  //   data.todos.push(data.todo)
  //  this.setState(data)
  // }
  // removeTask= (e) => {
  //   var index= e.target.index;
  //   let newTodo= {...this.state}
  //   newTodo.todos.splice(index, 1);
  //   this.setState(newTodo);
  // }

  render() {
    
    
    return (
      <div className="App">
        <h2>  Trips list</h2>

        

<div className = "image-1"/>  
<div className="container"> 

  <div className="container-1">
  

    <img className='image-1' src={image18} alt= "visited cities" />
    <h3>Visited City</h3>
    <input name="visited_input" 
          onChange={this.changeHandler}
          size="80px"/>
        
        <button  className="btn" name="visited" onClick={this.submitHandler}>Add to List</button>
         {this.state.visited.map((visite) =>
      <p><span onClick={this.newModel}>{visite}</span><button name="visited" onClick={this.removeTask}>X</button></p>
      
          )}
         <Visited changeHandler={this.changeHandler1} submitHandler={this.submitHandler} removeTas={this.removeTas1} />
    </div>


   
   <div className="container-2">
   
<img className='image-1'  src={image4} alt="will visit" />
<h3>Will Visit</h3>
<input name="willvisit_input" 
          onChange={this.changeHandler}
        />
        
 <button className="btn" name="willvisit" onClick={this.submitHandler}>Add to List</button>
         {this.state.willvisit.map((wv) =>
        <p><span onClick={this.newModel}>{wv}</span><button name="willvisit" onClick={this.removeTask}>X</button></p>
        )}
        <WillVisit  changeHandler={this.changeHandler2} submitHandler={this.submitHandler} removeTas={this.removeTas2}/>
</div>


 


<div className="container-3">

     <img className='image-1' src={image5} alt="want to visit"/> 
     <h3>Want To visit</h3>
       <input name="wantvisit_input" 
          onChange={this.changeHandler}
          />
        <button  className="btn"  name="wantvisit" onClick={this.submitHandler}>Add to List</button>
         
         {this.state.wantvisit.map((wnt) =>
         
        <p><span onClick={this.newModel}>{wnt}</span><button name='wantvisit' onClick={this.removeTask}>X</button></p>
        )}
        <WantVisit changeHandler={this.changeHandler3} submitHandler={this.submitHandler} removeTas={this.removeTas3}/>
        </div> 
</div>
         <footer className="footer">
   <p>“If the plan doesn’t work, change the plan, but never the goal.💪
     ” Rehab Alsaadoun❤️</p>
  </footer>
     
      </div>
   );
  }
}

export default App;



