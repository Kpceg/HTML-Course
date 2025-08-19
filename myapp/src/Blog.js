import React from 'react'
import './Blog.css'
import GC from "./Assets/GC.png"

function Blog() {
    const heading="How to Start Learning to code in 30 days"
    const author="Dr.Guduvanchery Govindasamy"
    var description="In today's world , its very important to learn coding. In this blog post you will learn how to do it in 30 days."

  return (
    <div class='container'>
        <h1> {heading} </h1>
        <sub> - By {author} </sub>
        <p> {description}  </p> 
        <img src={GC} alt="Image of Coding" class="image"></img>
    </div>
  )
}

export default Blog