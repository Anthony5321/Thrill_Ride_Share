const About = () => {
  return (
    <div className="about">
      <h1>About Page</h1>
      <span>
        <p>
          Welcome to our theme park and ride database! Our website is designed
          to help users find information about theme parks and rides from all
          around the world. Whether you're planning a family vacation or just
          want to explore the world of amusement parks, our website has
          everything you need to know.
        </p>
        <p>
          At our website, users can add new theme parks and rides to our
          database, making it a comprehensive resource for all things related to
          amusement parks. Our goal is to provide users with accurate and
          up-to-date information about every theme park and ride in the world,
          so that they can make informed decisions about where to go and what
          todo.
        </p>
        <p>
          Our website is user-friendly and easy to navigate, with a search
          function that allows users to filter their results based on location,
          type of ride, and other important factors. Our team is dedicated to
          providing the best possible experience for our users, and we are
          always working to improve our website and add new features. We believe
          that everyone should have the opportunity to enjoy the thrill of
          amusement parks, and our website is designed to make that a reality.
        </p>
        <p>
          Thank you for visiting our website, and we hope that you find the
          information here helpful in planning your next theme park adventure!
        </p>
      </span>
      <div className="Josh-profile">
        <img className='josh' src={'https://i.imgur.com/rtAwtJu.jpg'} alt="" />
        <a className='josh-git' href="https://github.com/joshjumelet" target="blank">
          <img className='github' style={{width: 10, height: 10}} src="https://i.imgur.com/AjmoOeq.png"alt="github"/>
        </a>
        <a className='josh-linkedIn' href="https://www.linkedin.com/in/joshua-jumelet/" target="blank">
          <img className='linkedIn' style={{width: 20, height: 20}} src="https://i.imgur.com/N4ceP5A.png"alt="linkedIn"/>
        </a>
        </div>
        <div className="ting-ting-profile">
        <img className='ting-ting' src={'https://i.imgur.com/otWjrs9.jpg'} alt="" />
        <a className='ting-ting-git' href="https://github.com/ttqiu" target="blank">
          <img className='github' style={{width: 10, height: 10}} src="https://i.imgur.com/AjmoOeq.png"alt="github"/>
        </a>
        <a className='ting-ting-linkedIn' href="https://www.linkedin.com/in/ting-ting-qiu-062587246/" target="blank">
          <img className='linkedIn' style={{width: 20, height: 20}} src="https://i.imgur.com/N4ceP5A.png"alt="linkedIn"/>
        </a>
        </div>
        <div className="anthony-profile">
        <img className='anthony' src={'https://i.imgur.com/sBLPp85.jpg'} alt="" />
        <a className='anthony-git' href="https://github.com/Anthony5321" target="blank">
          <img className='github' style={{width: 10, height: 10}} src="https://i.imgur.com/AjmoOeq.png"alt="github"/>
        </a>
        <a className='anthony-linkedIn' href="https://www.linkedin.com/in/anthony-harpestad-16322a257/" target="blank">
          <img className='linkedIn' style={{width: 20, height: 20}} src="https://i.imgur.com/N4ceP5A.png"alt="linkedIn"/>
        </a>
      </div>
    </div>
  )
}

export default About
