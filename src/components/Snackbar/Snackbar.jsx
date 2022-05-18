import "../../styles/snackbar.css";

export const Snackbar = ({
    open=false,
    type='default',
    message='Your message comes here'
}) => {
    if(open){
        return (<div className="snackbar_container">
            <div> 
                {message}
            </div>
         </div>);
    }else{
        return
    }
  
}


