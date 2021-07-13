
import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))



// const link = 'https://john:password@subdomain.domain.com:8080/path/to/a/page?queryvar1=value1&qv2=c#hello';


// parseLink(link)

// /**
//  * Do not edit this function.
//  */
// function parseLink(link) {
//     try {
//         const parsedURL = new URL(link);
//         console.log("protocol: " + parsedURL.protocol);
//         console.log("username: " + parsedURL.username);
//         console.log("password: " + parsedURL.password);
//         console.log("hostname: " + parsedURL.hostname);
//         console.log("port: " + parsedURL.port);
//         console.log("path: " + parsedURL.pathname);
//         console.log("query string: " + parsedURL.search);

//         for (const [key, value] of parsedURL.searchParams) {
//             console.log(" - " + key + ": " + value);
//         }
                
//         console.log("fragment: " + parsedURL.hash);
//     } catch(error) {
//         console.error('Not a valid URL');
//     }
// }