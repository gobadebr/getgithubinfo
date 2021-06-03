import React, { Fragment } from "react";

// Styling
import { DivStyle,LabelStyle,InputStyle } from "./SearchBoxStyle";

const SearchBox = ({ onInputChange }) => {
  return (
    <Fragment>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <DivStyle>
          <LabelStyle htmlFor="user">Search User</LabelStyle>
          <InputStyle id="user" type="search" placeholder="Enter username" name="user" onChange={onInputChange} />
        </DivStyle>
      </form>
    </Fragment>
  );
};

export default SearchBox;
