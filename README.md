<p align="center">
  <img src="https://i.postimg.cc/cCj31P7X/avatars-zw-Nz-H3c8szb-ZEmg-D-h-APmvw-t500x500.jpg" width="500" height="200">
  <h3 align="center">Developer:
    <a href="https://github.com/MDasch22"> Michael Dasch </a>
  </h3>
  <p align='center'>
    ·
    <a href="https://waveyy.herokuapp.com/">
      Waveyy
    </a>
    ·
  </p>
  <p align="center">Project Advisor: Brandon Laursen</p>
  <p align='center'>
    Explore the docs to see how to get 
    <a href="https://github.com/MDasch22/Waveyy/wiki">started</a>
    --->
  </p>
  <p align="center"> Screenshots from live site 
     <img src="https://user-images.githubusercontent.com/95194326/177226054-cdf32245-5137-4e1d-be79-f436870f039b.png" />
     <img src="https://user-images.githubusercontent.com/95194326/177226290-4d3b8a45-c390-4142-b605-fff846af5f84.png" />
  </p>
</p>

<details align="center 'open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li>
          <a href="#technologies-used">Technologies Used</a>
        </li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
      <ul>
        <li><a href="#beaches">Beaches</a></li>
        <li><a href="#reviews">Reviews</a></li>
      </ul>
    <li><a href="#challenges-faced">Challenges</a></li>
    <li><a href="#code-snippets">Code Snippets</a></li>
  </ol>
</details>

## Overview
  With so many beaches around the world... how do you know where to start looking? Heres why Waveyy would be a great place for you to start
  
  ***What we offer***:
  - An evergrowing library of beaches all over the world. 
  - Users will have acces to viewing beaches that might be of interest to them for future travel destinations. 
  - Users will have the ability to leave rating and a review for a specific beach, which then gets posted allowing all other users to view your thoughts.
  
  ### Technologies Used
  
  - With the given task, here a list of technologies that were used in order to complete this project...
  
    - [Express](http://expressjs.com/)
    - [React](https://reactjs.org/)
    - [Heroku](https://id.heroku.com/login)
    - [Redux](https://redux.js.org/)
    - [PostgreSQL](https://www.postgresql.org/)
    - [Sequelize](https://sequelize.org/)


## Features 
  Here are two features that I believe are worth showing off...
  
  ### Beaches 
  With our beaches, the user will have the ability to access all the beaches that are currently in our databases at that very moment. If the user is registered and logged in, the user will be able to create a new beach to their desires which will then get posted to our database for all other users to view. The creator of the specific beach will have the ability to either delete or edit their desired beach which gives them the oppertunity to correct any mistakes that were possibly made or just gives the user to ability to get rid of the beach entirely if they so please. There is no limit to the amount of beaches that can be added so add as many as your heart desires. 
  
  ### Reviews 
  If the user is registered and logged in into the site, they will have access to every beaches review section, where there they will be able to view the thoughts of previous beach visitors in order to help plan their next vacation destination. The user will have the ability to leave a review on that specific beach which then gets posted to the reviews table for all other users of Waveyy to view. Only reviews that the user created will be able to be tampered with, for example the user is able to delete a review if they so please. 
    

## Challenges Faced
  With this being my very first solo project through the App Academy curriculm, bumps in the road were almost inevitable. Overall this project was a huge learning expierence for me personally. It was also extremley exciting because it was a chance for me, as a developer, to showcase what I have learned throughout this bootcamp and really put my skills to the test. Below you will find 2 challenges in particular that I faced along the way and how I was able to overcome them. 
  
  1. The biggest challenge faced was managing stress and time. As mentioned above, this was my first solo project and I felt I was put into a position where I couldnt really rely on a partner to help me complete a particular task if I wasnt up for it. I struggled heavily with understanding Redux and just the overal flow of how I should go about the project. Was a bit hard for me to understand conceptually what was going on behind the scenes with Redux in particular and just how exactly everything was connecting with my database. Over coming this obstacle was no easy task and honestly the stress really never went away but what I found most helpful was asking for help from my TA's when needed, and really just taking a step back to understand what exactly was going on and how I needed to get to my end goal. In the end  I am extremely proud of the work that I was able to complete with the given time frame.
  
  2. One thing I found challenging towards the begining of the project was, asking a good question. The cohort is not just a group of 10 individuals, there are many peopel in class that are needing help with only a limited amount of help to actually go around. I found myself struggling to even ask a question because sometimes I didnt know where to start. Through stuggle comes glory because the more I struggled, the more I was able to understand what was going on which then led to better questions being formed. I found myself deep diving on the web to try to better my understanding on the topics being presented which overall allowed me to better my problem solving skills. 


## Code Snippets 
Below are some code snippets that showcase my progess through the program

1. Image Slider 
```  
useEffect(() => {
    if(autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  },[current])


  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='leftArrow' onClick={prevSlide}/>
      <FaArrowAltCircleRight className='RightArrow' onClick={nextSlide}/>
      {SliderData.map((slide, index) => {
        return (
            <div className={index === current ? 'slide-active': 'slide'} key={index}>

              {index === current && (
                   <img src={slide.image} alt='travelImg' className='sliderImg'></img>
                )}
            </div>
          )
      })}
    </section>
  )
}
```
2. Login form 
```
<form onSubmit={handleSubmit} className='loginForm'>
      <div id='loginGif'>
        <img id='loginGif' src="https://i.pinimg.com/originals/02/86/c9/0286c975356200b960862134bfc666e3.gif" alt="loginGif"/>
        <h2 className="loginTitle">Log in to Waveyy</h2>
      </div>
      <label id='signUpRed'>New to Waveyy?
        <Link id='signUpLink' to="/signup" onClick={signUp}>
          <label>Sign Up</label>
        </Link>
      </label>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <div className="logInBttn">
        <button id='loginFormBttn' type="submit">Log In</button>
        <button id='loginGuestBttn' onClick={demoSubmit}>Continue as Guest</button>
      </div>
    </form>
 ```
5-Star rating
```
<label className="ratingLabel">Rating: </label>
          <div className="star-rating-container">
            {[...Array(5)].map((star, index) => {
              const ratingVal = index + 1;

              return (
                <label key={index}>
                  <input
                    type="radio"
                    id="radioBttn"
                    name="rating"
                    value={ratingVal}
                    onClick={() => setRating(ratingVal)}
                  />
                  <FaStar
                    className="star"
                    color={
                      ratingVal <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
                    size={20}
                    onMouseEnter={() => setHover(ratingVal)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
            <label> {!rating ? 0 : rating} / 5</label>
```
      

   

