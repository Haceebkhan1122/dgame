import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ReactFlagsSelect from "react-flags-select";

import ProfileAvatar from "../../assets/img/profileavatar.png";

const ProfileSetting = () => {
  const [selected, setSelected] = useState("GB");
  return (
    <div className="join_battle_form_section">
      <Container>
        <Row>
          <Col md={6}>
            <div className="profile_setting_left">
              <h1 className="primary_heading">Profile Settings</h1>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control type="date" placeholder="Enter date of birth" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledSelect">Gender</Form.Label>
                  <Form.Select id="selectGender">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledSelect">Country</Form.Label>
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                  />
                </Form.Group>
                <div className="d-flex align-items-center mt-4">
                  <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg only_white_border">
                    CANCEL
                  </Button>
                  <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg">
                    SAVE
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col md={6}>
            <div className="profile_setting_right">
              <img src={ProfileAvatar} alt="User-Profile" />
              <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg change_avatar">
                CHANGE AVATAR
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileSetting;
