# Envision: Assistive Technology for the Visually Impaired

## Overview

Envision offers real-time surrounding descriptions, voice-based interaction, thereby assisting in everyday tasks. This project integrates several technologies such as YOLO for object detection, EasyOCR for optical character recognition (OCR), Web Speech API for voice interaction, and Gemini 1.5 Pro for scene description and contextual understanding.

The system aims to provide users with an intuitive, real-time assistive experience, enabling them to navigate their environment, read text, and interact with the system using their voice.

## Features

- **Real-Time Object Detection**: Using YOLO-based frameworks, the system detects and identifies objects in real time, helping users recognize and avoid obstacles in their path.
  
- **Text Recognition and Speech Output**: Through EasyOCR, the system reads any printed text (from documents, menus, signs, etc.) and converts it into speech for the user to hear.
  
- **Voice Interaction**: Integrated with the Web Speech API, the system responds to voice commands, offering seamless interaction for users to control features and receive feedback.
  
- **Contextual Scene Description**: The Gemini 1.5 Pro model provides detailed and contextually aware descriptions of the environment, making the user experience more intuitive and dynamic.

## Installation

### Requirements

- **Python 3.x**
- **React (for frontend)**
- **TensorFlow**
- **YOLOv3 models** for object detection
- **EasyOCR** for text recognition
- **Web Speech API** (for voice interaction)
- **Gemini 1.5 Pro API** for scene description

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/envision.git
   cd envision

## Acknowledgments

- This project was undertaken as final year Project - 1 as a part of the Computer Science and Engineering Program at [Vellore Institute of Technology](https://vit.ac.in/).
- This project was developed in collaboration with [Sagar](https://github.com/Sagar-Mondal) and [Aanchal](https://github.com/aanchxl).

##### Another related project, an extended experimentation into [GenAI Vision](https://github.com/ishitaagl20/GenAIVision) provides three modules—Image Describer, Object Finder, and Object Tracker—leveraging the Gemini-1.5-Flash model to analyze images and videos for object recognition and tracking.
