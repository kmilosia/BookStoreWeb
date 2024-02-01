import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getValidToken } from '../utils/functions/getValidToken'
import axiosClient from '../utils/api/axiosClient'
import PageLoader from '../components/elements/PageLoader'
import { Document, Page, pdfjs } from 'react-pdf'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function FileReader() {
    const {id} = useParams()
    const bookID = Number(id)
    const [access, setAccess] = useState(null)
    const [loading, setLoading] = useState(true)
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [pdfBlob, setPdfBlob] = useState(null)
    const [pageWidth, setPageWidth] = useState(0)
    const pageWrapperRef = useRef(null) 
    const getBookFile = async (id) => {
        try {
            const token = getValidToken()
            const response = await axiosClient.get(`/Library/download/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                responseType: 'arraybuffer',
            })
            const blob = new Blob([response.data], { type: 'application/pdf' })
            setPdfBlob(blob)
            setLoading(false)
            setAccess(true)
        } catch (error) {
            console.log(error)
            setAccess(false)
            setLoading(false)
        }
    }
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft' && pageNumber > 1) {
            setPageNumber(pageNumber - 1)
            window.scrollTo(0,0)
        }
        if (event.key === 'ArrowRight' && pageNumber < numPages) {
            setPageNumber(pageNumber + 1)
        }
    }
    useEffect(() => {
        if(bookID){
            getBookFile(bookID)
        }
    },[])
    window.addEventListener('keydown', handleKeyDown)
    useEffect(() => {
        const updatePageWidth = () => {
            const currentRef = pageWrapperRef.current
            if (currentRef) {
                const width = currentRef.getBoundingClientRect().width
                setPageWidth(width)
            }
        }
        window.addEventListener('resize', updatePageWidth)
        updatePageWidth()
        return () => {
            window.removeEventListener('resize', updatePageWidth)
        }
    }, [pageWrapperRef.current])
    useEffect(() => {
        console.log(pageWidth);
    },[pageWidth])
  return (
    loading ? <PageLoader /> :
    <div className='default-page-wrapper'>
    <div className='default-page-container'>
    {access ?
     <div ref={pageWrapperRef}>
     <Document file={pdfBlob} onLoadSuccess={onDocumentLoadSuccess} onLoadError={(error) => console.log('Błąd podczas pobierania PDF:', error)}>
        <Page pageNumber={pageNumber} width={pageWidth}/>
     </Document>
     <div className='flex flex-row items-center justify-center mt-2'>
        {pageNumber !== 1 &&
        <button onClick={() => {setPageNumber(pageNumber - 1);window.scrollTo(0,0)}}><IoMdArrowRoundBack size={20} className='text-purple-400' /></button>}
        <p className='text-light text-sm mx-1 text-purple-400'>Strona {pageNumber} z {numPages}</p>
        {pageNumber < numPages &&
        <button onClick={() => {setPageNumber(pageNumber + 1);window.scrollTo(0,0)}}><IoMdArrowRoundForward size={20} className='text-purple-400'/></button>}
     </div>
    </div>
    :
    <div className='items-center justify-center flex flex-col min-h-[80vh]'>
        <img src='https://iili.io/Jl2XNBn.png' width={200} height={200} alt='Access key icon'/>
        <h1 className='text-3xl mt-3'>Brak dostępu do pliku</h1>
    </div>
    }
    </div>
    </div>
  )
}

export default FileReader
