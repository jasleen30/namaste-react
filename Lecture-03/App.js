import React from 'react';
import ReactDOM  from 'react-dom/client';

//React Element 
const heading = (
<h1 className='head' tabIndex="5">
    Namaste React Using JSX 
    </h1>
);

//How to render React Element
//root.render(heading);


// Functional Component we can write in both of these ways mentioned
const HeadingComponent = () =>{
    return <h1 className='heading'>I am heading tag functional component</h1>;
};

const Heading1Component = () =>(
    <h1 className = "heading1">I am heading1 tag functional component</h1>
);

// Component Composition

const HeaderComponent =() =>{
    return (
    <div className='header'>
        <HeadingComponent/>
       <Heading1Component/>
        <h1>I am component composition</h1>
    </div>);
};

// How to render Functional Component <HeadingComponent>, <Heading Component> </Heading Component> 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);

const heading2 = (
    <h1 className='head' tabIndex="5">
        Namaste React Using JSX 
        </h1>
    );

const HeaderComponent1 =() =>{
    return (
    <div className='header'>
        {heading}
        <h1>I am component composition</h1>
    </div>);
};

// **********************************

// Functional Component we can write in both of these ways mentioned
const HeadingComponent3 = () =>{
    return <h1 className='heading'>I am heading tag functional component</h1>;
};

const Heading1Component3 = () =>(
    <div id="container">  // If I write here {heading} it gives an error
        {heading}       // This works i.e. write element inside some div etc but writing at the starting gives an error
    <h1 className = "heading1">I am heading1 tag functional component</h1>
    </div>
);

// Component Composition

const HeaderComponent3 =() =>{
    return (
    <div className='header'>
        // Any way we can call functional component
        {Heading1Component3()} or <Heading1Component></Heading1Component> or <Heading1Component/>
        <h1>I am component composition</h1>
    </div>);
};

// How to render Functional Component <HeadingComponent>, <Heading Component> </Heading Component> 
const root3 = ReactDOM.createRoot(document.getElementById("root"));
root3.render(<HeaderComponent3/>);