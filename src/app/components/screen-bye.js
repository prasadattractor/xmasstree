

export default function ScreenBye() {
    return (
      <div className="screen-bye" >

        <div className="wc-text-wrap">
            <img src="/img/white-star.svg" alt="" className="white-star"/>
            <h1 className="heading">Ok, bye!</h1>
            <p>You have now left the Geelong<br/> Christmas Tree Controller.
                <br/><br/>
                Had fun?<br/>Tag <span>#GeelongChristmas</span><br/>
            then have another go!</p>
            <div className="btn-wrap">
               <a href="" className="btn-default">Go again!</a>
           </div>
       </div>
       <img src="/img/logo.png" alt="" className="logo"/>
   </div>
    );
  }