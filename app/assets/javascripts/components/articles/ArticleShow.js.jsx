window.ArticleShow = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div>
        <p><strong>Title:</strong> { this.props.title }</p>
        <p><strong>Text:</strong> { this.props.text }</p>
      </div>
    )
  }
});
