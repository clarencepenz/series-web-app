import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';

 


class Home extends Component {
    state={
      words: ['hello', "how's you?", 'fine', 'ah go get money soon']
    }

    render() {
        
        const {words} = this.state
        const type = <h1 style={{color: '#fff'}}> My name is Lord Cipher <Typewriter
        options={{
            strings: words,
            autoStart: true,
            loop: true,
        }}
        />
        </h1>
        return (
            <div className="container">

                   {type}
            </div>
        )
    }
}


export default Home;

