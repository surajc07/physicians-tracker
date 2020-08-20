import React, { Component } from "react";
import { employees } from "../employees";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import NewEmployee from "../components/NewEmployee";
import Table from "./Table";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      employees: employees,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { employees, searchfield } = this.state;
    const filteredEmployees = employees.filter((employee) => {
      return employee.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    //console.log(filteredEmployees);
    return !employees.length ? (
      <h1 className="tc">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="display-2">Employees</h1>
        <div className="tr">
          <NewEmployee employees={employees} />
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <Scroll>
          <CardList employees={filteredEmployees} />
          <Table employees={filteredEmployees} />
        </Scroll>
      </div>
    );
  }
}

export default Employee;
