import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>About Us</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        
            <div className="about"><p> The Shelter Pet Project is the result of a collaborative effort between two leading animal welfare groups, the Humane Society of the United States and Maddie’s Fund, and the leading producer of public service advertising (PSA) campaigns, The Ad Council.
              
              Our goal is to make shelters the first place potential adopters turn when looking to get a new pet, ensuring that all healthy and treatable pets find loving homes. We do this by breaking down misconceptions surrounding shelter pets and celebrating the unique bond between every shelter pet and parent.'</p>
              <p>Ask anyone who has adopted a pet and they’ll share with you their story of love, fun and companionship. Why? Because shelter pets are amazing!

Within the next year, millions of cats and dogs will enter shelters and rescue groups nationwide. In that time, even more people intend to bring a pet into their homes, which is why we’re working to show why shelters should be your first choice and preferred way to acquire a pet.

Remember: Dogs and cats who are taken into the care of shelters and rescue groups each year find themselves homeless through no fault of their own; “moving” and “landlord issues” are the top reasons people give up their pets.

This means shelters and rescues are full of loving, spayed or neutered, vaccinated and often trained pets who are just waiting to meet you! By adopting a cat or dog from a shelter or rescue, you can rest assured that you have not supported the puppy mill industry.

Adopting a pet from a shelter or rescue is a win-win, for you and the pet. So, what are you waiting for? Begin your search for cats and dogs available for adoption near you today.

#AdoptPureLove</p></div>

              <ul className='cards__items'>
            <CardItem
              src='images/a.jpeg'
              text='I found fenris on this website and adopted her at 5 months old, continuing a search on the website for my parents I found her brother at the same kennel 2 1/2 months later and adopted him immediately they are both twins with hetorochromia. They have changed my life for the better and keep my heart full.'
             
              path='#'
            />
            <CardItem
              src='images/front2.jpg'
              text='joey is a family i never had. my life is better because of him.'
              label='Luxury'
              path='#'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/front3.jpg'
              text='There is no better feeling that to wakeup with singing bird'
              label='Mystery'
              path='#'
            />
            <CardItem
              src='images/front4.jpg'
              text= 'if you love hourse riding you would get hourse like us.'
              label='Adventure'
              path='#'
            />
            <CardItem
              src='images/front5.jpg'
              text='i cant imagine my life with out my cats. i adapteed one cat then another... i now have 4 of them. they are the joy of my life.  '
              label='Adrenaline'
              path='#'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;