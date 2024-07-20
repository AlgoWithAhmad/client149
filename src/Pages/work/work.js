import React from 'react';
import './work.css';

const Work = () => {
  return (
    <div className="about-work-container">
      <h1>My Work</h1>
      <section>
        {/* <h2>Currently Working</h2> */}
        <div className="work-cards">
          <div className="work-card work-card1">
            <h3>Actsfast</h3>
            <p>Right now offering my skills to <strong>Actsfast</strong> , an organization dedicated to assisting families devastated by child sexual abuse and obscene photos. My responsibilities are broad, addressing difficulties such as relationship issues, sexual abuse and trauma, low self-esteem, family conflict, and adultery.</p>
          </div>
          <div className="work-card work-card2">
            <h3>Well-Minds</h3>
            <p>Currently collaborating with <strong>Well Minds</strong> Online, a company dedicated to providing accessible and inexpensive therapy via phone and video conversations. My conversations here frequently center on issues such as racism, trauma, sexuality, divorce, gendered expectations, parenting, OCD, and mourning.</p>
          </div>
        </div>
      </section>
      <section>

        <div className="work-cards">
          <div className="work-card work-card3">
          <h3>Previous collaborations</h3>
            <ul><li><p> I have worked with <strong>Childline</strong>, and <strong>The Listening Ear</strong> both organisations catering to young adult and teenage mental health issues. Here I worked both online and face-to-face on childhood trauma, depression, anxiety, life transitions, eating disorders, suicidal ideation, stress and self-esteem.</p> 
           </li><li> <p>Carried out certain tasks at <strong>Fatima Memorial Hospital</strong>.
            </p>
            </li> 
            </ul> 
          </div>
          
        <div className="work-cards">
          <div className="work-card work-card5">
            <h3>My Research</h3>
            <p>finishing a paper on gender issues in <strong>Pakistan, Afghanistan, and India </strong> and their impact on the unwillingness to seek therapeutic treatment. I've worked with a variety of charities and organisations, all of which have equipped me with the information and skills I currently employ in my own practice, leaving me confident in my abilities should you want to approach me further.
            </p>
          </div>
        </div> 
        </div>
      </section>
      <section>
        {/* <h2>My Research</h2>
        <div className="work-cards">
          <div className="work-card work-card5">
            <h3>Gender issues</h3>
            <p>finishing a paper on gender issues in <strong>Pakistan, Afghanistan, and India </strong> and their impact on the unwillingness to seek therapeutic treatment. I've worked with a variety of charities and organisations, all of which have equipped me with the information and skills I currently employ in my own practice, leaving me confident in my abilities should you want to approach me further.
            </p>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Work;
