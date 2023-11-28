import React from 'react';
import ElementScrollButton from '../components/buttons/ElementScrollButton';
import AboutElement from '../components/page-elements/AboutElement';
import { useEffect } from 'react';
import { scrollTop } from '../utils/functions/scrollTop';

function About() {
  useEffect(() => {
    scrollTop()
},[])
  return (
    <div className='default-page-wrapper'>
      <div className='relative'>
        <div className='w-full absolute bottom-[-1.2rem] z-20 flex items-center justify-center'>
          <ElementScrollButton elementID='#about'/>
        </div>
        <img src='https://iili.io/JCJNZXI.jpg' alt='Library' className='w-full h-40 lg:h-96 object-cover object-center' />
        <div className='w-full h-40 lg:h-96 bg-midnight-950/70 top-0 absolute z-0' />
        <div className='w-full h-40 lg:h-96 flex flex-col items-center justify-center absolute top-0 z-10 px-5 lg:px-0'>
            <h1 className='font-semibold text-3xl lg:text-5xl text-white text-center'>O naszym sklepie</h1>
        </div>
      </div>
        <div id='about' className='default-page-container'>
        <AboutElement isReversed={false} title="Poczuj się jak w domu ze swoją wirtualną biblioteką" content="W naszej bibliotece masz dostęp do swoich kupionych pozycji oraz wypożyczonych e-booków w jednym miejscu na zawsze!"
        path='/biblioteka' button="Przejdź do biblioteki" imgURL='https://iili.io/JCJhUfs.png' />
        <AboutElement isReversed={true} title="Twoja ulubiona książka zawsze pod ręką" content="Nie każda książka może zmieścić się do Twojej kieszeni, za to każdy smartphone tak, dlatego też tak przyjemne jest posiadanie swojej ulubionej książki w swoim telefonie!"
        path='/ebooki' button="Przejdź do ebooków" imgURL='https://iili.io/JCJhP5l.png' />
        <AboutElement isReversed={false} title="Sklep od pasjonatów dla pasjonatów książek" content="Posiadamy ogromny asortyment na książki fizyczne, bo wiemy jaką przyjemność sprawia czytanie, pachnącej nowością książki którą możesz postawić w swojej domowej kolekcji!"
        path='/ksiazki' button="Przejdź do książek" imgURL='https://iili.io/JCJhrgf.png' />
        <AboutElement isReversed={true} title="Nasz sklep jest całkowicie wirtualny" content="W erze komputeryzacji i wygody jaką przynoszą zakupy online, poświęcamy całą uwagę naszemu"
        path='/sklep' button="Przejdź do sklepu" imgURL='https://iili.io/JCJh6J4.png' />     
    </div>
    </div>
  );
}

export default About;
