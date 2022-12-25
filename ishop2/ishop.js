var Ishop = React.createClass ({

    displayName: "ishop",

    propTypes: {
      products:React.PropTypes.array.isRequired         
    },

    getInitialState: function() {
      return {products: this.props.products,
        selectedProductCode: '',
      };
    },

    selectedProduct: function(code) {
      this.setState ({selectedProductCode:code});
    },
    deleteProduct: function(code) {
      const newProducts = this.state.products.filter (v => v.code!== code);
      this.setState ({products: newProducts});
    },

    render: function () {
  
      var productsCode=this.state.products.map( v =>
        React.createElement(Product, {key:v.code, code:v.code, 
          nam:v.nam, url:v.url, price:v.price,
          remainder:v.remainder, isSelected: v.code === this.state.selectedProductCode,
          cbDeleteProduct: this.deleteProduct,
          cbSelectedProduct: this.selectedProduct,

        })
      );

        return React.DOM.table (
            {className:"ishop"},
            React.DOM.tbody ({className: "Products"},
            React.DOM.tr(null,
                React.DOM.th({className: 'NAM'}, 'название товара'),
                React.DOM.th({className: 'PRICE'}, 'цена'),
                React.DOM.th({className: 'IMGS'}, 'изображение товара'),
                React.DOM.th({className: 'REMAINDER'}, 'остаток на складе'),
                React.DOM.th({className: 'DELETE'}, 'удалить')),
            productsCode),
          
        );
    },

})
