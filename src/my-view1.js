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
      phone: {type: String}
    }
  }

  constructor(){

    super()
    this.name = ''
    this.email = ''
    this.phone = ''


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
    console.log('phone', this.phone)

    let details = {
      name: this.name,
      email: this.email,
      phone: this.phone
    }

    details = JSON.stringify(details).replace(/[{}]/g, '')


    alert(details)
  }

  static get styles() {
    return [bulmaStyles];
  }


  
render (){
    return html`
<div class="field">
  <label class="label">Full Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input" @input=${this.handleOnChangeName}>
  </div>
</div>


<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email input" @input=${this.handleOnChangeEmail}>
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
    <input class="input" type="text" placeholder="Phone Number" @input=${this.handleOnChangePhone}>
  </div>
</div>
<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" @click=${this.handleSubmit}>Submit</button>
  </div>
  </div>


    `;
  }
}

window.customElements.define('my-view1', MyView1);
