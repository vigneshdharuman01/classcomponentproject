import { Component } from 'react'
// import { Link } from 'react-router-dom';


class Loginpage extends Component {

    constructor(props) {
        super(props)
      this.state = {
          name: "",
          pass: "",
          data: {},
      }
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    fetch(
        `https://zcmsdemo3.desss-portfolio.com/dynamic/dynamic.php?action=chatbot_login&user=${this.state.name}&password=${this.state.pass}`,
        {
          method: "GET",
        }
      )
      .then((res) => res.json())
    .then(value => {
        // this.setState({ books: booksList });
        // console.log(value)
       if(value.status === 200){
        this.setState({data:value})
        alert("Login Successfull");
       
            
        
       }
       else{
        alert("Invalid data")
        // this.setState({...this.state,name:''})
        // // this.setState({pass:''})
       }
    });
  }

   render() {
    // console.log(this.state.data)
    return(
     
        <div>
        <form className="loginform" onSubmit={(e) =>this.handleSubmit(e)} >
          <div className="formcontainer">
            <h2>LOGIN PAGE</h2>
            <div className="mb-3">
              <label for="username" className="form-label">
                username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                 value={this.props.name}
                 onChange={(e)=>this.setState({...this.state,name:[e.target.value]})}
                placeholder="Enter User Name"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                 value={this.props.pass}
                 onChange={(e)=>this.setState({...this.state,pass:[e.target.value]})}
                placeholder="Enter user password"
              />
            </div>
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </div>
      
    )
   }
}

export default Loginpage