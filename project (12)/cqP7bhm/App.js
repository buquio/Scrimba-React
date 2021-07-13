import React from "react"

function App() {
    return (
        <div className="contacts">
        
            <div className="contact-card">
                <img src="http://placekitten.com/300/200" />
                <h3>Mr. Whiskerson </h3>
                <p>Phone:(212) 555-1234  </p>
                <p>Email:mr.whiskaz@catnap.meow </p>
            </div>
            <div className="contact-card">
                <img src="http://placekitten.com/400/200" />
                <h3>Fluffkins</h3>
                <p>Phone: (212) 555-2345</p>
                <p>Emai: email="fluff@me.com </p>
            </div>
            <div className="contact-card">
                <img src="http://placekitten.com/400/300" />
                <h3>Destroyer</h3>
                <p>Phone:(212) 555-3456 </p>
                <p>Email:ofworlds@yahoo.com </p>
            </div>
            <div className="contact-card">
                <img src="http://placekitten.com/200/100" />
                <h3>Felix</h3>
                <p>Phone:(212) 555-4567 </p>
                <p>Email:thecat@hotmail.com </p>
            </div>
     
     </div>
     
     )
 }
 
 export default App

 

//////////////
import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
            <ContactCard 
                name="Mr. Whiskerson" 
                imgUrl="http://placekitten.com/300/200" 
                phone="(212) 555-1234" 
                email="mr.whiskaz@catnap.meow"
            />
            
            <ContactCard 
                name="Fluffykins" 
                imgUrl="http://placekitten.com/400/200" 
                phone="(212) 555-2345" 
                email="fluff@me.com"
            />
            
            <ContactCard 
                name="Destroyer" 
                imgUrl="http://placekitten.com/400/300" 
                phone="(212) 555-3456" 
                email="ofworlds@yahoo.com"
            />
            
            <ContactCard 
                name="Felix" 
                imgUrl="http://placekitten.com/200/100" 
                phone="(212) 555-4567" 
                email="thecat@hotmail.com"
            />
            
        </div>
    )
}

export default App


////////
import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
            <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
            
            <ContactCard 
                contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
            />
            
            <ContactCard
                contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
            />
            
            <ContactCard 
                contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
            />
            
        </div>
    )
}

export default App