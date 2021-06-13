import React from 'react';
import * as common from './BaseComponent';
import { Form } from 'react-bootstrap';
import { ValidationErrorConverter } from '../../converters/ValidationErrorConverter';
import AppDataStore from '../../stores/AppDataStore';

interface IProps extends common.IProps {
  errors: string[];
};

class ValidationErrorFeedback extends common.BaseComponent<IProps, common.IState> {
  private translateErrorCodes(codes: string[]): string {
    return ValidationErrorConverter.convert(codes);
  }

  render() {
    const message = this.translateErrorCodes(this.props.errors);
    return (
      <React.Fragment>
        {this.props.errors && (
          <Form.Control.Feedback type="invalid">{message}</Form.Control.Feedback>
        )}
      </React.Fragment>
    );
  }
}

export default AppDataStore.withStores(ValidationErrorFeedback);
