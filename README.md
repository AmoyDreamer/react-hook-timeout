# react-hook-timeout
A component of [React Hook](https://reactjs.org/docs/hooks-intro.html) based on [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) and [clearTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout) that supports multi-timeout management.

## Install
### Using npm
```bash
npm install react-hook-timeout --save-dev
```

## Usage
### ESM usage
```
import useTimeout from 'react-hook-timeout';

export default function myComponent() {
    const { setTimeout } = useTimeout();
    setTimeout(() => {
        //delay doing something after 5 seconds
    }, 5000);
}
```

### Description
This hook component supports to remove all timeout automatically when component uninstalled.

## Method
setTimeout(callback, delay)
- callback => {Function} The callback function for the timeout response.(required)
- delay => {Number} Delay time.(required)
- return value => {Number} Timeout ID

clearTimeout(id)
- id => {Number} Timeout ID.(required)

## License
react-hook-timeout is [MIT licensed](https://github.com/AmoyDreamer/react-hook-timeout/blob/master/LICENSE).
