import React, { Component } from "react";
// import { employees } from "./employees";
import CardList from "../Card/CardList";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";
import NewEmployee from "../Employee/NewEmployee";
import Table from "../Table/Table";
import Spinner from "react-bootstrap/Spinner";
import FadeIn from "react-fade-in";
import axios from "axios";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      // employees: employees,
      employees: [],
      searchfield: "",
    };
  }

  componentDidMount = async () => {
    axios.get(`http://localhost:5000/`).then((res) => {
      const employees = res.data;
      //console.log("compnentDidMount: ", employees);
      this.setState({ employees: employees.recordsets[0] });
    });
  };

  onSearchChange = (event) => {
    console.log("onSearchChange", event.target.value);
    this.setState({ searchfield: event.target.value });
  };

  handleDelete = (cardId) => {
    const employees = this.state.employees.filter((c) => c.empId !== cardId);
    this.setState({ employees });
  };

  render() {
    const { employees, searchfield } = this.state;
    const filteredEmployees = employees.filter((employee) => {
      const fullName = employee.empFirstNm + " " + employee.empLastNm;
      return fullName.toLowerCase().includes(searchfield.toLowerCase());
    });

    const { onRouteChange } = this.props;
    return !employees.length ? (
      <div className="tc">
        <h1>Loading</h1>
        <Spinner animation="border" variant="danger" />
      </div>
    ) : (
      <FadeIn>
        <div className="tc">
          <div
            className="
          d-flex
          justify-content-between
          flex-wrap
          flex-md-nowrap
          align-items-center
          pt-3
          pb-2
          mb-3
          border-bottom"
          >
            <h1 className="display-2">Employees</h1>
            <div
              className="tr"
              style={{
                margin: "15px 0",
              }}
            >
              <NewEmployee employees={employees} />
              <SearchBox searchChange={this.onSearchChange} />
            </div>
          </div>
          <Scroll>
            <CardList
              employees={filteredEmployees}
              onDelete={this.handleDelete}
              onRouteChange={onRouteChange}
            />
            <Table
              employees={filteredEmployees}
              onRouteChange={onRouteChange}
            />
          </Scroll>
        </div>
      </FadeIn>
    );
  }
}

export default Employee;
