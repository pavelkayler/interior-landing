import { useMemo, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./contactModal.css";

const ContactModal = ({ show, onHide }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const isValid = useMemo(() => {
    const c = contact.trim();
    return c.length >= 3;
  }, [contact]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    console.log({ name: name.trim(), contact: contact.trim(), message: message.trim() });
    onHide();
    setName("");
    setContact("");
    setMessage("");
  };

  return (
    <Modal show={show} onHide={onHide} centered contentClassName="consultModal" backdropClassName="consultModal__backdrop">
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title className="consultModal__title">Обсудить проект</Modal.Title>
      </Modal.Header>

      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <p className="consultModal__text">
            Оставьте контакт — я свяжусь и уточню задачу, стиль, бюджет и сроки.
          </p>

          <Form.Group className="mb-3">
            <Form.Label className="consultModal__label">Имя</Form.Label>
            <Form.Control
              className="consultModal__control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Как к вам обращаться"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="consultModal__label">Телефон / Telegram</Form.Label>
            <Form.Control
              className="consultModal__control"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="+7... или @username"
              isInvalid={!isValid && contact.length > 0}
              required
            />
            <Form.Control.Feedback type="invalid">
              Укажите контакт (минимум 3 символа).
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label className="consultModal__label">Сообщение (необязательно)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="consultModal__control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Например: 2-комн квартира, 54 м², бюджет и сроки"
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-light" className="consultModal__btn" onClick={onHide}>
            Отмена
          </Button>
          <Button variant="light" className="consultModal__btn" type="submit" disabled={!isValid}>
            Отправить
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ContactModal;
