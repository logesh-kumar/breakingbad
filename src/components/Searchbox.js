import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchBoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const SearchBoxStyled = styled.input`
  height: 38px;
  width: 40%;
  margin-top: 30px;
  border-radius: 4px;
  padding: 0 4px;
  font-size: 16px;
  color: #666;
`;

export default function Searchbox({ onChange, ...rest }) {
  return (
    <SearchBoxWrap>
      <SearchBoxStyled onChange={onChange} {...rest} />
    </SearchBoxWrap>
  );
}

Searchbox.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
