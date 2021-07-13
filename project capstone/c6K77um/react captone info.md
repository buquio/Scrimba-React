/**
 * Initialize state to save the following data:
 *      top text
 *      bottom text
 *      random image (intialize with "http://i.imgflip.com/1bij.jpg")
 */



componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
    }
    /**
     * We'll be using an API that provides a bunch of meme images.
     * 
     * Your task:
     * make an API call to "https://api.imgflip.com/get_memes" and save the 
     * data that comes back (`response.data.memes`) to a new state property
     * called `allMemeImgs`. (The data that comes back is an array)
     */
    
    
    
     /**
                         * Create 2 input fields, one for the topText and one for the bottomText
                         * Remember that these will be "controlled forms", so make sure to add
                         * all the attributes you'll need for that to work
                         */
                         
                         
                         
                         /**
     * Create the onChagne handler method
     * It should update the corresponding state on every change of the input box
     */
    
    
    
    /**
     * Create a method that, when the "Gen" button is clicked, chooses one of the
     * memes from our `allMemeImgs` array at random and makes it so that is the
     * meme image that shows up in the bottom portion of our meme generator site
     */
    
    
    
    handleSubmit(event) {
        event.preventDefault()
        // get a random int (index in the array)
        const randNum
        // get the meme from that index
        // set `randomImg` to the `.url` of the random item I grabbed
    }
    