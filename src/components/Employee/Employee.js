import React, { Component } from "react";
import CardList from "../Card/CardList";
import SearchBox from "../SearchBox/SearchBox";
// import Scroll from "../Scroll/Scroll";
import NewEmployee from "../Employee/NewEmployee";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import Spinner from "react-bootstrap/Spinner";
import FadeIn from "react-fade-in";
import axios from "axios";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      currentPage: 1,
      resultsPerPage: 25,
      holder: [],
      value: "",
    };
  }

  componentDidMount = async () => {
    axios.get(process.env.REACT_APP_API_URL).then((res) => {
      this.setState({
        employees: res.data.recordset,
        holder: res.data.recordset,
      });
    });
  };

  onSearchChange = (event) => {
    let { value } = event.target;
    this.setState({ value }, () => {
      //running this after setting the value in state because of async
      var updatedList = this.state.holder;
      updatedList = updatedList.filter((employee) => {
        //Add any parameters here for the search filter
        const searchFilter =
          employee.empFirstNm +
          "|" +
          employee.empLastNm +
          (!!employee.empTaskName ? "|" + employee.empTaskName : "");
        return (
          searchFilter.toLowerCase().search(this.state.value.toLowerCase()) !==
          -1
        );
      });
      this.setState({ employees: updatedList, currentPage: 1 });
    });
  };

  handleDelete = (cardId) => {
    const employees = this.state.employees.filter((c) => c.empId !== cardId);
    this.setState({ employees });
  };

  //change page
  onPaginateChange = (pageNumber) => {
    if (pageNumber === "previous")
      this.setState({ currentPage: this.state.currentPage - 1 });
    else if (pageNumber === "next")
      this.setState({ currentPage: this.state.currentPage + 1 });
    else this.setState({ currentPage: pageNumber });
  };

  render() {
    const { employees, currentPage, resultsPerPage, holder } = this.state;
    const { onRouteChange } = this.props;

    //Get current employees
    const indexOfLastEmployee = currentPage * resultsPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - resultsPerPage;
    const filteredEmployees = employees.slice(
      indexOfFirstEmployee,
      indexOfLastEmployee
    );

    return !holder.length ? (
      <FadeIn>
        <div className="tc">
          <h1>Loading</h1>
          <Spinner animation="border" variant="danger" />
        </div>
      </FadeIn>
    ) : !employees.length ? (
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
              <SearchBox
                onSearchChange={this.onSearchChange}
                value={this.state.value}
              />
            </div>
          </div>
          <h1>No Results Found</h1>
        </div>
      </FadeIn>
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
              <SearchBox
                onSearchChange={this.onSearchChange}
                value={this.state.value}
              />
            </div>
          </div>

          {/* <Scroll> */}
          <CardList
            employees={filteredEmployees}
            onDelete={this.handleDelete}
            onRouteChange={onRouteChange}
          />
          <Table employees={filteredEmployees} onRouteChange={onRouteChange} />

          <Pagination
            resultsPerPage={resultsPerPage}
            totalResults={employees.length}
            onPaginateChange={this.onPaginateChange}
            currentPage={currentPage}
          />
          {/* </Scroll> */}
        </div>
      </FadeIn>
    );
  }
}

export default Employee;
