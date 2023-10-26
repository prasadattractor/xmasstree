

export default function ScreenOops() {
    return (
      <div className="screen-inprogress">

        <div className="wc-text-wrap">
            <h1 className="heading">Oops!</h1>
            <p>Looks like you missed your turn.</p>
            <div className="btn-wrap">
               <a href="" className="btn-default btn-white">Refresh</a>
               <a href="" className="btn-default btn-white">Exit</a>
           </div>
       </div>
       <img src="/img/logo.png" alt="" className="logo"/>
   </div>
    );
  }