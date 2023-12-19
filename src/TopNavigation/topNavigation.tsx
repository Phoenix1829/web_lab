import "./topNavigation.css";

export default function TopNavigation() {
  return (
    <div className="topnavigation">
      <div className="navbar">
        <div className="topnavigationtext" style={{ opacity: 1, fontWeight: "700" }}>
          Home
        </div>
        <div className="topnavigationtext">Find a doctor</div>
        <div className="topnavigationtext">Apps</div>
        <div className="topnavigationtext">Testimonials</div>
        <div className="topnavigationtext">About us</div>
      </div>
    </div>
  );
}
