const root = document.querySelector("#root");

const rerender = () => {
  render(root, App);
};

// const componentTrack = new Map();

const states = new Map();

function useCustomState(initialValue) {
  const caller = useCustomState.caller;
  const dispatch = (newValue) => {
    const currentState = states.get(caller.name);
    currentState[0] = newValue;
    rerender();
  };
  const currentState = states.get(caller.name) || [initialValue, dispatch];
  states.set(caller.name, currentState);
  return currentState;
}

function App() {
  const [state, setState] = useCustomState(0);

  const handleIncrement = () => setState(state + 1);

  this.events = [
    {
      onEvent: handleIncrement,
      identifier: "#btn",
      event: "click",
    },
    {
      onEvent: () => setState(state + 5),
      identifier: "#btn2",
      event: "dblclick",
    },
  ];

  return `<div>
      <div>hello there</div>
      <button id="btn">Increment</button>
      <button id="btn2">Increment by 5</button>
      <div>
        count: ${state}
      </div
    </div>`;
}

function render(container, componentFn) {
  const events = new componentFn().events;
  const addEvents = () => {
    for (const ev of events) {
      const el = document.querySelector(ev.identifier);
      el.addEventListener(ev.event, ev.onEvent);
    }
  };
  container.innerHTML = componentFn();
  addEvents();
}

render(root, App);
