# Questions

### What is the difference between Component and PureComponent? give an example where it might break my app.

A component and a pure component are similar, the main difference, is that a component rerenders every time its parent rerenders,
regardless of whether the component's props and state have changed.
A pure component, will not rerender if its parent rerenders, unless the pure component's props (or state) have changed.

e.g. PureComponent does shallow equality check of props object. In case next value1 value (created with this.getvalue1()) is === equal to previous value, so is prop2, SomeComponent won't be updated.

### Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

I've been working with functional components for more than 2 years I don't have a answer for that.

### Describe 3 ways to pass information from a component to its PARENT.

1 - Create one callback function in the parent, Pass the callback function to the child as a props then calls the parent callback function using props and passes data to the parent component
2 - Using Context API
3 - Using one Global State management library (e.g. redux) or Component useReducer (hooks)

#### Give 2 ways to prevent components from re-rendering.

React.memo() and React shouldComponentUpdate lifecycle

### What is a fragment and why do we need it? Give an example where it might break my app.

Fragment let you wrap a list of childrens without adding extra nodes to the DOM.

```
const App = () => (
<>
  {list.map(item => <span>{item}</span>)}
  <div> Hello world </div>
</>
)
```

### Give 3 examples of the HOC pattern.

1 - HOC that renders different component based on login status:

```
  function withLogin(InputComponent) {
    return function({ isLogged, ...rest}) {
      if (isLogged) {
        return <InputComponent {...rest} />;
      } else {
        return <p>You are not authenticated</p>;
      }
    };
  }
```

2 - Debugger HOC

```
    function withDebug(InputComponent) {
    return class OutputComponent extends InputComponent {
      render() {
        return (
          <>
            <p>props: {JSON.stringify(this.props)}</p>
            <p>props: {JSON.stringify(this.props)}</p>
            <p>props: {JSON.stringify(this.props)}</p>
            {super.render()} // 3
        </>
        );
      }
  };
  }
```

3 - Multiples HOC

```
withAuth(withTheme(withNewSchema(myComponent)))
```

### what's the difference in handling exceptions in promises, callbacks and async...await.

Await is a syntactic sugar for Promises. It makes your asynchronous code look more like synchronous/procedural code, which is easier for humans to understand.
so, one Try/Catch statement works good for Async/Await. Promises uses then/catch (ES6).

For callbacks:

```
function postLetter(letter, address, callback) {
  if (canSendTo(address))
    letter.sendTo(address, function () {
      callback(null, letter.getTrackingCode());
    });
  else
    callback("Cannot reach address " + address);
}
```

### How many arguments does setState take and why is it async.

A:
`setState` has 2 arguments and being async allows us to have multiple calls to setState in a single scope and not trigger not needed re-renders of the whole tree

### List the steps needed to migrate a Class to Function Component.  List a few ways styles can be used with components.

1 - Create one Separate branch for the migration <br />
2 - Measure the impact according: Critical Components, Intermediate, non-critical (usually UI components, e.g. Buttons)<br />
3 - Start with less critical components<br />
4 - Remove all the lifecycle methods and convert it to { useState, useRef, React.memo, useEffect, useCallback, useMemo }<br />
5 - (optional) for isolation and to implement DRY approach try to create one separate hook for every logic involved, if the components has logics for fetching, data manipulation, and event handling create 3 separate hooks e.g. <a href="https://github.com/yuripramos/nextJS-weatherapp/blob/main/pages/results/index.tsx">example</a><br />

About styling: CSS Modules, Inline Styling and CSS-in-JS approaches are good options

### How to render an HTML string coming from the server.

A: use `dangerouslySetInnerHTML` attr
