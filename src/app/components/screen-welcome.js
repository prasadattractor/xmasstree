
import Link from 'next/link';

export default function ScreenWelcome() {
    return (
    <div className="screen-welcome">
        <img src="/img/logo.png" alt="" className="logo"/>
        <div className="wc-text-wrap">
            <h1 className="heading">Do you want to<br/>control the tree?</h1>
            <a href="/about" className="btn-default">Give me control</a>
            <p>Listen to the soundtrack on 99.0 on an FM radio when you’re visiting the tree</p>
        </div>
    </div>
    );
  }