import React from "react";
import { connect } from "react-redux";
import CardContainer from "../../components/card-container/card-container";
import ButtonStyled from "../../components/styled-button/styled-button";
import { Increment, Decrement } from "../../redux/saga/sagas.actions";
import { Body, Footer } from "./sagas.styles";
class SagasPage extends React.Component {
  render() {
    const { value, Increment, Decrement } = this.props;
    return (
      <CardContainer>
        <Body>{value}</Body>
        <Footer>
          <ButtonStyled description="decrement" onClick={Decrement} />
          <ButtonStyled description="Increment" onClick={Increment} />
        </Footer>
      </CardContainer>
    );
  }
}

const mapStateToProps = state => ({
  value: state.sagas.value
});

const mapDispatchToProps = dispatch => ({
  Increment: () => dispatch(Increment()),
  Decrement: () => dispatch(Decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(SagasPage);
