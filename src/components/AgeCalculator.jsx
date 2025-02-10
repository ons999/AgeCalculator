import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "./neon.css"; // Make sure this file contains your Cyberpunk CSS

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) return;
    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    // If days are negative, borrow days from the previous month.
    if (days < 0) {
      months--; // Decrease month count
      const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += prevMonthDays;
    }

    // If months are negative after adjusting days, borrow months from the year.
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <>
    <Container className="cyber-container">
      <h2 className="cyber-text">Age Calculator</h2>
      <Form>
        <Form.Group>
          <Form.Label className="cyber-label">Select Birth Date:</Form.Label>
          <div className="input-margin">
          {/* Helper text for format guidance */}
          <small style={{ color: "#2afc98" }}>Format: mm/dd/yyyy</small>
          <Form.Control
            type="date"
            className="cyber-input"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
          </div>
        </Form.Group>
        <Button className="cyber-button" onClick={calculateAge}>
          Calculate Age
        </Button>
      </Form>

      {age !== null && (
        <Alert className="cyber-alert">
          Your age is {age.years} years, {age.months} months, and {age.days} days.
          <div className="scan-line"></div>
        </Alert>
      )}
    </Container>
      
      {/* Footer Section */}
      <footer className="cyber-footer">
  <p>© {new Date().getFullYear()} Age Calculator. All rights reserved.</p>
</footer>

      </>
  );
};

export default AgeCalculator;
