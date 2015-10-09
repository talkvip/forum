import {ContainerApp} from 'client/index';
import {MainLayout} from 'client/MainLayout';

FlowRouter.route('/', {
  subscriptions() {
    this.register('todos', Meteor.subscribe('todos'));
  },
  action() {
    console.log(ContainerApp);
    ReactLayout.render(MainLayout, {
      content: ContainerApp
    });
  }
});