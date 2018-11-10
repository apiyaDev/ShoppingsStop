import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeGroceryById, addPacketMoney } from '../actions';

class ShoppingBag extends Component {
    render() {
        return (
        <React.Fragment>
            <div className="col-md-4 bg-two">
                <h2 className="text-center">ShoppingBag Item</h2>
                <ul className="list-group">
                    {
                        !this.props.ShoppingBag.length > 0 ?
                            <li className="list-group-item" >Theres No Shopping Bag</li>
                        :    
                        this.props.ShoppingBag.map((item) => {
                        return (
                            <li key={item.id}
                                onClick={() => {
                                    this.props.removeGroceryById(item.id);
                                    this.props.addPacketMoney(item.id)
                                }}
                                className="list-group-item">
                                {item.name} -
                        <span className="label label-info">$ {item.cost}</span> -
                        <span className="label label-warning">{item.calories} kcal</span> -
                        <span className="label label-primary">{item.weight} mg</span>
                        </li>
                            )
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ShoppingBag: state.shoppingBag
    }
}

export default connect(mapStateToProps, { removeGroceryById, addPacketMoney })(ShoppingBag);