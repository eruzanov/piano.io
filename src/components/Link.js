import React from 'react';
import {connect} from 'react-redux';
import queryString from 'query-string';

const Link = ({queryParams, to, className, children}) => {
  const href = queryString.stringify(Object.assign({}, {search: queryParams.search}, to));
  return (
    <a href={`#${href}`} className={className}>{children}</a>
  );
};

const mapStateToProps = state => ({queryParams: state.queryParams});

export default connect(mapStateToProps)(Link);
