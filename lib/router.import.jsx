import {ContainerApp} from 'client/index';
import {MainLayout} from 'client/MainLayout';

FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {
      content: ContainerApp
    });
  }
});