import React, {useState} from 'react';
import SingleQuestion from './Question';
import data from './data'

function App() {
  const [questions] = useState(data)
  return <main>
    <div className="container">
      <h3>questions and answers about login</h3>
      <secition className="info">
        {questions.map((question)=>{
          return <SingleQuestion key={question.id} {...question}/>
        })}
      </secition>
    </div>
  </main>
}

export default App;
