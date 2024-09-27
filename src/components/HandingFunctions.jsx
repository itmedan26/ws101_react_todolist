function HandingFunction() {

    const handlefunction = () => {console.log("hello There")}

    return(
        <>
        <h1> This is how to handle events in functional Components</h1>
        <button onClick={handlefunction}>Click Me!</button>
        </>
    )
}


export default HandingFunction;