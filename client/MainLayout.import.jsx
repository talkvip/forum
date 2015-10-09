import {Well} from '../../lib/reactbootstrap';

let mainLayout = React.createClass({
  render() {
    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <div className="container todoWrapper">
            <Well bsStyle="success">Todo powerd by{' '}
              <a href="https://www.meteor.com/">Meteor</a>{' '}
              + <a href="https://facebook.github.io/react/">React</a>{' '}
              + <a href="http://rackt.github.io/redux/index.html">Redux</a>
            </Well>
            {this.props.content}
          </div>
        </body>
      </html>
    );
  }
});

export const MainLayout = mainLayout;