import React from 'react'
import Stars from '../components/elements/Stars'
import { BsDot } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { productsData } from '../utils/data'

function Product() {
    const {id} = useParams()
    const productID = Number(id)
    const product = productsData.find((element) => element.id === productID );

  return (
    <div className='default-page-wrapper'>
        <div className='default-page-container'>
            <div className='flex flex-col'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className='h-96 w-auto object-contain'>
                        <img src={product.url} className='h-96 w-auto object-contain' />
                    </div>
                    <div className='flex flex-col'>
                        <h1>{product.title}</h1>
                        <h2>{product.author}</h2>
                        <div className='flex'>
                            <p>{product.form}</p>
                            <BsDot />
                            <p>{product.edition}</p>
                        </div>
                        <div className='flex'>
                            <Stars score={product.score} />
                            <span>Oceń książkę</span>
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col justify-center items-center'>
                                <h1>Ebook</h1>
                                <h2>EPUB</h2>
                                <h4>29,99zł</h4>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h1>Ebook</h1>
                                <h2>MOBI</h2>
                                <h4>29,99zł</h4>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h1>Ebook</h1>
                                <h2>EPUB</h2>
                                <h4>Wypożycz</h4>
                            </div>
                        </div>
                        {product.form === "rental" ?
                            <button>Wypożycz</button>
                            : <button>Kup teraz</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
