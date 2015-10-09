import {Well, Button, ButtonGroup} from '../../lib/reactbootstrap';

let Footer = React.createClass({
  propTypes() {
    return {
      onFilterChange: React.PropTypes.func.isRequired,
      filter: React.PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
      ]).isRequired
    }
  },
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return (<Button className="btn btn-primary">{name}</Button>);
    }
    return (
      <Button href="#"
        onClick={e => {
          e.preventDefault();
          this.props.onFilterChange(filter)
        }}>
        {name}
        </Button>
    );
  },
  render() {
    return (
      <div className='display-control'>
        <ButtonGroup>
          {this.renderFilter('SHOW_ALL', '所有的')}
          {this.renderFilter('SHOW_COMPLETED', '已完成')}
          {this.renderFilter('SHOW_ACTIVE', '未完成')}
        </ButtonGroup>
      </div>
    );
  }
});

export default Footer;