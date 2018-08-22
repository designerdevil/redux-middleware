import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';
import { showMessage } from '../actions';

const MessageBox = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  padding: 40px;
  text-align: center;
  background-color: paleVioletRed;
  color: linen;
  border-radius: 20px;
  width: 400px;
`;

const Message = styled.span`
  font-weight: 700;
  color: maroon;
`;

class AnotherPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showMessage('2');
  }

  render() {
    const pageName = this.props.message && this.props.message.pageName;
    return (
      <div className="AnotherPage">
        <Header />
        <div className="container">
          <MessageBox className="col-sm-8 col-sm-offset-2">
            <Message> {pageName}</Message>
          </MessageBox>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { test, message } = state;
  return {
    test,
    message
  };
}

AnotherPage.propTypes = {
  test: PropTypes.shape({
    message: PropTypes.string,
  }),
};

AnotherPage.defaultProps = {
  test: null,
  message: null,
};

export default connect(mapStateToProps, { showMessage })(AnotherPage);
