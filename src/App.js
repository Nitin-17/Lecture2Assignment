import React from 'react';

/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['bring apples', 'bring baNaNa']
    }
  }

  render() {
    return (
      <div>
        <h1>Todo List Application</h1>

        <input type="text" placeholder="Todo" />
        <button>Add Todo</button>

        <ol>
          {this.state.todos.map(todo => <li>
            {todo}
          </li>)}
        </ol>
      </div>
    );
  }
}

*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        todos0: ['Nitin Saini','B.tech CSE ','LikedIn: https://in.linkedin.com/in/nitin-saini-747568170'],
      todos: ['C++ Programming','Java','Data Structures'],
        todos2: ['HTML+CSS ','BootStrap','AngularJS','PHP'],
        todos3:['Image Captcha','Food Delivery Application','Travel Application','Banking Managment System','Question Bank'],
        todos4:['LJP SVM Inter College -> Intermediate : 89% ','LJP SVM Inter College -> High School : 83','LPU-> B.tech : 7.31'],
        todos5:['Database Management','Microsoft Office','WordPress and Blogger','Cricket','Chess']
    }
  }

  render() {
    return (
       
      <div> <center>
        <h3 style={{fontFamily:'Lobster'}}>Nitin Saini's Portfolio</h3>
        <div class="container" style={{marginTop: '20px'}}>
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xs-6 col-xs-12">
            <div class="thumbnail">
            <img src="https://images.wallpapersden.com/image/download/anonymous-4k-hacker-mask_70160_1920x1080.jpg" class="image" style={{height:'250px',width:'500px'}}></img>
            <div class="caption middle">
                           
                            <hr style={{borderTop: '1px solid red',width:'500px'}}></hr>
                          <center>  <p style={{wordSpacing: '2px',fontWeight:'bold'}}>A curious, energetic computer science specialist
skilled in project planning and time management,
with a potent foundation in programming logic,
cross-platform coding. </p></center>
                            
                           
            </div>
            </div>
            </div>
        </div>
        </div></center>
        
        <h4 style={{marginLeft:'20px',textDecoration:'underline'}}>About Me</h4><hr style={{borderTop: '1px solid blue',width:'500px',marginRight:'760px',position:'absolute'}}></hr><br></br>
        <p>
         <ol>
          {this.state.todos0.map(todo => <li>
            {todo}
          </li>)}
        </ol>
        </p>
        
<h4 style={{marginLeft:'20px',textDecoration:'underline'}}>Programming Skills</h4><hr style={{borderTop: '1px solid blue',width:'500px',marginRight:'760px',position:'absolute'}}></hr><br></br>
        <p>
         <ol>
          {this.state.todos.map(todo => <li>
            {todo}
          </li>)}
        </ol>
        </p>
        
        <h4 style={{marginLeft:'20px',textDecoration:'underline'}}>Web Technologies</h4><hr style={{borderTop: '1px solid blue',width:'500px',marginRight:'780px',position:'absolute'}}></hr><br></br>
        <p>
         <ol>
          {this.state.todos2.map(todo => <li>
            {todo}
          </li>)}
        </ol>
        </p>
        
         <h4 style={{marginLeft:'20px',textDecoration:'underline'}}>Projects</h4><hr style={{borderTop: '1px solid blue',width:'500px',marginRight:'780px',position:'absolute'}}></hr><br></br>
        <p>
         <ol>
          {this.state.todos3.map(todo => <li>
            {todo}
          </li>)}
        </ol>
        </p>
        
        <h4 style={{marginLeft:'20px',textDecoration:'underline'}}>Education</h4><hr style={{borderTop: '1px solid blue',width:'500px',marginRight:'780px',position:'absolute'}}></hr><br></br>
        <p>
         <ol>
          {this.state.todos4.map(todo => <li>
            {todo}
          </li>)}
        </ol>
        </p>
        
         <h4 style={{marginLeft:'20px',textDecoration:'underline'}}>Interests</h4><hr style={{borderTop: '1px solid blue',width:'500px',marginRight:'780px',position:'absolute'}}></hr><br></br>
        <p>
         <ol>
          {this.state.todos5.map(todo => <li>
            {todo}
          </li>)}
        </ol>
        </p>
      </div>
        
    );
  }
}



export default App