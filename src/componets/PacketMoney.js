import React, { Component } from 'react';
import { connect } from 'react-redux';

class PacketMoney extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-12">
            <h3 className="text-center">You Have <span className="label label-success" >{this.props.packetMoney}</span> To Spend In Grocery</h3>
            <hr />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        packetMoney: state.packetMoney
    }
}

export default connect(mapStateToProps, null)(PacketMoney);