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

  morseInput: string = '';
  englishOutput: string = '';

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

  morseToEnglishMap: { [key: string]: string } = {};

  constructor() {
    // Build reverse map
    for (let key in this.morseCodeMap) {
      this.morseToEnglishMap[this.morseCodeMap[key]] = key;
    }
  }

  convertToMorseCode() {
    this.translatedText = this.inputText
      .toUpperCase()
      .split('')
      .map(char => this.morseCodeMap[char] || '')
      .join(' ');
  }

  convertToEnglish() {
    this.englishOutput = this.morseInput
      .trim()
      .split(' ')
      .map(code => code === '/' ? ' ' : this.morseToEnglishMap[code] || '')
      .join('');
  }

  // Learn Mode Logic
  learningMode = false;
  currentChar: string = '';
  userGuess: string = '';
  feedback: string = '';

  startLearningMode() {
    this.learningMode = true;
    this.userGuess = '';
    this.feedback = '';
    this.pickRandomCharacter();
  }

  pickRandomCharacter() {
    const keys = Object.keys(this.morseCodeMap).filter(k => k.length === 1); // Letters/numbers only
    this.currentChar = keys[Math.floor(Math.random() * keys.length)];
  }

  checkUserGuess() {
    const correct = this.morseCodeMap[this.currentChar];
    if (this.userGuess.trim() === correct) {
      this.feedback = '✅ Correct!';
    } else {
      this.feedback = `❌ Incorrect. Correct answer: ${correct}`;
    }
  }

}
