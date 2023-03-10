import React, { useState } from "react";
import '../../styles/FixedKeyADD.css';

function Add() {
  return ( 

  <div className="AddForm">
  <p>Add New </p>
<label >
<input type="text" name="name" className="subscribe-input" placeholder="Name Of the new Fixed-Key"/>

</label>
  <br/>
  <label class="switch">
  <input class="chk" type="checkbox"/>
  <span class="slider"></span>
</label>
  <div className="submit-btn">Add</div>
</div>

  );
}
 
export default Add; 