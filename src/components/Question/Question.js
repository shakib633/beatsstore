import React from 'react';

const Question = () => {
    return (
        <div>
            <h3>Qes:How React works?? </h3>
            <p>Ans: React is a JavaScript library that creates userInterface.React Helps us To Creating Single page Applications.<br></br> And React is Like a Resturant where we get food by order , But we don't need to go kitchen for cook.
            We use declarative code to create components.<br></br>Components accept an arbitrary input with data (a prop) and return a React element to declare what should appear on screen.
            </p>
            <h3>Qes: Props VS State </h3>
            <p>
            Ans: State is an object that contains private or public local data about a component. And it may be used to influence the output of a component.

             <br></br>Props are nothing more than input definitions to describe what you are suppose to see. Props are Read Only , And Describe What We Want to see.<br></br>State are
             Shows influence output & Must be modified with this.setState()
            </p>
        </div>
    );
};

export default Question;