import React from 'react';
import * as common from './BasePage';
import { withRouter } from 'react-router';
import { Subscription } from 'rxjs';
import { Alert } from 'react-bootstrap';
import { IAppNotification } from '../../stores/IAppNotification';
import AppDataStore from '../../stores/AppDataStore';

interface IState extends common.IState {
  notifications: Notification[];
}

class SystemNotification extends common.BasePage<common.IProps<common.IParams>, IState> {
  private _subscription?: Subscription;

  constructor(props: common.IProps<common.IParams>) {
    super(props);
    this.state = { notifications: [] };
  }

  componentDidMount() {
    const store = this.props.globalStore;
    const notifications = store.get('notifications')
    this.setState({ notifications: notifications.map((o) => new Notification(o)) });

    this._subscription = store.on('notifications').subscribe((notifications) => {
      this.setState({ notifications: notifications.map((o) => new Notification(o)) });
    });
  }

  componentWillUnmount() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  clear() {
    this.notifier.clear();
  }

  render() {
    return (
      <>
        {this.state.notifications.map((notification, i) => (
          <Alert key={`system_notification_${i}`} variant={notification.variant} onClose={() => this.clear()} dismissible>{notification.message}</Alert>
        ))}
      </>
    );
  }
}

class Notification implements IAppNotification {
  type: 'error' | 'info' | 'warn';
  message: string;

  constructor(original: IAppNotification) {
    this.type = original.type;
    this.message = original.message;
  }

  get variant(): string {
    switch (this.type) {
      case 'warn':
        return 'warning';
      case 'error':
        return 'danger';
      default:
        return 'info';
    }
  }
}

export default withRouter(AppDataStore.withStores(SystemNotification));
