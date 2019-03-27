import React from 'react';
import { connect } from 'react-redux';

function TestComponent(props) {
  return <div ref={props.ref}>我是高阶ref</div>;
}

const mapState = state => ({
  userInfo: state,
});
// eslint-disable-next-line no-undef

const ConnectedMyComponent = connect(mapState)(TestComponent);

const Test = React.forwardRef((props, ref) => <ConnectedMyComponent {...props} ref={ref} />);

export default Test;
