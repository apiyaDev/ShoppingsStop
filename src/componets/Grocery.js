import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addGroceryById, removePacketMoney } from '../actions';

class Grocery extends Component {
    render() {
    return (
        <React.Fragment>
            <div className="col-md-4 bg-one">
                <h2 className="text-center">Grocery Item</h2>
                <ul className="list-group">
                {
                    !this.props.grocery.length > 0 ?  
                        <li className="list-group-item" >Theres No Grecery Item</li>
                    :
                        this.props.grocery.map((item) => {
                            return (
                                <li key={item.id}
                                    onClick={() => 
                                        {this.props.addGroceryById(item.id);
                                        this.props.removePacketMoney(item.id)}
                                    }
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
        grocery: state.grocery
    }
}

export default connect(mapStateToProps, {addGroceryById, removePacketMoney})(Grocery);