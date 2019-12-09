import React from "react";
import "./App.css";
import { Component } from "react";
import ButtonAppBar from "./appbar.js";

import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import axios from "axios";
import EmpData from "./resources/employers.json";
import StateData from "./resources/state.json";
import socData from "./resources/socs.json";
import naicsData from "./resources/naics.json";

import Image from "./usa.jpg";
const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.searchList = this.searchList.bind(this);
    this.stateList = this.stateList.bind(this);
    this.socList = this.socList.bind(this);
    this.naicsList = this.naicsList.bind(this);
  }
  state = {
    Employer_Name: "",
    Employer_State: "",
    SOC_Code: "",
    NAICS_Code: "",
    Total_workers: "",
    FullTime_Position: "",
    H1b_dependent: "",
    Willful_Violator: "",
    Total_wage: "",
    model_choice: "",
    matches: [],
    noMatch: false,
    states: [],
    noState: false,
    socs: [],
    noSoc: false,
    naicss: [],
    noNaics: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    const data = {
      Employer_Name: this.state.Employer_Name,
      Employer_State: this.state.Employer_State,
      SOC_Code: this.state.SOC_Code,
      NAICS_Code: this.state.NAICS_Code,
      Total_workers: this.state.Total_workers,
      FullTime_Position: this.state.FullTime_Position,
      H1b_dependent: this.state.H1b_dependent,
      Willful_Violator: this.state.Willful_Violator,
      Total_wage: this.state.Total_wage,
      model_choice: this.state.model_choice
    };
    axios
      .post(
        "http://ec2-3-134-96-99.us-east-2.compute.amazonaws.com:90/pred",
        data
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert(res.data);
      });
  };

  searchList = event => {
    const value = event.target.value;
    let matches = [];
    if (value.length > 4) {
      matches = EmpData.filter(function(emp) {
        if (emp.EMPLOYER_NAME && emp.EMPLOYER_NAME.length > 0) {
          return emp.EMPLOYER_NAME.includes(value.toUpperCase());
        }
        return false;
      });
      this.setState({ matches: matches });
      if (!matches.length) {
        this.setState({ noMatch: true });
      } else {
        this.setState({ noMatch: false });
      }
      if (matches.length === 1 && matches[0].EMPLOYER_NAME.length > 0) {
        this.setState({ Employer_Name: matches[0]["EMPLOYER_NAME.1"] });
      }
    } else {
      this.setState({ matches: [{ EMPLOYER_NAME: "" }] });
    }
  };

  //code for state search
  stateList = event => {
    const value = event.target.value;
    let states = [];
    if (value.length > 0) {
      states = StateData.filter(function(emp) {
        if (emp.EMPLOYER_STATE && emp.EMPLOYER_STATE.length > 0) {
          return emp.EMPLOYER_STATE.includes(value.toUpperCase());
        }
        return false;
      });
      this.setState({ states: states });
      if (!states.length) {
        this.setState({ noState: true });
      } else {
        this.setState({ noState: false });
      }
      if (states.length === 1 && states[0].EMPLOYER_STATE.length > 0) {
        this.setState({ Employer_State: states[0]["EMPLOYER_STATE.1"] });
      }
    } else {
      this.setState({ states: [{ EMPLOYER_STATE: "" }] });
    }
  };

  //code for soc search
  socList = event => {
    const value = event.target.value;
    let socs = [];
    if (value.length > 0) {
      socs = socData.filter(function(emp) {
        if (emp.SOC_Code && emp.SOC_Code.length > 0) {
          return emp.SOC_Code.includes(value.toUpperCase());
        }
        return false;
      });
      this.setState({ socs: socs });
      if (!socs.length) {
        this.setState({ noSoc: true });
      } else {
        this.setState({ noSoc: false });
      }
      if (socs.length === 1 && socs[0].SOC_Code.length > 0) {
        this.setState({ SOC_Code: socs[0]["SOC_Code.1"] });
      }
    } else {
      this.setState({ socs: [{ SOC_Code: "" }] });
    }
  };

  //code for naics search
  naicsList = event => {
    const value = event.target.value;
    let naicss = [];
    if (value.length > 0) {
      naicss = naicsData.filter(function(emp) {
        if (emp.NAICS_Code && emp.NAICS_Code.length > 0) {
          return emp.NAICS_Code.includes(value.toUpperCase());
        }
        return false;
      });
      this.setState({ naicss: naicss });
      if (!naicss.length) {
        this.setState({ noNaics: true });
      } else {
        this.setState({ noNaics: false });
      }
      if (naicss.length === 1 && naicss[0].NAICS_Code.length > 0) {
        this.setState({ NAICS_Code: naicss[0]["NAICS_Code.1"] });
      }
    } else {
      this.setState({ naicss: [{ NAICS_Code: "" }] });
    }
  };

  // selectedItem = event => {
  //   alert(event.target.value);
  // };

  render() {
    const { matches, noMatch } = this.state;
    const { states, noState } = this.state;
    const { socs, noSoc } = this.state;
    const { naicss, noNaics } = this.state;
    return (
      <div style={styles.paperContainer}>
        {/* <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={{ padding: 15, alignItems: "center", borderRadius: 5 }}
        ></LinearGradient> */}
        <ButtonAppBar />
        <div className="App">
          <Row>
            <Card>
              <Card.Body>
                <Card.Title class="text-center">
                  <kbd>H1B LSA Prediction</kbd>
                </Card.Title>
                <br></br>
                <Card.Text>
                  {/* <form> */}
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="search"
                      class="form-control"
                      placeholder="Employer_Name"
                      name="Employer_Name"
                      onChange={this.searchList}
                      list="filterList"
                    />
                    {matches.length > 0 && (
                      <datalist id="filterList">
                        {matches.map((match, index) => (
                          <option
                            key={index}
                            value={`${match.EMPLOYER_NAME}`}
                          />
                        ))}
                      </datalist>
                    )}
                    {noMatch && <p> No employer found</p>}

                    <br></br>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Employer_State"
                      name="Employer_State"
                      onChange={this.stateList}
                      list="filterList1"
                    />
                    {states.length > 0 && (
                      <datalist id="filterList1">
                        {states.map((match1, index) => (
                          <option
                            key={index}
                            value={`${match1.EMPLOYER_STATE}`}
                          />
                        ))}
                      </datalist>
                    )}
                    {noState && <p> No state found</p>}

                    <br></br>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="SOC_Code"
                      name="SOC_Code"
                      onChange={this.socList}
                      list="filterList2"
                    />
                    {socs.length > 0 && (
                      <datalist id="filterList2">
                        {socs.map((match2, index) => (
                          <option key={index} value={`${match2.SOC_Code}`} />
                        ))}
                      </datalist>
                    )}
                    {noSoc && <p> No soc found</p>}

                    <br></br>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="NAICS_Code"
                      name="NAICS_Code"
                      onChange={this.naicsList}
                      list="filterList3"
                    />
                    {naicss.length > 0 && (
                      <datalist id="filterList3">
                        {naicss.map((match3, index) => (
                          <option key={index} value={`${match3.NAICS_Code}`} />
                        ))}
                      </datalist>
                    )}
                    {noNaics && <p> No naics found</p>}

                    <br></br>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Total_workers"
                      name="Total_workers"
                      onChange={this.handleChange}
                    />
                    <br></br>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="FullTime_Position"
                      name="FullTime_Position"
                      onChange={this.handleChange}
                    />
                    <br></br>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="H1b_dependent"
                      name="H1b_dependent"
                      onChange={this.handleChange}
                    />
                    <br></br>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Willful_Violator"
                      name="Willful_Violator"
                      onChange={this.handleChange}
                    />

                    <br></br>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Prevailing_Wage"
                      name="Total_wage"
                      onChange={this.handleChange}
                    />
                    <br></br>
                    <label>Model Choice</label>
                    <label>1 for naive bayes, 2 for knn,3 for dtree</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="1/2/3 or blank for Random Forest"
                      name="model_choice"
                      onChange={this.handleChange}
                    />
                    <br></br>

                    <button type="submit" class="btn-outline-success btn">
                      Predict
                    </button>
                  </form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
// google
