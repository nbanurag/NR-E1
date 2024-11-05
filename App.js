const heading = React.createElement('h1', {id: 'heading', xyz:'abc'}, 'hello anurag');
const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(heading); // Use root.render instead of ReactDOM.render