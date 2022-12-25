var Product = React.createClass ({

    displayName: "Product",

    propTypes: {
        code: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        nam: React.PropTypes.string.isRequired,
        remainder: React.PropTypes.number.isRequired, 
        cbSelectedProduct: React.PropTypes.func.isRequired,
        cbDeleteProduct: React.PropTypes.func.isRequired,
        isSelected: React.PropTypes.bool,
      },

  

    deleteMe: function (eo) {
        eo.stopPropagation ();
        this.props.cbDeleteProduct (this.props.code);
      
    },

    selectMe: function () {
       this.props.cbSelectedProduct (this.props.code);
    },

    render: function () {
  
      return React.DOM.tr({key:this.props.code, className:'Product', onClick:this.selectMe, 
        style:{backgroundColor:(this.props.isSelected)?'red':'white'}},
          React.DOM.td({className:'nam'},this.props.nam),
          React.DOM.td({className:'price'},this.props.price),
          React.DOM.td({className: 'imgs'},
            React.DOM.img({src: this.props.url, alt: 'картинка'},)),
          React.DOM.td({className:'remainder'},this.props.remainder),
          React.DOM.td({className: 'button'}, 
            React.DOM.input( {type:'button', value:'delete', onClick:this.deleteMe}),
          )  
        );


    },

})