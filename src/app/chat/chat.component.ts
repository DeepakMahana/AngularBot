import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ChatService, Message } from '../services/chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;

  constructor(public chat: ChatService) { }

  ngOnInit() {

    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'hide_card': false,
      "background-color": "#673AB7",
      "background-image": "",
      "background-position": "50% 50%",
      "background-repeat": "no-repeat",
      "background-size": "cover"
  };

this.myParams = {
      

particles: {

number: {
"value": 130,
"density": {
"enable": true,
"value_area": 1000
  }
},
color: {
  "value": "#F44336"
},
shape: {
  "type": "circle",
  "stroke": {
    "width": 10,
    "color": "#FFEBEE"
  },
  "polygon": {
    "nb_sides": 0
  },
},
opacity: {
  "value": 0.5,
  "random": false,
  "anim": {
    "enable": false,
    "speed": 1,
    "opacity_min": 0.1,
    "sync": false
  }
},
size: {
  "value": 3,
  "random": true,
  "anim": {
    "enable": false,
    "speed": 40,
    "size_min": 0.1,
    "sync": false
  }
},
line_linked: {
  "enable": true,
  "distance": 150,
  "color": "#ffffff",
  "opacity": 0.4,
  "width": 1
},
move: {
  "enable": true,
  "speed": 6,
  "direction": "none",
  "random": false,
  "straight": false,
  "out_mode": "out",
  "attract": {
    "enable": false,
    "rotateX": 600,
    "rotateY": 1200
  }
}
},
interactivity: {
"detect_on": "canvas",
"events": {
  "onhover": {
    "enable": true,
    "mode": "grab"
  },
  onclick: {
    "enable": true,
    "mode": "push"
  },
  "resize": true
},
modes: {
  "grab": {
    "distance": 300,
    "line_linked": {
      "opacity": 1
    }
  },
bubble: {
    "distance": 400,
    "size": 40,
    "duration": 2,
    "opacity": 8,
    "speed": 3
  },
repulse: {
    "distance": 200
  },
  push: {
    "particles_nb": 4
  },
  remove: {
    "particles_nb": 2
  }
}
},
retina_detect: true,
}

    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val));
  }

  sendMessage() {
      this.chat.converse(this.formValue);
      this.formValue = '';
  }

}
