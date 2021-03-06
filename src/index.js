import React from 'react';
import ReactDOM from 'react-dom';
// import { CallBackHook } from './components/06-memos/CallBackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect';
// import { Memorize } from './components/06-memos/Memorize';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHooks } from './components/01-useState/CounterWithCustomHooks';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HookApp } from './HookApp';
// import './components/08-useReducer/intro-reducer'
// import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';

ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);