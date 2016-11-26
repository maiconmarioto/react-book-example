import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class BookDetail extends Component {
   render() {
      if (!this.props.book) {
         return (
            <h4>Select a book</h4>
         )
      }
      return (
         <div>
            <h4>Details for: </h4>
            <div>Title: {this.props.book.title}</div>
            <div>Page: {this.props.book.page}</div>
         </div>
      );
   };
}

function mapStateToProps(state) {
   return  {
      book: state.activeBook
   }
}

export default connect(mapStateToProps)(BookDetail);
