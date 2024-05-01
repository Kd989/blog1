import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Header = (props) => {
  // console.log(props,"props")
  return (
    <div className="border-bottom lh-1 py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4">
          <a href="/" className="link-secondary">
            Subscribe
          </a>
        </div>
        <div className="col-4 text-center">
          <a
            href="/"
            className="blog-header-logo text-body-emphasis text-decoration-none"
          >
            Large
          </a>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <a href="/" className="link-secondary">
            <SearchIcon />
          </a>
          <span className="btn btn-sm btn-outline-secondary" onClick={()=>{props.myfunction(true)}}>
            Sign-up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
