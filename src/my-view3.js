/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import './shared-styles.js';
import {LitElement, html, css, render} from 'lit-element';
import './my-view4.js';
import {bulmaStyles} from '@granite-elements/granite-lit-bulma/granite-lit-bulma.js';


class MyView3 extends LitElement {


  static get properties() {
    return {

      todos: {type: Array}
    }
  }


  constructor(){

    super()
    this.todos = []


  }




  async firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

   const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
   const todoItems = await response.json()


   setTimeout(() => {
    this.todos = [...todoItems]


   }, 5000)
   
   console.log('todosInTimeout', this.todos)

    this.todos = []


    console.log('todos', this.todos)
    console.log('length', this.todos.length)

  }



  static get styles() {
    return [bulmaStyles];
  }



  render() {

    let show;

    if(this.todos.length === 0){
      show = html`<div class='progressing'><progress class="progress is-success" max="100">60%</progress></div>`
    }else{
      show =  html` 
       <div>
       ${this.todos.map( todo => html`
       
       <div class="card">
   <div class="card-content">
     <div class="media">
       <div class="media-content">
         <p class="title is-4">${todo.title}</p>
       </div>
     </div>
 
     <div class="content">
       <p>${todo.completed}</p>
     </div>
   </div>
 </div>
       `)}
   </div>
 
       <div>
     <my-view4></my-view4>
       </div>
 
       
     `
    }
     return html `<div class="card">${show}</div>`
  }
}

window.customElements.define('my-view3', MyView3);
