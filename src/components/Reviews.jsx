import React from 'react';
import Container from './Container';
import Sub from './Sub';
import Icon from './Icon';
import Title from './Title';

const Reviews = () => {
  return (
    <div>
        <div>
            <Icon iconURL='src/images/bg-quotes.png' />
            <Container><Sub>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.</Sub></Container>
            <Container>
                <Icon iconURL='src/images/profile-1.jpg' />
                <Title>Satish Patel</Title>
                <Sub>Founder & CEO, Huddle</Sub>
            </Container>
        </div>
        <div>
            <Icon />
            <Container><Sub>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.</Sub></Container>
            <Container>
                <Icon iconURL='src/images/profile-2.jpg' />
                <Title>Satish Patel</Title>
                <Sub>Founder & CEO, Huddle</Sub>
            </Container>
        </div>
        <div>
            <Icon />
            <Container><Sub>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.</Sub></Container>
            <Container>
                <Icon iconURL='src/images/profile-3.jpg' />
                <Title>Satish Patel</Title>
                <Sub>Founder & CEO, Huddle</Sub>
            </Container>
        </div>
    </div>
  )
}

export default Reviews