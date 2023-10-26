

export default function ScreenQueue() {
    return (
      <div className="screen-queue">

        <div className="wc-text-wrap">
            <img src="/img/white-star.svg" alt="" className="white-star"/>
            <h1 className="heading">1st</h1>
            <p>You're in the queue!<br/>Please wait.</p>
            <div className="btn-wrap">
               <a href="" className="btn-default btn-white">Leave queue</a>
           </div>
       </div>
       <img src="/img/logo.png" alt="" className="logo"/>
   </div>
    );
  }