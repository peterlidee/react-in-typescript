import './App.css';

import Chapter from './components/layout/Chapter';

import BasicProps from './components/props/BasicProps';
import AdvancedProps from './components/props/advancedprops/AdvancedProps';
import EventProps from './components/props/eventProps/EventProps';
import StyleProps from './components/props/StyleProps';
import ReactComponentProps from './components/props/reactComponentProps/ReactComponentProps';
import ExtractProps from './components/props/extractProps/ExtractProps';
import GenericProps from './components/props/genericProps/GenericProps';
import NeverProps from './components/props/neverProps/NeverProps';

import KnownState from './components/hooks/useState/KnownState';
import UnknownState from './components/hooks/useState/UnknownState';
import UnknownStateTypeAssertion from './components/hooks/useState/UnknownStateTypeAssertion';

import BasicReducer from './components/hooks/useReducer/BasicReducer';
import ReducerStrictType from './components/hooks/useReducer/ReducerStrictType';

import { ThemeKnownContextProvider } from './components/hooks/useContext/knownContext/ThemeKnownContext';
import KnownContext from './components/hooks/useContext/knownContext/KnownContext';
import { ThemeUnknownContextProvider } from './components/hooks/useContext/unknownContext/ThemeUnknownContext';
import UnknowContext from './components/hooks/useContext/unknownContext/UnknowContext';
import DomRef from './components/hooks/useRef/DomRef';
import MutableRef from './components/hooks/useRef/MutableRef';
import Counter from './components/hooks/useEffect/Counter';
import CounterWithHook from './components/hooks/customHook/CounterWithHook';

import ComponentasProps from './components/patterns/componentasProps/ComponentasProps';
import ChildrenProps from './components/patterns/childrenProps/ChildrenProps';
import Composition from './components/patterns/composition/Composition';
import RenderProps from './components/patterns/renderProps/RenderProps';

function App() {
  return (
    <div className='App'>
      <h1>React for TS</h1>

      <Chapter>
        <h2>I. Props</h2>

        <BasicProps
          name={'Peter'}
          age={42}
          hasSomething={true}
          person={{ name: 'Peter', age: 42, hasSomething: true }}
          list={[
            { name: 'Peter', age: 42, hasSomething: true },
            { name: 'Pete', age: 32, hasSomething: false },
            { name: 'Pet', age: 22, hasSomething: false },
          ]}
        />
        <AdvancedProps />
        <EventProps />
        <StyleProps styles={{ padding: '5px', border: '1px solid red' }} />
        <ReactComponentProps />
        <ExtractProps
          user={{
            id: 1,
            name: {
              firstName: 'Peter',
              lastName: 'L',
            },
          }}
        />
        <GenericProps />
        <NeverProps />
      </Chapter>

      <Chapter>
        <h2>II. Hooks</h2>

        <h3>1. useState</h3>
        <KnownState />
        <UnknownState />
        <UnknownStateTypeAssertion />

        <h3>2. useReducer</h3>
        <BasicReducer />
        <ReducerStrictType />

        <h3>3. useContext</h3>
        <ThemeKnownContextProvider>
          <KnownContext />
        </ThemeKnownContextProvider>
        <ThemeUnknownContextProvider>
          <UnknowContext />
        </ThemeUnknownContextProvider>

        <h3>4. useRef</h3>
        <DomRef />
        <MutableRef />

        <h3>5. useEffect</h3>
        <Counter />

        <h3>6. custom hook</h3>
        <CounterWithHook />
      </Chapter>

      <Chapter>
        <h2>III. Patterns</h2>
        <ChildrenProps />
        <ComponentasProps />
        <Composition />
        <RenderProps />
      </Chapter>
    </div>
  );
}

export default App;
