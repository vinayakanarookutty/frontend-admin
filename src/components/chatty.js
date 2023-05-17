import React, { Component } from 'react'
import { Box } from '@pankod/refine-mui';
export class Chatty extends Component{
componentDidMount()
{
  
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"25b8a6d536b0a198965ba4e8f2d2d8607","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
        
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */




}render(){
 
  return (
    <>
    
    
    </>
   
  )
  }
}

export default Chatty