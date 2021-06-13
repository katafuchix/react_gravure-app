import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Subscription } from 'rxjs';
import AppDataStore from '../../stores/AppDataStore';
import { IAppUiLocker } from '../../stores/IAppUiLocker';
import * as common from './BaseComponent';

interface IProps extends common.IProps {
  onClick: any;
  type?: any;
  variant?: any;
};

interface IState extends common.IState {
  loading: boolean;
}

class ActionButton extends common.BaseComponent<IProps, IState> {
  private subscription: Subscription | null = null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.subscription = this.props.globalStore.on('uiLocker').subscribe((uiLocker: IAppUiLocker) => {
      this.setState({ loading: uiLocker.isLocked });
    });
  }

  componentWillUnmount() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
    }
  }

  render() {
    return (
      <Button variant={this.props.variant} type={this.props.type} disabled={this.state.loading} onClick={this.props.onClick}>
        { this.state.loading && (
          <Spinner
            className="mr-2"
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"/>
        )}
        {this.props.children}
      </Button>
    );
  }
}

export default AppDataStore.withStores(ActionButton);
