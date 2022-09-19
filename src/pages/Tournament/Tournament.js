import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";

import OngoingTournamentDetails from "./OngoingTournaments/OngoingTournamentDetails";
import LiveTournamentDetails from "./LiveTournaments/LiveTournamentDetails";
import Filter from "../../assets/img/filter.png";
import PastTournamentDetails from "./PastTournaments/PastTournamentDetails";

const Tournament = () => {
  let active = 2;
  let items = [];

  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="about_page leaderboard faqs tournaments_page ">
      <div className="page_header">
        <Container>
          <Row>
            <Col md={12}>
              <div className="page_main_info">
                <h4 className="sub_heading">TAKE PART IN DOMINO TOURNAMENTS</h4>
                <h1 className="primary_heading">Tournaments</h1>
              </div>
            </Col>
            <Tab.Container id="left-tabs-example" defaultActiveKey="ongoing">
              <Row className="mb-5">
                <Col sm={12}>
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="ongoing" className="text-uppercase">Open</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="live" className="text-uppercase">LIVE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="past" className="text-uppercase">PAST</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col md={12}>
                  <div className="hk_main_filter_area mb_tournament_table">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Search"
                        aria-describedby="basic-addon1"
                      />
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-button-dark-example1"
                          variant="secondary"
                        >
                          <span>
                            <img src={Filter} alt="Filter" />
                          </span>{" "}
                          Filter
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                          <Dropdown.Item active>by Name</Dropdown.Item>
                          <Dropdown.Item>By Category</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-button-dark-example1"
                          variant="secondary"
                        >
                          Tournament Type
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                          <Dropdown.Item active>Action</Dropdown.Item>
                          <Dropdown.Item>A to Z</Dropdown.Item>
                          <Dropdown.Item>Assending</Dropdown.Item>
                          <Dropdown.Item>Dessending</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </InputGroup>
                  </div>
                </Col>
                <Col sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="ongoing">
                      <Table
                        striped
                        responsive="sm"
                        variant="dark hk_table_full"
                      >
                        <thead>
                          <tr>
                            <th colSpan={2}>
                              <p className="primary_paragraph">TOURNAMENTS</p>
                            </th>
                            <th>
                              <p className="primary_paragraph">RULES</p>
                            </th>
                            <th>
                              <p className="primary_paragraph">
                                TOURNAMENT TYPE
                              </p>
                            </th>
                            <th>
                              <p className="primary_paragraph">ENTRY FEE</p>
                            </th>
                            <th>
                              <p className="primary_paragraph">PRIZEPOOL</p>
                            </th>
                            <th>
                              <p className="primary_paragraph">PLAYERS</p>
                            </th>
                            <th>
                              <p className="primary_paragraph"></p>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="td_h_table">
                          <OngoingTournamentDetails />
                        </tbody>
                      </Table>
                      <Row>
                        <Col md={12}>
                          <Pagination className="hk_category_pagination align-items-center justify-content-center mt-5">
                            <Pagination.Prev className="prev_next" />
                            <Pagination>{items}</Pagination>
                            <Pagination.Next className="prev_next" />
                          </Pagination>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="live">
                      {" "}
                      <Table
                        striped
                        responsive="sm"
                        variant="dark hk_table_full"
                      >
                        <thead>
                          <tr>
                            <th colSpan={2}>
                              <p className="primary_paragraph">TOURNAMENTS</p>
                            </th>
                            <th>
                              <p className="primary_paragraph">RULES</p>
                            </th>
                            <th>
                              <p className="primary_paragraph">
                                TOURNAMENT TYPE
                              </p>
                            </th>
                            <th>
                              <p className="primary_paragraph">ENTRY FEE</p>
                            </th>
                            <th>
                              <p className="primary_paragraph">PRIZEPOOL</p>
                            </th>
                            <th>
                              <p className="primary_paragraph">PLAYERS</p>
                            </th>
                            <th>
                              <p className="primary_paragraph"></p>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="td_h_table">
                          <LiveTournamentDetails />
                        </tbody>
                      </Table>
                      <Row>
                        <Col md={12}>
                          <Pagination className="hk_category_pagination align-items-center justify-content-center mt-5">
                            <Pagination.Prev className="prev_next" />
                            <Pagination>{items}</Pagination>
                            <Pagination.Next className="prev_next" />
                          </Pagination>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="past">
                      {" "}
                      <Table
                        striped
                        responsive="sm"
                        variant="dark hk_table_full"
                      >
                        <thead>
                          <tr>
                            <th colSpan={2}>
                              <p className="primary_paragraph">TOURNAMENTS</p>
                            </th>
                            <th>
                              <p className="primary_paragraph">RULES</p>
                            </th>
                            <th>
                              <p className="primary_paragraph">
                                TOURNAMENT TYPE
                              </p>
                            </th>
                            <th>
                              <p className="primary_paragraph">ENTRY FEE</p>
                            </th>
                            <th>
                              <p className="primary_paragraph">PRIZEPOOL</p>
                            </th>
                            <th>
                              <p className="primary_paragraph">PLAYERS</p>
                            </th>
                            <th>
                              <p className="primary_paragraph"></p>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="td_h_table">
                          <PastTournamentDetails />
                        </tbody>
                      </Table>
                      <Row>
                        <Col md={12}>
                          <Pagination className="hk_category_pagination align-items-center justify-content-center mt-5">
                            <Pagination.Prev className="prev_next" />
                            <Pagination>{items}</Pagination>
                            <Pagination.Next className="prev_next" />
                          </Pagination>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Tournament;
