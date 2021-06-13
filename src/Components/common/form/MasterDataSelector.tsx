import React from 'react';
import { Form } from 'react-bootstrap';
import { IOption } from '../../../resources/IOption';
import { IOptionItem } from '../../../resources/IOptionItem';
import AppDataStore from '../../../stores/AppDataStore';
import * as common from '../BaseComponent';
import ValidationErrorFeedback from '../ValidationErrorFeedback';

interface IProps extends common.IProps {
  property: string;
  masterDataKey: string;
  value?: number;
  errors?: any;
  onChanged: (e: any) => void;
}

interface IState extends common.IState {
  value?: number;
  errors?: any;
}

class MasterDataSelector extends common.BaseComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: props.value,
      errors: props.errors
    };
  }

  componentDidUpdate(prevProps: IProps) {
    if (prevProps.value !== this.props.value || prevProps.errors !== this.props.errors) {
      this.setState({ value: this.props.value, errors: this.props.errors });
    }
  }

  render() {
    const option = this.props.globalStore.get('masterData').option || ({} as IOption);
    return (
      <React.Fragment>
        <Form.Control as="select" custom name={this.props.property} onChange={(e) => this.props.onChanged(e)} value={this.state.value} isInvalid={!!this.state.errors}>
          <option key={`${this.props.property}_blank`} value=""></option>
          {this.resolveMasterData().map((o: IOptionItem) => (
            <option key={`${this.props.property}_${o.id}`} value={o.id}>{o.name}</option>
          ))}
        </Form.Control>
        <ValidationErrorFeedback errors={this.state.errors}/>
      </React.Fragment>
    )
  }

  private resolveMasterData(): IOptionItem[] {
    const option = this.props.globalStore.get('masterData').option;
    if (!option) {
      return [];
    }

    const names = this.props.masterDataKey.split('.');
    let data = option[names[0]];
    for (let i = 1; i < names.length; i++) {
      data = data[names[i]];
    }

    return data;
  }
}

export default AppDataStore.withStores(MasterDataSelector);
