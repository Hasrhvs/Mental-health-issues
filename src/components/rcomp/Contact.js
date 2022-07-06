import React from 'react'

export default function contact() {
    return (
        <>
        
            <div className="container my-5" id="container6">
            <h1 id="container4">Get Help</h1>
                <div className="row">
                    <div className="col">
                    <img id="col1img3" src={require('../../images/2.png')} alt="one" />
                    </div>
                    <div class="col">
                <form  action="/" method="post">
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="name" placeholder="Enter name here" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Phone Number</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" name="phone" placeholder="Phone Number" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Enter Message here</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name="message" rows="3"></textarea>
                    </div>
                    <button type="button" className="btn btn-success">Send</button>
                </form>
                    </div>
                </div>Name
            </div>
        </>
    )
}
