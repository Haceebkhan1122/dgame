import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

import PriceIcon from "../../assets/img/taunt.png";
import Filter from "../../assets/img/filter.png";

import ProfileUser from "../../assets/img/gamecard2.png";
import MatchHistory from "./MatchHistory";
import InventoryCards from "./InventoryCards";
import Nav from "react-bootstrap/Nav";
import PRIZEPOOL from "../../assets/img/price_icon.png";
const GameCenter = () => {
  let active = 2;
  let items = [];

  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      labels: {
        style: {
          color: "#163f5c",
        },
      },
      gridLineColor: "#163f5c",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      accessibility: {
        description: "",
      },
    },
    yAxis: {
      title: {
        text: "",
      },
      labels: {
        style: {
          color: "#163f5c",
        },
      },
      gridLineColor: "#163f5c",
    },

    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "",
        data: [
          5.2,
          5.7,
          8.7,
          13.9,
          18.2,
          21.4,
          25.0,
          {
            y: 26.4,
            accessibility: {
              description: "",
            },
          },
          22.8,
          17.5,
          12.1,
          7.6,
        ],
        color: "#4fd322",
      },
      {
        name: "",
        data: [
          {
            y: 1.5,
            accessibility: {
              description: "",
            },
          },
          1.6,
          3.3,
          5.9,
          10.5,
          13.5,
          14.5,
          14.4,
          11.5,
          8.7,
          4.7,
          2.6,
        ],
        color: "#ffd51f",
      },
    ],
  };
  return (
    <div className="category_holder player_profile game_center  about_page leaderboard faqs ar_ver_gamecenter">
      <div className="page_header category_page gameee">
        <Container fluid>
          <Row>
            <Col md={12}>
              <div className="d-flex align-items-end justify-content-between">
                <div className="player_profile_info">
                  <h1 className="primary_heading">John Adler's Game Center</h1>
                  <div className="d-flex">
                    <div className="code_copy">
                      <label>0xe4d....d970</label>
                    </div>
                    <div className="code_copy">
                      <i class="fa-solid fa-clone"></i>
                    </div>
                  </div>
                </div>
                <div className="player_profile_info center_hk_for_screen">
                  <div className="profile_img">
                    <img src={ProfileUser} alt="Profile-User" />
                  </div>
                </div>
                <div className="player_profile_info">
                  <div className="profile_setting">
                    <a href="JavaScript:void(0);">
                      <span>
                        <i class="fa-solid fa-gear"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-5 bg_dark">
        <Container fluid className="mx-5">
          <Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey="stats">
              <Row className="mb-5">
                <Col sm={2}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="stats">
                        <span>TOURNAMENT STATS</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="inventory">
                        <span>INVENTORY</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="earnings">
                        <span>EARNINGS</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="history">
                        <span>MY TOURNAMENTS</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={10}>
                  <Tab.Content>
                    <Tab.Pane eventKey="stats">
                      <div className="player_profile_info">
                        <h1 className="primary_heading">Tournament Stats</h1>
                        <div className="stats_bg">
                          <div className="d-flex align-items-center generic_heading">
                            <div className="statics">
                              <h4 className="sub_heading">CREATED </h4>
                              <h5>15</h5>
                            </div>
                            <div className="statics">
                              <h4 className="sub_heading">FINISH</h4>
                              <h5>9</h5>
                            </div>
                            <div className="statics">
                              <h4 className="sub_heading">ONGOING</h4>
                              <h5>6</h5>
                            </div>
                            <div className="statics">
                              <h4 className="sub_heading">TOTAL PRIZE POOL</h4>
                              <h5>
                                <span className="prizepool">
                                  <img src={PRIZEPOOL} />
                                </span>
                                1500
                              </h5>
                            </div>
                            <div className="statics">
                              <h4 className="sub_heading">
                                EARNING PERCENTAGE
                              </h4>
                              <h5>75%</h5>
                            </div>
                            {/* <div className="statics">
                              <h4 className="sub_heading">ACHIEVEMENT</h4>
                              <h5>Pro Champion</h5>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="inventory">
                      {" "}
                      <Col md={12}>
                        <div className="mini-info mt-0">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="heading_viewAll">
                              <h3>Inventory</h3>
                            </div>
                            <div className="heading_viewAll">
                              <Link to="/inventory">View All</Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <InventoryCards />
                    </Tab.Pane>
                    <Tab.Pane eventKey="earnings">
                      {" "}
                      <div className="player_profile_info">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="earning_inner">
                            <h1 className="primary_heading">Earnings</h1>
                          </div>
                          <div className="earning_inner profile_setting_left">
                            <Form.Group className="mb-3">
                              <Form.Select id="filter">
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Yearly</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                        </div>
                        <div className="chart_bg hk_chart_for_gc">
                          <Row>
                            <Col md={8}>
                              <div className="earning_header">
                                <p className="primary_paragraph">
                                  TOTAL EARNINGS
                                </p>
                                <div className="d-flex align-items-center">
                                  <div className="inner_chart_info">
                                    <img src={PriceIcon} alt="Price-Icon" />
                                  </div>
                                  <div className="inner_chart_info">
                                    <h5>600 USDT</h5>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col md={4}>
                              <div className="d-flex align-items-center justify-content-around dot_color_style">
                                <div className="earning_right">
                                  <p className="primary_paragraph">AVATAR</p>
                                  <div className="d-flex align-items-center">
                                    <div className="inner_chart_info">
                                      <img src={PriceIcon} alt="Price-Icon" />
                                    </div>
                                    <div className="inner_chart_info">
                                      <h5>300 USDT</h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="earning_right">
                                  <p className="primary_paragraph">
                                    TOURNAMENT
                                  </p>
                                  <div className="d-flex align-items-center">
                                    <div className="inner_chart_info">
                                      <img src={PriceIcon} alt="Price-Icon" />
                                    </div>
                                    <div className="inner_chart_info">
                                      <h5>300 USDT</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>

                          <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                          />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="history">
                      {" "}
                      <div className="player_profile_info">
                        <div className="earning_inner">
                          <h1 className="primary_heading mb-1">
                            My Tournaments
                          </h1>
                        </div>
                        <Row className="align-items-center">
                          <Col md={10}>
                            <div className="hk_main_filter_area game-center-filter">
                              <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">
                                  <i class="fa-solid fa-magnifying-glass"></i>
                                </InputGroup.Text>
                                <Form.Control
                                  placeholder="Search"
                                  aria-describedby="basic-addon1"
                                />
                                {
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
                                      <Dropdown.Item active>
                                        By Name
                                      </Dropdown.Item>
                                      <Dropdown.Item>By Category</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                }
                              </InputGroup>
                            </div>
                          </Col>
                          <Col md={2}>
                            <div className="create_btn_handler text-end">
                              <Link
                                to="/create-tournament"
                                className="primary creat_game_center_btn"
                              >
                                CREATE
                              </Link>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <Table
                        striped
                        responsive="sm"
                        variant="dark hk_table_full mt-0 hk_history generic_heading"
                      >
                        <thead>
                          <tr>
                            <th>
                              <p className="primary_paragraph">TOURNAMENTS</p>
                            </th>
                            <th colSpan={2}>
                              <p className="primary_paragraph">RULES</p>
                            </th>
                            <th>
                              <p className="primary_paragraph">ENTRY FEE</p>
                            </th>
                            <th>
                              <p className="primary_paragraph">PRIZEPOOL</p>
                            </th>
                            <th colSpan={2}>
                              <p className="primary_paragraph">PLAYERS</p>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <MatchHistory />
                        </tbody>
                      </Table>
                      <Col md={12}>
                        <Pagination className="hk_category_pagination align-items-center justify-content-center mt-3">
                          <Pagination.Prev className="prev_next" />
                          <Pagination>{items}</Pagination>
                          <Pagination.Next className="prev_next" />
                        </Pagination>
                      </Col>
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

export default GameCenter;
