import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { SyntheticEvent } from 'react';
import { User } from '../../entities/User';

interface Props {
  onChange?: (event: SyntheticEvent) => void;
  handleRadio?: (event: SyntheticEvent, data: { name: string, value: string }) => void;
  title: string;
  user?: Partial<User>;
}

const defaultProps = {
  title: '',
  user : {
    id: '',
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    birthDate: '',
    phoneNumber: '',
    about: '',
    isActive: false,
    address: '',
    picture: '',
    friends: [
      { id: 0, name: '' }
    ],
  },
};

const UserForm: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <>
      <h1>User</h1>
      <Form>
        <Form.Field>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            value={props.user.username}
            onChange={props.onChange}
            name="username"
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            value={props.user.firstname}
            onChange={props.onChange}
            name="firstname"
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            value={props.user.lastname}
            onChange={props.onChange}
            name="lastname"
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Email" value={props.user.email} onChange={props.onChange} name="email" />
        </Form.Field>
        <Form.Group inline={true}>
          <label htmlFor="">Active</label>
          <Form.Radio
            name="isActive"
            label="Enabled"
            value="true"
            checked={props.user.isActive}
            onChange={props.handleRadio}
          />
          <Form.Radio
            name="isActive"
            label="Disable"
            value="false"
            checked={!props.user.isActive}
            onChange={props.handleRadio}
          />
        </Form.Group>
        <Form.TextArea
          name="about"
          label="About"
          placeholder="Tell us more about you..."
          onChange={props.onChange}
          value={props.user.about}
        />
      </Form>
    </>
  );
};
UserForm.defaultProps = defaultProps;
export default UserForm;
