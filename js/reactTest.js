import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Icon, Button, message } from 'antd';
import style from '../less/test.less';
import styles from '../less/test.css';
import BasicExample from './router.js';
// const style = {};
// const styles = {};
import '../less/test.css';
console.log(style, styles);
console.log($('body'));
// console.log(plus);
// import { ReactComponent as MessageSvg } from '../img/checkedError.svg';
const hideMessage = message.loading('正在编译主题！', 0);
window.less
  .modifyVars({
    '@primary-color': '#52c41a',
  })
  .then(() => {
    hideMessage();
  })
  .catch(() => {
    message.error('Failed to update theme');
    hideMessage();
  });
const PandaSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
      fill="#6B676E"
      p-id="1143"
    />
    <path
      d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
      fill="#FFEBD2"
      p-id="1144"
    />
    <path
      d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
      fill="#E9D7C3"
      p-id="1145"
    />
    <path
      d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
      fill="#FFFFFF"
      p-id="1146"
    />
    <path
      d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
      fill="#6B676E"
      p-id="1147"
    />
    <path
      d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
      fill="#464655"
      p-id="1148"
    />
    <path
      d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1149"
    />
    <path
      d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1150"
    />
  </svg>
);
const MyComponent = React.forwardRef((props, ref) => (
  <div id="test">
    <div ref={ref}>
      <div>{props.text}</div>
    </div>
  </div>
));

// function Ts(props) {
//   const [count, setCount] = React.useState(0);
//   return (
//     <button ref={props.refs} className="FancyButton" onClick={props.handleClick}>
//       <div>{props.children}</div>
//     </button>
//   )
// }

class Ts extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // 直接使用原生 API 使 text 输入框获得焦点
      if (this.textInput) this.textInput.focus();
    };
  }
  showInfo() {
    console.log('ssssss');
  }
  render() {
    return (
      <button ref={this.props.ref} className="FancyButton" onClick={this.props.handleClick}>
        <div>{this.props.children}</div>
      </button>
    );
  }
}

const FancyButton = React.forwardRef((props, ref) => <Ts ref={ref} {...props} />);

// You can now get a ref directly to the DOM button:

const myComponent = React.createRef();

class Tss extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // 直接使用原生 API 使 text 输入框获得焦点
      if (this.textInput) this.textInput.focus();
    };
  }
  showInfo() {
    console.log('ssssss');
  }
  render() {
    return (
      <button ref={this.props.refs} className="FancyButton" onClick={this.props.handleClick}>
        <div>{this.props.children}</div>
      </button>
    );
  }
}

class Tsss extends React.Component {
  componentDidMount() {
    console.log(this.inputElement, ReactDOM.findDOMNode(this.inputElement));
  }
  render() {
    return (
      <Tss
        ref={e => {
          this.inputElement = e;
        }}
      />
    );
  }
}

class Tssss extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
    this.ref = React.createRef();
    // this.handleClick = this.handleClick.bind(this)
    this.state = {
      test: 'aaa',
    };
  }
  componentDidMount() {
    console.log(this.inputElement);
  }
  handleClick() {
    console.log(this.ref, this.ref.current.showInfo);
  }
  render() {
    return (
      <div>
        <FancyButton handleClick={this.handleClick.bind(this)} ref={this.props.ref}>
          Click me!
        </FancyButton>
        <Tss ref={this.inputElement} />
      </div>
    );
  }
}

function FancyInput(props, ref) {
  const inputRef = React.useRef();
  // React.useImperativeHandle(ref, () => ({
  //   focus: () => {
  //     inputRef.current.focus();
  //   }
  // }));
  return <Tssss ref={ref} {...props} />;
}

FancyInput = React.forwardRef(FancyInput);

function ReactTest() {
  const ref = React.createRef();
  const fancyInputRef = React.useRef();
  const handleClick = () => {
    console.log(fancyInputRef.current.handleClick);
    // fancyInputRef.current.focus()
    // console.log(ref, ref.current.showInfo);
    // ReactDOM.render(
    //   <div className="divider">
    //     <MyComponent text="sssss" ref={myComponent} />
    //   </div>,
    //   document.body
    // );
    // setTimeout(() => {
    //   ReactDOM.unmountComponentAtNode(document.body);
    // }, 5000);
    //    ref.current.innerHTML='sss';
  };
  return (
    <React.Fragment>
      {/* <FancyButton handleClick={handleClick} ref={ref}>
        Click me!
      </FancyButton>
      <div id="test">
        <Icon type="dribbble" />
        <PandaSvg />
      </div>
      <Tsss />
      <Tssss />
      <a style={{ marginLeft: 8, fontSize: 12 }} className={style.color + ' color'}>
        Collapse <Icon type={'up'} />
      </a> */}
      <FancyInput ref={fancyInputRef} />
      <Button onClick={handleClick}>ssss</Button>
      <BasicExample />
    </React.Fragment>
  );
}

ReactDOM.render(<ReactTest />, document.getElementById('root'));
