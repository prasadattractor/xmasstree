

export default function ScreenInprogress() {
    return (
      <div className="screen-inprogress">
            <div className="wc-text-wrap">
                <h1 className="heading">Light show<br />is in progress</h1>
                <p>Refresh your browser as soon as the<br />show ends to interact with the tree.</p>
                <div className="btn-wrap">
                    <a href="" className="btn-default btn-white">Refresh</a>
                </div>
            </div>
            <img src="/img/logo.png" alt="" className="logo" />
        </div>
    );
  }