var ishop = React.createClass ({

    displayName: "ishop",

    propTypes: {
        products: React.PropTypes.array.isRequired,     
      },

    render: function () {
  
      var productsCode=this.props.products.map( v =>
        React.DOM.tr({key:v.code,className:'Product'},
          React.DOM.td({className:'nam'},v.nam),
          React.DOM.td({className:'price'},v.price),
          React.DOM.td({className: 'imgs'},
            React.DOM.img({src: v.url, alt: 'картинка'},)),
          React.DOM.td({className:'remainder'},v.remainder),  
        )
      );

        return React.DOM.table (
            {className:"ishop"},
            React.DOM.tbody ({className: "Products"},
            React.DOM.tr(null,
                React.DOM.th({className: 'NAM'}, 'название товара'),
                React.DOM.th({className: 'PRICE'}, 'цена'),
                React.DOM.th({className: 'IMGS'}, 'изображение товара'),
                React.DOM.th({className: 'REMAINDER'}, 'остаток на складе'), ),
            productsCode),
          
        );
    },

})