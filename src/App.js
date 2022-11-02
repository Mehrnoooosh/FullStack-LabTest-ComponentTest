import './App.css';
import TweetContainer from './components/TweetContainer';
function App() {
  return (
    <div className="App">
      <TweetContainer status="Stop COVID-19, Take-out only!"/>
      <TweetContainer status="At home, binge watching Breaking Bad for second time!"/>
      <TweetContainer status="When is the beach opening up? Can't wait.."/>
    </div>
  );
}

export default App;
