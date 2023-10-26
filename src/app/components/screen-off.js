

export default function ScreenOff() {
    return (
      <div className="screen-off" >

        <div className="wc-text-wrap">
            <h1 className="heading">The tree is<br/> currently off.<br/> Only  X sleeps<br/>‘till Christmas!</h1>
            <p>The next show will be at 8:30pm.</p>
            <div className="btn-wrap">
               <a href="" className="btn-default btn-white">Refresh</a>
           </div>
       </div>
       <img src="/img/logo.png" alt="" className="logo"/>
   </div>
    );
  }