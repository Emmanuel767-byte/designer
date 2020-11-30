import React ,{useState}from 'react';
import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   '& > *': {
  //     margin: theme.spacing(1),
  //   },
  // },
  form:{
      color:"white",
      marginRight:"25px",
      marginBottom:"15px",
      marginTop:"15px",
      backgroundColor: "",
      minWidth: "200px",
      width:"100%",
      maxWidth: "390px",
      padding: "10px",
      height: "100%",
      maxHeight:"700px",
      border: "outset 1px",
      display: 'flex',
      flexDirection: 'column',
      borderRadius:"12px"
  },
  
booking:{
  position:"absolute",
  display: "flex",
  justifyContent:"space-between",
  backgroundImage: "url('https://coolmaterial.com/wp-content/uploads/2016/06/5-Underwater-Cameras-2.jpg')",
  backgroundSize: "cover",
  width:"100%"

},
h2:{
  paddingLeft: "12px",
  paddingTop: "9px",
  height: "fit-content",
  fontSize:"25px",
  color: "white"
}
  
}));


const Booking = () => {
  const classes= useStyles();
  const [name, setName] = useState('');
  const [event, setEvent] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const sendRqst=(e)=>{  // Function to send submitted re
    e.preventDefault();
    window.open(`mailto:${email}?event=${event}&body=${name}: ${message}`);
  }
    return (
        <div id="booking" className={classes.booking}>
          <h2 className={classes.h2}>Book a Photoshoot Today!</h2>
          
            <form className={classes.form}>
                <h5>Name</h5>
                  <input defaultValue=""  onChange={e=>setName(e.target.value)} placeholder="Name" type="text" value={name}/>
                <h5>E-mail</h5>
                <input defaultValue="" placeholder="Email" type="email" value={email} />
                <br/>
                <h5>Location</h5>
                <input defaultValue="" placeholder="Address" type="text"/>
                <br/>
                <h5>Event Occasion</h5>
                <input defaultValue=""  onChange={e=>setEvent(e.target.value)} value={event} placeholder="Prom/Wedding/Birthday..."  type="text"/>
                  <br/>
                <h5>Event Description</h5>
                <textarea defaultValue="" value={message} onChange={e=> setMessage(e.target.value)} style={{ fontSize:"15px",height: "100%", minHeight:"150px", padding: "8px",}} type="text"/>
                <br/>
                <button style={{borderRadius:"8px", height:"30px", cursor: "pointer", backgroundColor: "black", color: "whitesmoke", fontWeight: "500", fontSize:"18px"}} type="submit" onClick={sendRqst}>Send</button>
              </form>
          
        </div>
    )
}

export default Booking
