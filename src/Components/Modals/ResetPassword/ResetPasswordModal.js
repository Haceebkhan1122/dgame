import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {
  useTranslation,
  withTranslation,
  Trans,
  TFunction,
} from "react-i18next";

import i18next from "i18next";

function ResetPasswordModal(props) {
  const { t } = useTranslation();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="hk_assets_modal modal_light_bg hk_bottom_border_set"
    >
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <Row>
          <Col md={12}>
            <div className="login_right for_single_type_modal">
              <div className="login_right_content">
                <h1 className="primary_heading">
                  {" "}
                  {i18next.t("resetpassword_modal_head")}
                </h1>
                <h5 className="after_form_heading_content">
                  {i18next.t("resetpassword_modal_para")}
                </h5>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  className="hk_custom_style"
                >
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder={t("resetpassword_modal_password")}
                      required
                      defaultValue=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a Valid Password
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder={t("resetpassword_modal_confirm_password")}
                      required
                      defaultValue=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a Valid Password
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button
                    className="primary hk_btn_with_bg_theme cheap_yellow w-100"
                    type="submit"
                  >
                    {i18next.t("resetpassword_modal_nextbtn")}
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default ResetPasswordModal;
