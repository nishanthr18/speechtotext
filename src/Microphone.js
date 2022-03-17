import { useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";


function Microphone() {
 const [message, setMessage] = useState('');
 const commands = [
  {
    command: 'reset',
    callback: () => resetTranscript()
  },
  {
    command: 'clear',
    callback: () => setMessage('')
  },
  {
    command:'How are you',
    callback: () => setMessage('i am fine, Thank you!')
  },
  {
    command: 'shut up',
    callback: () => setMessage('I wasn\'t talking.')
  },
  {
    command: 'Hello',
    callback: () => setMessage('Hi there! How can i help you?')
  },
]
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };

  return (
    <Card
      style={{ borderRadius: 0 }}
      sx={{
        minWidth: 350,
        height: 450,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          width: 300,
          justifyContent:"center",

        }}
      >
        {transcript && <div style={{backgroundColor:'white'}}>{transcript}</div>}
      </div>
      <div style={{backgroundColor:'orange'}}>{message}</div>
      <Divider />
      <Grid container spacing={1} >
        <Grid item ref={microphoneRef} onClick={handleListing}>
          <img
            style={{ width: "28px", height: "26px" }}
            src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png"
            className="microphone-icon"
            alt="microphone"
          />
        </Grid>
        <Grid item style={{marginBottom:0}}>
          <Typography gutterBottom color="#9e9e9e">
            {isListening ? "Listening........." : "Click to start Listening"}
          </Typography>
        </Grid>
        <Grid item>
          {isListening && (
            <CardActions>
              <Button onClick={stopHandle} size="small">
                Stop
              </Button>
            </CardActions>
          )}
        </Grid>
        <Grid item>
          {transcript && (
            <CardActions>
              <Grid>
                <Button
                  startIcon={<DeleteIcon />}
                  color="error"
                  onClick={handleReset}
                  size="small"
                >
                  Delete
                </Button>
              </Grid>
            </CardActions>
          )}
        </Grid>
      </Grid>
    </Card>
  );
}
export default Microphone;
