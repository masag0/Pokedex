import { connect } from 'react-redux';
import React from 'react';
import ItemDetail from './item_detail';
import { withRouter } from 'react-router-dom';

const mapStateToProps =  (state, ownProps) => ({
  item: state.entities.items[ownProps.match.params.itemId]
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);