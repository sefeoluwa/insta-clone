const Button = ({alertText }) => {
    return (
       <>
        <button onClick={() => alert(alertText)}>Click Me!</button> 
        <h2>This is just a very disgusting topic</h2>
       </>
    )
}

export default Button