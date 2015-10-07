let mainLayout = React.createClass({
  render() {
    return (
      <div>
        <main>
          {this.props.content}
        </main>
      </div>
    );
  }
});

export const MainLayout = mainLayout;