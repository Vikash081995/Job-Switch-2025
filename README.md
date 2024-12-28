# Job-switch-preparation-2025

---

## React JS

### JSX

JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows developers to write HTML elements and components in a more concise and readable manner within JavaScript files.

### Props in react

Props are a way of passing data from a parent component to a child component in React. They are immutable and provide a way of making components dynamic and reusable

```import React from 'react';

const PassingProps = (props: { message: string }) => {
  return <div>{props?.message}</div>;
};

export default PassingProps;
```

### State in react

State in React refers to the internal data that a component can hold and manage. It allows components to store and update data that can be used to render dynamic content.

`import React, { useState } from 'react';
import { useState } from "react";
const State = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
export default State;
 `

### Lifecycle Methods

In React, lifecycle methods are special methods in class components that allow you to run code at particular times during a component’s life cycle. The lifecycle consists of three phases:

1.Mounting (when a component is added to the DOM)
2.Updating (when a component is re-rendered)
3.Unmounting (when a component is removed from the DOM)

#### Mounting Phase

-This phase is triggered when a component is created and inserted into the DOM.

> Lifecycle Methods in Mounting:

1.constructor()
• Called before the component is mounted.
• Used for initializing state and binding methods.
• Avoid side effects (e.g., fetching data) here.

```constructor(props) {
  super(props);
  this.state = { counter: 0 };
}
```

2.static getDerivedStateFromProps(props, state)
• Used to update the state based on props.
• Runs before rendering.
• Returns an object to update state or null to do nothing.

```static getDerivedStateFromProps(props, state) {
  if (props.initialValue !== state.counter) {
    return { counter: props.initialValue };
  }
  return null;
}
```

3.render()
• The only required method in a class component.
• Returns the JSX to render the component.

```render() {
  return <h1>Counter: {this.state.counter}</h1>;
}
```

4.componentDidMount()
• Invoked immediately after the component is mounted.
• Best place for side effects like fetching data or setting up subscriptions.

```componentDidMount() {
  console.log('Component mounted');
}
```

#### Updating Phase

Triggered when the component’s state or props change, causing a re-render.

> Lifecycle Methods in Updating:

-static getDerivedStateFromProps(props, state)
•Runs on both mount and update to sync state with props if needed.

-shouldComponentUpdate(nextProps, nextState)
• Used to control whether the component should re-render.
• Returns true by default. Returning false skips render() and subsequent lifecycle methods.

```shouldComponentUpdate(nextProps, nextState) {
 return nextProps.counter !== this.props.counter;
```

-render()
• Called to update the component’s UI.

-getSnapshotBeforeUpdate(prevProps, prevState)

• Captures information (like scroll position) before the DOM is updated.
• Returns a value that is passed to componentDidUpdate.

```getSnapshotBeforeUpdate(prevProps, prevState) {
  if (prevState.counter !== this.state.counter) {
    return `Counter changed from ${prevState.counter} to ${this.state.counter}`;
  }
  return null;
}
```

-componentDidUpdate(prevProps, prevState, snapshot)

• Invoked immediately after an update occurs.
• Useful for performing side effects after a re-render.

```componentDidUpdate(prevProps, prevState, snapshot) {
  if (snapshot) {
    console.log(snapshot);
    }
}
```

#### Unmounting Phase

Triggered when the component is removed from the DOM.

> Lifecycle Methods in Unmounting:

1.componentWillUnmount()  
• Called just before the component is unmounted and destroyed.
• Use it for cleanup (e.g., removing event listeners or canceling network requests).

```componentWillUnmount() {
    console.log('Component will unmount');
}
```

### ERROR BOUNDARY

An Error Boundary is a React component that catches JavaScript errors in its child component tree during rendering, lifecycle methods, and in constructors of child components. It allows developers to gracefully handle errors by displaying a fallback UI instead of crashing the entire application

#### When Do Error Boundaries Catch Errors?

- In lifecycle methods
- In constructors of child components
- During rendering

#### What Error Boundaries Cannot Catch?

- Errors inside an event handler
- Errors in asynchronous code (e.g., setTimeout or fetch)
- Errors from the server
- Errors in the Error Boundary itself

#### Creating an Error boundary

- An Error Boundary must be a class component.

```import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  static getDerivedStaeFromError(error) {
    return { hasError: true, message: error };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

#### Using error boundary

- Wrap any part of your application where you want to catch errors:

```import ErrorBoundary from "./1-creating-error-boundary";
import Dummy from "./dummy-component";

const UsingErrorBoundary = () => {
  return (
    <ErrorBoundary>
      <Dummy />
    </ErrorBoundary>
  );
}
export default UsingErrorBoundary;
```

#### Handling Error in Functional component

```import ErrorBoundary from "./1.creating-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function BUggyComponen() {
  throw new Error("Crashed");
}

export default function UsingErrorBoundary() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BUggyComponen />
    </ErrorBoundary>
  );
}
```

### EventHandling

React uses camelCase to handle events. Functions can be defined to handle events such as clicks, changes, etc., providing interactivity to the components.

```const EventHandlingBasics=()=>{

const handleClick=()=>{
    console.log("Clicked");
}

    return (
     <button onClick={handleClick}>Click Me </button>
    )
}
```

### Hooks

React Hooks are functions that allow functional components to manage state and side effects. They were introduced in React 16.8 and provide a more concise way of working with state and lifecycle methods in functional components.
}

```import React,{useState} from 'react'

export const UseStatDummy = () => {
    const [count,setCount]= useState(0);
  return (
    <div>
        <p>count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>}
    </div>
  )
}
```

### Controlled Components

-Controlled components in React have inputs and their state controlled by React. They receive their current value and the onChange handler as props, making them controlled by React and not by the DOM

```import React,{useState} from 'react'

const Controlled = () => {
    const [inutValue,setInputValue] = useState('');

    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }
  return (
   <input type="text" value={inputValue} onChange={hadleInputChange} placeholder='type text'/>
  )
}

export default Controlled
```

### High Order Component

-Higher Order Components (HOCs) are functions that take a component and return a new component with additional functionality. They are a way of reusing the component's logic.

```import React from 'react'

const WithLogger=(wrappedComponent)=>{
    return class extends React.Component{
        render(){
            return(
                <div>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}

export default WithLogger;
```

-using with logger Hoc

```import React from "react";
import WithLogger from "./HighOrderComponent";

const UseCaseHOC = () => {
  return <div>UseCaseHOC</div>;
};

const enhancedComponent = WithLogger(UseCaseHOC);
export default enhancedComponent;

```