import React from 'react';
import SimpleJSX from './components/SimpleJSX';
import DisplayArray from './components/DisplayArray';
import ShowHideElement from './components/ShowHideElement';
import EnableDisableButton from './components/EnableDisableButton';
import DataBinding from './components/DataBinding';
import AddComponents from './components/AddComponents';
import SumOfTwoNumbers from './components/SumOfTwoNumbers';
import Counter from './components/Counter';
import SearchFilter from './components/SearchFilter';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Tasks Display</h1>

      <h2> Display Simple JSX</h2>
      <SimpleJSX />

      <h2>Display an Array of Records</h2>
      <DisplayArray />

      <h2>Show/Hide Element</h2>
      <ShowHideElement />

      <h2>Enable/Disable Button</h2>
      <EnableDisableButton />

      <h2>Data Binding Using Textbox</h2>
      <DataBinding />

      <h2>Dynamically Add Child Components</h2>
      <AddComponents />

      <h2> Do Sum of Two Numbers</h2>
      <SumOfTwoNumbers />
      <br/>

      <h2>Counter</h2>
      <Counter />
      <br/>
      <h2>Search Filter</h2>
      <SearchFilter />
    </div>
  );
}

export default App;
