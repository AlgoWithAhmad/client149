import React from 'react';
import './services.css';

import Tired from '../../assets/tiredness.png'
import Overehelmed from '../../assets/overwheled.png'
import social from '../../assets//social.png'
import Hopelessness from '../../assets/hopelessness.png'
import Apathy from '../../assets/apathy.png'
import resentment from '../../assets/resentment.png'


const signs = [
    { index: 1 , title: 'Tiredness', definition: 'The physical symptom can often accompany mental health distress' , image: Tired },
    { index: 2, image: Overehelmed, title: 'Overwhelmed', definition: 'You might feel like you have too many issues to cope with and feel submerged by your stress.' },
    { index: 3, image: social, title: 'Social Withdrawal', definition: 'Have you started avoiding people and activties that you previously enjoyed.' },
    { index: 4, image: Hopelessness, title: 'Hopelessness', definition: 'Feeling like you have no motivation or no future.' },
    { index: 5, image: Apathy, title: 'Apathy', definition: 'A loss of interest in usuak activities or life in general.' },
    { index: 6, image: resentment, title: 'Disproportionate rage or resentment', definition: 'If feelaing of rage within you do not feel like they are passing.' }

]

const Services = () => {
    return (
        <div className="services-container">
            <section className="quote-section">
                {/* <h2>Inspirational Quote</h2> */}
                <h1>"Move on from distess, understand your feelings and work to live a more fulfilling life."</h1>
            </section>

            <section className="signs-section">
                <h4 style={{ color: 'orange' }}>Services</h4>
                <h3>Possible signs you may wish to contact a therapist.</h3>
                <div className="signs-grid">
                    {signs.map((sign, index) => (
                        <div key={index} className="sign-card">
                            <div className="sign-header">
                                <div className="logo-div"><img className="sign-logo" src={sign.image} alt={sign.title} /></div>
                                <h5 className="sign-title">{sign.title}</h5>
                            </div>
                            <p className="sign-definition">{sign.definition}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cards-section">
                <div className="cards-container">
                    <div className="card">
                        <h3>How can I help ?</h3>
                        <p>
                            Thank you for taking some time out to look after your needs. It takes courage to reach out, so I will do whatever I can to help you reach where you feel you would like to be. I made my shift to psychotherapy because I saw the benefits of a strong therapeutic relationship in helping others feel comfort when seeking and engaging in therapy which can begin by feeling quite daunting. As a result, a comfortable judgement free atmosphere is what I will work to provide. My areas of expertise lie in stress and anxiety, be it work related, family, friends’, relationships or just general.
                        </p><p>Clients have said that exploring what causes their body and mind to react to triggers in their atmosphere helps them connect their behaviours to their thoughts. Through understanding that link they then feel they can work on mitigating it. I assist by helping that link become clearer as well as helping the client find the best solutions for them to alleviate some of their discomfort.

                        </p>
                    </div>
                    <div className="card">
                        <h3>The space I provide</h3>
                        <p>I work through a range of different methods and therapeutic interventions depending on your struggles and what you would like to get out of our sessions together. I am trained in Person-centered therapy meaning I strongly believe in leaving autonomy with my client in choosing where they would like our sessions to start and go.</p>
                        <p>As I provide an experience of empathy, honesty and unconditional positive regard, I would like for my client to feel safe to explore their thoughts and feelings and unpack their concerns at their own pace. While unpacking their concerns, my job will be to help facilitate them through their exploration with support and structure when helpful. This will hopefully support clients to make positive and lasting changes that help them feel more in control of their lives again</p>

                    </div>
                    <div className="card2">
                        <h3>My abilities</h3>
                        <p>I have training in Person-centered therapy and solution focused therapy. I have incorporated psychodynamic, D-CBT, EMDR and CBT related methods with clients in the past as well. I am constantly updating my knowledge through available CPD (continued professional development) courses and reading material to help ensure you are receiving the best quality in therapy I can provide. Furthermore, as a member of the BACP I make it a point to work with integrity and honesty adhering to their code of ethics for good practice and counselling ensuring I put your needs above my own (more information can be found on their website or by contacting me).</p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
