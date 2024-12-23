import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useHistory } from "react-router-dom";

import { useSpeechSynthesis } from "react-speech-kit";

const Assistant = () => {
  const history = useHistory();
  //   SpeechRecognition.startListening({ continuous: true });
  const { speak } = useSpeechSynthesis();
  const commands = [
    {
      command: "Go to *",
      callback: (link) => {
        const x = `Redirect to: ${link}`;
        console.log(x);
        if (link === "object detection") {
          speak({ text: x });
          history.push(`/object-detection`);
        } else if (link === "image to text") {
          speak({ text: x });
          history.push(`/image-to-text`);
        } else if (link === "text to speech") {
          speak({ text: x });
          history.push(`/text-to-speech`);
        } else if (link === "speech to text") {
          speak({ text: x });
          history.push(`/speech-to-text`);
        } else if (link === "home") {
          speak({ text: x });
          history.push(`/`);
        } else {
          speak({ text: "I don't get it, Please try again!" });
        }
      },
    },
    {
      command: "Hello",
      callback: () => {
        speak({ text: "Hello Sagar" });

        console.log("hii");
      },
      //   matchInterim: true,
    },
    // {
    //   command: "*",
    //   callback: () => {
    //     speak({ text: "Please repeat" });

    //     console.log("repeat");
    //   },
    // },
  ];
  const { transcript: t1 } = useSpeechRecognition({ commands });

  return (
    <React.Fragment>
      <div
        className="row m-2 p-4"
        style={{ background: "#f5f5f5", textAlign: "center" }}
      >
        <h1
          style={{
            fontFamily: "Georgia, Times, serif",
            fontSize: "45px",
            fontWeight: "bolder",
          }}
        >
          SpeechToText
        </h1>
      </div>
      <div style={{ border: "10px solid gray", padding: "10px" }}>
        <div>Hi, into Voice Assistant</div>
        <h3>Hello World!</h3>
        <p>{t1 ? t1 : "Start listening for transcript"}</p>
        <button onClick={SpeechRecognition.startListening}>
          Start listening
        </button>
        &nbsp;
        <button onClick={SpeechRecognition.stopListening}>
          Stop listening
        </button>
        <p>Hi</p>
        <a href="www.google.com">hi</a>
      </div>
    </React.Fragment>
  );
};

export default Assistant;
