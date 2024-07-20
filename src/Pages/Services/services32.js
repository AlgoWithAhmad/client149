import React from 'react';
import './services.css';

const Services = () => {
    return (
        <div className="services-container">
            <div className="services-content">
                <div className='services-heading' ><h1>Services</h1></div>
                <div className="service-card">
                    <h2 className="card-title">How can I help ?</h2>
                    <ul className="mission-points">
                        <p>
                            Thank you for taking some time out to look after your needs. It takes courage to reach out, so I will do whatever I can to help you reach where you feel you would like to be. I made my shift to psychotherapy because I saw the benefits of a strong therapeutic relationship in helping others feel comfort when seeking and engaging in therapy which can begin by feeling quite daunting. As a result, a comfortable judgement free atmosphere is what I will work to provide. My areas of expertise lie in stress and anxiety, be it work related, family, friends’, relationships or just general.
                        </p><p>Clients have said that exploring what causes their body and mind to react to triggers in their atmosphere helps them connect their behaviours to their thoughts. Through understanding that link they then feel they can work on mitigating it. I assist by helping that link become clearer as well as helping the client find the best solutions for them to alleviate some of their discomfort.

                        </p>
                    </ul>
                </div>
                <div className="service-card">
                    <h2 className="card-title">The space I provide</h2>
                    <p>I work through a range of different methods and therapeutic interventions depending on your struggles and what you would like to get out of our sessions together. I am trained in Person-centered therapy meaning I strongly believe in leaving autonomy with my client in choosing where they would like our sessions to start and go.</p>
                    <p>As I provide an experience of empathy, honesty and unconditional positive regard, I would like for my client to feel safe to explore their thoughts and feelings and unpack their concerns at their own pace. While unpacking their concerns, my job will be to help facilitate them through their exploration with support and structure when helpful. This will hopefully support clients to make positive and lasting changes that help them feel more in control of their lives again</p>
                </div>
                <div className="service-card">
                    <h2 className="card-title">My abilities</h2>
                    <p>I have training in Person-centered therapy and solution focused therapy. I have incorporated psychodynamic, D-CBT, EMDR and CBT related methods with clients in the past as well. I am constantly updating my knowledge through available CPD (continued professional development) courses and reading material to help ensure you are receiving the best quality in therapy I can provide. Furthermore, as a member of the BACP I make it a point to work with integrity and honesty adhering to their code of ethics for good practice and counselling ensuring I put your needs above my own (more information can be found on their website or by contacting me).</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
