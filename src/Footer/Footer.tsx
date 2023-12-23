import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerPointsTop" />
      <div className="footerPointsBottom" />
      <div className="footerBackground" />
      <div className="footerText">
        <div className="footerHeaders">
          <div className="footerCircle" />
          <span className="T">T</span>
          <span className="footerHead">HealthCare</span>

          <span className="SubHead" style={{ marginLeft: -50, lineHeight: "28px", top: "10px", width: "49%" }}>
            HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone
            <br />
            <br />
            (c)HealthCare PTY LTD 2023. All rights reserved
          </span>
        </div>

        <div className="footerHeaders">
          <span className="footerHead">Help</span>
          <span className="SubHead">
            Help center
            <br />
            Contact support
            <br />
            Instructions
            <br />
            How it works
          </span>
        </div>

        <div className="footerHeaders">
          <span className="footerHead">Company</span>
          <span className="SubHead">
            About
            <br />
            Testimonials
            <br />
            Find a doctor
            <br />
            Apps
          </span>
        </div>

        <div className="footerHeaders">
          <span className="footerHead">Region</span>
          <span className="SubHead">
            Indonesia
            <br />
            Singapore
            <br />
            Hongkong
            <br />
            Canada
          </span>
        </div>
      </div>
    </div>
  );
}
