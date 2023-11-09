import React from 'react';
import librarycontact from '../assets/backgrounds/library-contact-page.jpg';
import readingImage from '../assets/pages/home-reading.png';
import bookshopImage from '../assets/pages/bookshop.png';
import bookshelfImage from '../assets/pages/bookshelf.png';
import audiobookImage from '../assets/pages/audiobook.png';
import ElementScrollButton from '../components/buttons/ElementScrollButton';
import AboutElement from '../components/page-elements/AboutElement';

function About() {
  return (
    <div className='default-page-wrapper'>
      <div className='relative'>
        <div className='w-full absolute bottom-[-1.2rem] z-20 flex items-center justify-center'>
          <ElementScrollButton elementID='#about'/>
        </div>
        <img src={librarycontact} className='w-full h-96 object-cover object-center' />
        <div className='w-full h-96 bg-midnight-950/70 top-0 absolute z-0' />
        <div className='w-full h-96 flex flex-col items-center justify-center absolute top-0 z-10 px-5 lg:px-0'>
            <h1 className='font-semibold text-4xl lg:text-5xl text-white text-center'>O naszym sklepie</h1>
        </div>
      </div>
        <div id='about' className='flex flex-col px-10 py-10'>
        <AboutElement isReversed={false} title="Poczuj się jak w domu ze swoją wirtualną biblioteką" content="W naszej bibliotece masz dostęp do swoich kupionych pozycji oraz wypożyczonych e-booków w jednym miejscu na zawsze!"
        path='/biblioteka' button="Przejdź do biblioteki" imgURL={bookshelfImage} />
        <AboutElement isReversed={true} title="Twoja ulubiona książka zawsze pod ręką" content="Nie każda książka może zmieścić się do Twojej kieszeni, za to każdy smartphone tak, dlatego też tak przyjemne jest posiadanie swojej ulubionej książki w swoim telefonie!"
        path='/sklep' button="Przejdź do e-booków" imgURL={audiobookImage} />
        <AboutElement isReversed={false} title="Sklep od pasjonatów dla pasjonatów książek" content="Posiadamy ogromny asortyment na książki fizyczne, bo wiemy jaką przyjemność sprawia czytanie, pachnącej nowością książki którą możesz postawić w swojej domowej kolekcji!"
        path='/ksiazki' button="Przejdź do książek" imgURL={readingImage} />
        <AboutElement isReversed={true} title="Nasz sklep jest całkowicie wirtualny" content="W erze komputeryzacji i wygody jaką przynoszą zakupy online, poświęcamy całą uwagę naszemu"
        path='/sklep' button="Przejdź do sklepu" imgURL={bookshopImage} />     
    </div>
    </div>
  );
}

export default About;
