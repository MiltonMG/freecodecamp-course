import React from 'react';
import '../../styles/globals/Header.css';



export const Header = () => {


  return (
    <>
      <div class="nav-menu">
        <label for="nav-toggle" class="nav-toggle-label"></label>
      </div>

      <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>	

      <ul id="menu-topo">
        <li class="nav-item"><a href="/">Home</a></li>
        <li class="hide">•</li>
        <li class="nav-item"><a href="/click">Click</a></li>
        <li class="hide">•</li>
        <li class="nav-item"><a href="/todo">ToDo</a></li>
        <li class="hide">•</li>
        <li class="nav-item"><a href="/testimonials">Testimonials</a></li>
      </ul>
    </>
  );
}
