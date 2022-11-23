/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import "./shared-styles.js";
import { LitElement, html, css, render } from "lit-element";
import { bulmaStyles } from "@granite-elements/granite-lit-bulma/granite-lit-bulma.js";

class MyElement extends LitElement {
  static get properties() {
    return {
      plans: { type: Array },
      show: {type: Boolean},
      hidden: {type: Boolean},
      isActive: {type: Boolean}
    };
  }

  constructor() {
    super();


    this.show = false
    this.plans = [
      { name: "Starter", price: "20ksh/month", NoTodos: `${10} todos`, image: "https://cdn.dribbble.com/users/6569/screenshots/16482169/media/de475cb79969a810d45ba9b5d8cbf4a5.png?compress=1&resize=400x300&vertical=top"  },
      { name: "Dive", price: "40ksh/month", NoTodos: `${30} todos`, image: "https://img.freepik.com/free-vector/scuba-diver-cartoon-sticker_1308-79208.jpg?w=2000" },
      { name: "Turbo", price: "60ksh/month", NoTodos: `${50} todos`, image: "https://cdn.hswstatic.com/gif/turbo-update.jpg" },
      { name: "Full Turbo", price: "1000ksh/month", NoTodos: `${150} todos`, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbG53p_5vUPSxTW8WkqfprLZZWmI9yFTqXw&usqp=CAU" },
    ];

    this.isActive = false
    this.hidden = true
  }


  handleActive(){

    console.log('i was hit')

    this.isActive = !this.isActive
  }



  async firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

   setTimeout(() => {
    

    this.show = true

   }, 5000) 

  }

 



  static get styles() {
    return [bulmaStyles];
  }

  render() {


    let display

    if(this.show === false){

      display = html`
      
      <div class="card">
   <div class="card-content">
     <div class="media">
       <div class="media-content">
         <p class="title is-4">Welcome to Get it done Todo App Price Packages</p>
       </div>
     </div>
 
     <div class="content">
       <h3 class= "title is-4">Sign Up to get started</h3>
       <progress class="progress is-success" max="100">60%</progress>
     </div>
   </div>
 </div>
      `

    }else{
      display = html`
      ${this.plans.map(
        (plan) => html` 
          <div class="columns is-centered">
            <div class="column is-one-third" style="margin-top: 20px">
              <!-- Your card code: -->
              <div class="card">
                <div class="card-image">
                  <figure class="image">
                    <img
                      src=${plan.image}
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="card-content" style="text-align: center">
                  <div class="title is-4" style="text-align: center">
                    ${plan.name}
                    <br />

                    ${plan.price}
                    <br />

                    ${plan.NoTodos}
                    <br />
                    
                  </div>
                  <button @click=${this.handleActive}  class="button is-info is-outlined">Information</button>
                </div>
        <div class=${this.isActive ? "modal is-active": "modal"}>
  <div class="modal-background"></div>
  <div class="modal-content">
  <div class="box">
  <article class="media">
  <div class="media-left">
      <figure class="image">
        <img src="https://i.gifer.com/P4id.gif" alt="Image" style='width: 200px'>
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Package Information</strong>
          <br>
          <strong>Affordable yet good terms</strong> 
        </p>
        <small>Join Today</small> 

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
      <div style="text-align: center">
      <button @click=${this.handleActive} style='text-align: center' class="button is-danger">Close</button>
      </div>
    </div>
  </article>
</div>

  </div>
</div>
              </div>
            </div>
          </div>
        `
      )}
    `
    }

    

    return html`
      <div class="card">${display}</div>
    `;
  }
}

window.customElements.define("my-element", MyElement);
