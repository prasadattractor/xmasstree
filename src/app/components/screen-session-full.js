

export default function ScreenSessionFull() {
    return (
      <div className="screen-inprogress" >

        <div className="wc-text-wrap">
            <h1 className="heading">Bah  Humbug!<br/>This session<br/> is full.</h1>
            <p>Try again by refreshing your browser as soon as the next light show ends.</p>
            <div className="btn-wrap">
               <a href="" className="btn-default btn-white">Refresh</a>
           </div>
        </div>
        <img src="/img/logo.png" alt="" className="logo"/>
    </div>
    );
  }