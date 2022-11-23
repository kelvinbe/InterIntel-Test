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
import {LitElement, html, css} from 'lit-element';
import {bulmaStyles} from '@granite-elements/granite-lit-bulma/granite-lit-bulma.js';


class MyView1 extends LitElement {


  static get properties(){

    return {

      name: {type: String},
      email: {type: String},
      phone: {type: String},
      isLoading: {type: Boolean}
    }
  }

  constructor(){

    super()
    this.name = ''
    this.email = ''
    this.phone = ''
    this.isLoading = false


  }


  handleOnChangeName(e){
    const input = e.target;
      this.name = input.value;
    
  }
  handleOnChangeEmail(e){
      const input = e.target;
      this.email = input.value;
    }
    handleOnChangePhone(e){
      const input = e.target;
        this.phone = input.value
      }

  handleSubmit(e){
    e.preventDefault()
    console.log('name', this.name)
    console.log('email', this.email)
    console.log('phone', this.phone)

    let details = {
      name: this.name,
      email: this.email,
      phone: this.phone
    }

    details = JSON.stringify(details).replace(/[{}]/g, '')


    alert(details)
  }


  async firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    setTimeout(() => {

      this.isLoading = true

    }, 8000)
   this.isLoading = false
  }

  static get styles() {
    return [bulmaStyles];
  }


  
render (){

  let display;


  if(this.isLoading === false){

    display = html`

<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://media3.giphy.com/media/xUPGcfbMG6a2k2z57O/giphy.gif?cid=6c09b9529e5045c9c6f1793ed8b73da485da03fb6720617f&rid=giphy.gif&ct=g" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Hello</strong>
          <br>
          <strong>WELCOME TO THE SIMPLE GET IT DONE TODO APPLICATION</strong> 
        </p>
        <small>Sign up to view your name in the console and the alert box</small> 

      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
    
  
    `


  }else {

    display = html`
    <div class="field">
      <label class="label">Full Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Enter Your Name" @input=${this.handleOnChangeName}>
      </div>
    </div>
    
    
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Enter Your Email" @input=${this.handleOnChangeEmail}>
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
    </div>
    
    <div class="field">
      <label class="label">Phone Number</label>
      <div class="control">
        <input class="input" type="text" placeholder="Enter Your Phone Number" @input=${this.handleOnChangePhone}>
      </div>
    </div>
    <div class="field is-grouped" style="display: flex; justify-content: center">
      <div class="control" >
        <button class="button is-link" @click=${this.handleSubmit}>Submit</button>
      </div>
      </div>`

  }

    return html `<div>${display}</div>`
  }
}

window.customElements.define('my-view1', MyView1);
