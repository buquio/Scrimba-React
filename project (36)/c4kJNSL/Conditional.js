import React from "react"

function Conditional(props) {
    console.log(props.isLoading)
    return (
        <h1>Temp</h1>
    )
}

export default Conditional


//////////
import React from "react"

function Conditional(props) {
    if(props.isLoading === true) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <h1>Some cool stuff about conditional rendering</h1>
        )
    }
    
}

export default Conditional

/////
import React from "react"

function Conditional(props) {
    return <h1>Some cool stuff about conditional rendering</h1>
}

export default Conditional

///////
import React from "react"

function Conditional(props) {
    return (
        <div>
          {props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional</h1>}
            {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
            
        </div>
    )
    
}

export default Conditional

///////extras
import React from "react"

function Conditional(props) {
    return <h1>Some cool stuff about conditional rendering</h1>
}

export default Conditional