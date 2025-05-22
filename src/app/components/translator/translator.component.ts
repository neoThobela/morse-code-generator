import { Component } from '@angular/core';

@Component({
  selector: 'app-translator',
  standalone: false,
  templateUrl: './translator.component.html',
  styleUrl: './translator.component.scss'
})
export class TranslatorComponent {

  inputText: string = '';
  translatedText: string = '';

  morseCodeMap: { [key: string]: string } = {
    A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.',
    H: '....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.',
    O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-',
    V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..',
    0: '-----', 1: '.----', 2: '..---', 3: '...--', 4: '....-',
    5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.',
    ' ': '/', '!': '-.-.--', '?': '..--..', '.': '.-.-.-', ',': '--..--',
    '-': '-....-', '_': '..--.-'
  };

  convertToMorseCode() {
    this.translatedText = this.inputText
      .toUpperCase()
      .split('')
      .map(char => this.morseCodeMap[char] || '')
      .join(' ');
  }
  
}
