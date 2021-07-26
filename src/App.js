import Navigation_bar from './Navigation_bar';
import Blog_preview from './Blog_preview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="Title">Un media sociaux pour le hockey!</h1>
      </header>
      <body>
        <Navigation_bar />
        <Blog_preview />
      </body>
    </div>
  );
}

export default App;
