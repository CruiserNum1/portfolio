import React, {useState} from 'react';

const Homepage = () => {
  const [text, setText] = useState({
    fullWord: '',
    words: ['Hello, My name is Alisher', 'I am Front End Developer', 'Welcome to My Personal Website'],
    isDelete :  false
  })

  const typeWriter = () => {
    console.log(text.fullWord)
  }

  return (
    <div>
      <div>

      </div>
    </div>
  );
}

export default Homepage;
