import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import self from '../photo/self.png';
import manag from '../photo/manag.png';
import green from '../photo/green.png';
import all from '../photo/all.png';
import { Navbar } from '../components/Navbar';
import "../styles/Blog.css";
import { Footer } from '../components/Footer';

export default function BlogsPage() {
    return (
        
       <div>
           <Navbar/>
        <div>
            <img className="blog-photo" src={all} alt="Insta" srcSet="" width="100%" height="30%" />
            

<CardGroup>
      <Card>
        <Card.Img src={self} alt="Insta" srcSet="" />
        <Card.Body>
          <Card.Title><h1>What does self-love mean?</h1></Card.Title>
          <Card.Text>
          Self-love is the foundation of a healthy, happy, and fulfilling life. It’s the cornerstone upon which our well-being is built and the key to fulfilling relationships with others. So what exactly is self-love, and how do we cultivate it? Defining Self-Love Self-love is an attitude of appreciation and respect for oneself. It reflects our relationships with having this one precious…
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img src={manag} alt="Insta" srcSet="" />
        <Card.Body>
          <Card.Title><h3>Resisting Managing Stress</h3></Card.Title>
          <Card.Text>
          Have you become a good stress manager? Or are you stuck dealing with life’s challenges the same way you have been for years –not very well? Are you resisting managing stress but don’t know why? If you are stuck and unable to manage the different sources of stress in your life, allow me to offer another point of view to…{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img src={green} alt="Insta" srcSet="" />
        <Card.Body>
          <Card.Title>How to Become More Mindful in Your Everyday Life</Card.Title>
          <Card.Text>
          Mindfulness has become a popular topic in recent years, with more and more people looking to integrate it into their lives. But what exactly is Mindfulness, and how can you become more mindful in your everyday life? What is Mindfulness Mindfulness is the practice of present moment awareness. It is about living in the here and now and being fully…
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    
            
        </div>
       <Footer/>
        </div>
    )
}
