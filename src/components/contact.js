import React from "react";

import "../styles.css"
function Contact(){
    return(
        <div className="form-container" id="contact">
            <form>
                <div>
                <label for="name">What is you name</label>
                <input name="name" id="name" type='text' ></input>

                </div>
                <div>

                <label for="message">What is you message</label>
                <textarea id="message" ></textarea>
                </div>
                <button>Send</button>
            </form>
        </div>
    )
}




export default Contact