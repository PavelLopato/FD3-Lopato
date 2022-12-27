var Filter = React.createClass ({

    displayName: "Filter",

    propTypes: {
        wordsList: React.PropTypes.array.isRequired,     
      },

    getInitialState () {
      return {
        isSorted: false,
        filterStr: '',
        wordsList: this.props.wordsList,
      }             
    },  

    sortChanged: function (eo) {
      this.setState ({isSorted:eo.target.checked}, this.processList)
    },

    filterChanged: function (eo) {
      this.setState ({filterStr:eo.target.value}, this.processList)
    },

    reset: function () {
      this.setState ({isSorted:false, filterStr:''}, this.processList)
    },

    processList: function () {
      let wordsList = this.props.wordsList.slice();
      if (this.state.filterStr)
        wordsList = wordsList.filter (w => w.includes(this.state.filterStr));
      if (this.state.isSorted)
        wordsList.sort();
      this.setState ({wordsList:wordsList});
    },

    render () { 
      return React.DOM.div ({},
        React.DOM.div({},
        React.DOM.input({type: 'checkbox',checked:this.state.isSorted, onClick:this.sortChanged}),
        React.DOM.input({type: "text", value:this.state.filterStr, onChange: this.filterChanged}),
        React.DOM.input({type: 'button', value: 'reset', onClick: this.reset}),
        ),
        React.DOM.textarea({value: this.state.wordsList.join('\n'), readOnly: true})
      )
         
    },
})