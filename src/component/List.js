import { Component } from "react";
import Table from "react-bootstrap/Table";
import { MdAddCircle } from "react-icons/md";
import Spinner from "react-bootstrap/Spinner";
import Model from "./Model";

class List extends Component{
    constructor(props) {
        super(props)
      this.state = {
      apiData:[],
      show:false,
      loader:true,
      refresh:true,
      temp:{
        id: "",
    name: "",
    dob: "",
    email: "",
    password: "",
    gender: "",
    language: "",
    state: ""
      }
      }
      this.editData = this.editData.bind(this);
      this.deleteData = this.deleteData.bind(this);
    //    this.stateExport=this.stateExport.bind(this);
  }

  handelclose=()=>{
    this.setState({...this.state,show:false})
  }

  createData=()=>{
    this.setState({...this.state,show:true})
  }

  editData=(data)=>{
    this.setState({...this.state,show:true})
    this.setState({...this.state,
        id:data.id,
        name: data.name,
        dob: data.dob,
        email: data.email,
        password: data.password,
        gender: data.gender,
        language:data.language,
        state: data.state
    })
  }
//   stateExport=(this.setState)=>{
//     this.setState(nextSatate)
//   }

  deleteData = (dataId) => {
    console.log(dataId);
    fetch(
      `https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=delete&table=crud_table&id=${dataId}`,
      {
        method: "DELETE",
      }
    ).then(() => {
        this.setState({...this.state,refresh:"true"})
    });
  };

  componentDidMount(){
    fetch(
        "https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=read&table=crud_table",
        {
          method: "GET",
        }
      )
        .then((res) => {
          return res.json();
        })
        .then(value => {
        //   console.log(data);
          this.setState({apiData:value.data})
          this.setState({loader:false})
        //   setApiData(value.data);
        //   setLoader(false);
        })
        .catch((error) => {
          console.log(error);
        });
  }

 

render(){
    // console.log(this.state.apiData);    
    return(
        
        <div className={`p-5 ${this.state.loader ? "loader" : null}`}>
            {console.log(this.state.apiData,"APIDATA")}
        {this.state.loader ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <>
            <h1> CRUD APP </h1>
            <Table striped bordered hover variant="dark" className="fw-bold">
              <thead>
                <tr>
                  <th className="p-3 fs-3">Id</th>
                  <th className="p-3 fs-3 ">Name</th>
                  <th className="p-3 fs-3">Emailid</th>
                  <th className="p-3 fs-3">password</th>
                  <th className="p-3 fs-3">Dob</th>
                  <th className="p-3 fs-3">Gender</th>
                  <th className="p-3 fs-3">Language</th>
                  <th className="p-3 fs-3">state</th>
                  <th className="p-3 fs-3">Action </th>
                </tr>
              </thead>
              <tbody>
                {this.state.apiData?.map((item, index) => {
                  return (
                    <tr className="text-center">
                        {/* <td>hello</td> */}
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>{item.dob}</td>
                      <td>{item.gender}</td>
                      <td>{item.language}</td>
                      <td>{item.state}</td>
                      <td>
                        <button
                          className="btn btn-success me-2"
                          onClick={() => this.editData(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.deleteData(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <i className="addData" onClick={() => this.createData()}>
              {" "}
              <MdAddCircle />{" "}
            </i> 
{/*   
            <Model
              modelShow={this.state.show}
              modelClose={this.state.handleClose}
              modelData={this.state.temp}
              stateExport={this.stateExport}
            //   {...this}
            // //   setModelData={this.props.setModelData.setState}   
            // //    setRefresh={}
              refresh={this.state.refresh}
            /> */}
          </>
        )}
      </div>
    )

}
}

export default List