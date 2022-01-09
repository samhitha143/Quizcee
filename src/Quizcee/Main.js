import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Quizcee/Home/Home';
import Instructions from './Quizcee/Instructions/Instructions';
import Quizpage from './Quizcee/Quizpage/Quizpage';
import QuizSummary from './Quizcee/Quizpage/Quizsummary/Quizsummary'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/play" exact component={Instructions} />
      <Route path="/play/start" exact component={Quizpage} />
      <Route path="/play/summary" exact component={QuizSummary} />
    </Router>
  );
}

export default App;