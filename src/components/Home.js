import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';
import { fetchTest, showMessage } from '../actions';

const MessageBox = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  padding: 40px;
  text-align: center;
  background-color: linen;
  color: paleVioletRed;
  border-radius: 20px;
  width: 400px;
`;

const Message = styled.span`
  font-weight: 700;
  color: maroon;
`;

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTest();
    this.props.showMessage('1');
  }

  render() {
    const { abc } = this.props.test;

    return (
      <div className="Home">
        <Header />
        <div className="container">
          <MessageBox className="col-sm-8 col-sm-offset-2">
            <Message>{this.props.message && this.props.message.pageNo}</Message>
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

Home.propTypes = {
  fetchTest: PropTypes.func.isRequired,
  test: PropTypes.shape({
    message: PropTypes.string,
  }),
};

Home.defaultProps = {
  test: null,
  message: null
};

export default connect(mapStateToProps, { fetchTest, showMessage })(Home);