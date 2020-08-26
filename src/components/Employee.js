import React, { Component } from "react";
import { employees } from "../employees";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import NewEmployee from "../components/NewEmployee";
import Table from "./Table";
import FadeIn from "react-fade-in";

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
  handleDelete = (cardId) => {
    const employees = this.state.employees.filter((c) => c.id !== cardId);
    this.setState({ employees });
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
            />
            <Table employees={filteredEmployees} onDelete={this.handleDelete} />
          </Scroll>
        </div>
      </FadeIn>
    );
  }
}

export default Employee;
