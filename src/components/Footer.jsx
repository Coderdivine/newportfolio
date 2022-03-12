import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };
  const Dates_=()=>{
    const date_year = new Date().toISOString().substring(0,4);
    return date_year;
  }

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        >
         Ezechukwu Divine
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
           Powered by Alpha02 {""}
           &copy; copyright {Dates_()}| All right reserved.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
