import React from "react";
import "./App.css";
// import Plot from 'react-plotly.js';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  PieChart,
  Pie,
  Cell,
  LabelList
} from "recharts";
import { Card, Row, Col } from "reactstrap";
import ButtonAppBar from "./appbar";
import Image from "./awesome.jpg";
const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`
  }
};
export default class Graph extends React.Component {
  render() {
    // console.log(this.props.Predicted_Class)
    // const data = [
    //   {
    //     "column": "1",
    //     "uv":this.props.Predicted_Class[0]
    //   },
    //   {put them in cards and make them square size side by side and then its done :)done
    //     "column": "0",
    //     "uv":this.props.Predicted_Class[1]
    //   }
    // ]
    const COLORS = ["green", "red"];
    // console.log(data);

    const data2 = [
      { State: "CA", Denied: 1032.0, Certified: 99252, Total: 100284 },
      { State: "TX", Denied: 491.0, Certified: 84866, Total: 85357 },
      { State: "NJ", Denied: 456.0, Certified: 67626, Total: 68082 },
      { State: "NY", Denied: 628.0, Certified: 36846, Total: 37474 },
      { State: "IL", Denied: 241.0, Certified: 33179, Total: 33420 },
      { State: "PA", Denied: 151.0, Certified: 21479, Total: 21630 },
      { State: "MA", Denied: 170.0, Certified: 21372, Total: 21542 },
      { State: "WA", Denied: 131.0, Certified: 20373, Total: 20504 },
      { State: "MI", Denied: 130.0, Certified: 19288, Total: 19418 },
      { State: "MD", Denied: 83.0, Certified: 16771, Total: 16854 }
    ];
    const data3 = [
      {
        Company: "COGNIZANT TECHNOLOGY SOLUTIONS US CORP",
        Denied: 1.0,
        Certified: 24783.0,
        Total: 24784
      },
      {
        Company: "INFOSYS LIMITED",
        Denied: 1.0,
        Certified: 20324.0,
        Total: 20325
      },
      {
        Company: "TATA CONSULTANCY SERVICES LIMITED",
        Denied: 2.0,
        Certified: 10524.0,
        Total: 10526
      },
      { Company: "GOOGLE LLC", Denied: 64.0, Certified: 8891.0, Total: 8955 },
      {
        Company: "ERNST & YOUNG U.S. LLP",
        Denied: 47.0,
        Certified: 7520.0,
        Total: 7567
      },
      {
        Company: "CAPGEMINI AMERICA INC",
        Denied: 50.0,
        Certified: 7255.0,
        Total: 7305
      },
      {
        Company: "AMAZON.COM SERVICES, INC.",
        Denied: 22.0,
        Certified: 5952.0,
        Total: 5974
      },
      {
        Company: "DELOITTE CONSULTING LLP",
        Denied: 11.0,
        Certified: 5880.0,
        Total: 5891
      },
      {
        Company: "ACCENTURE LLP",
        Denied: 13.0,
        Certified: 5004.0,
        Total: 5017
      },
      {
        Company: "IBM CORPORATION",
        Denied: 6.0,
        Certified: 4006.0,
        Total: 4012
      }
    ];
    const data4 = [
      { FullTime: "Yes", Denied: 4738, Certified: 537027, Total: 541765 },
      { FullTime: "No", Denied: 347, Certified: 9259, Total: 9606 }
    ];
    const data5 = [
      { Status: "Certified", Total: 546286 },
      { Status: "Denied", Total: 5085 }
    ];
    const data6 = [
      {
        JobTitle: "SOFTWARE DEVELOPER",
        Denied: 200.0,
        Certified: 28856.0,
        Total: 29056
      },
      {
        JobTitle: "SOFTWARE ENGINEER",
        Denied: 153.0,
        Certified: 28776.0,
        Total: 28929
      },
      {
        JobTitle: "SENIOR SYSTEMS ANALYST JC60",
        Denied: 1.0,
        Certified: 11385.0,
        Total: 11386
      },
      {
        JobTitle: "SENIOR SOFTWARE ENGINEER",
        Denied: 27.0,
        Certified: 6735.0,
        Total: 6762
      },
      {
        JobTitle: "ASSISTANT PROFESSOR",
        Denied: 32.0,
        Certified: 4071.0,
        Total: 4103
      },
      {
        JobTitle: "JAVA DEVELOPER",
        Denied: 14.0,
        Certified: 3315.0,
        Total: 3329
      },
      {
        JobTitle: "PROGRAMMER ANALYST",
        Denied: 38.0,
        Certified: 3255.0,
        Total: 3293
      },
      { JobTitle: "ARCHITECT", Denied: 9.0, Certified: 3275.0, Total: 3284 },
      { JobTitle: "ANALYST", Denied: 20.0, Certified: 3225.0, Total: 3245 },
      {
        JobTitle: "SENIOR SOFTWARE DEVELOPER",
        Denied: 8.0,
        Certified: 3132.0,
        Total: 3140
      }
    ];

    return (
      <div style={styles.paperContainer}>
        <ButtonAppBar />

        <div style={styles.paperContainer}>
          <Row>
            <Col ClassName="col-md-4">
              <Card>
                <BarChart width={500} height={500} data={data5}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Status" />
                  <YAxis dataKey="Total" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Total" fill="red">
                    {/* {data.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))} */}
                  </Bar>
                  >
                </BarChart>
              </Card>
            </Col>
            <Col ClassName="col-md-4">
              <Card md={6}>
                <BarChart width={500} height={500} data={data6}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="JobTitle" />
                  <YAxis dataKey="Certified" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Denied" fill="red" />
                  <Bar dataKey="Certified" fill="green" />
                </BarChart>
              </Card>
            </Col>

            <Col ClassName="col-md-4">
              <Card md={6}>
                <BarChart width={500} height={500} data={data2}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="State" />
                  <YAxis dataKey="Denied" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Denied" fill="red" />
                  <Bar dataKey="Certified" fill="green" />
                </BarChart>
              </Card>
            </Col>
            <Row>
              <Col ClassName="col-md-6">
                <Card md={6}>
                  <BarChart width={500} height={500} data={data3}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Company" />
                    <YAxis dataKey="Denied" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Denied" fill="red" />
                    <Bar dataKey="Certified" fill="green" />
                    <LabelList
                      dataKey="Company"
                      position="insideTop"
                      angle="45"
                    />
                  </BarChart>
                </Card>
              </Col>
              <Col class="cool">
                <Card md={6}>
                  <BarChart width={500} height={500} data={data4}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="FullTime" />
                    <YAxis dataKey="Denied" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Denied" fill="red" />
                    <Bar dataKey="Certified" fill="green" />
                    <LabelList
                      dataKey="FullTime"
                      position="insideTop"
                      angle="45"
                    />
                  </BarChart>
                </Card>
              </Col>
            </Row>
          </Row>

          {/* <PieChart width={730} height={250}>
  <Pie data={data} dataKey="uv" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" >
  {
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }</Pie>
  <Tooltip />find out man okk done
  <Legend />
</PieChart> */}
        </div>
      </div>
    );
  }
}
