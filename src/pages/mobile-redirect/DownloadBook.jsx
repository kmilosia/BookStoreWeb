import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axiosClient from '../../utils/api/axiosClient'
import Spinner from '../../components/elements/Spinner'

function DownloadBook() {
    const [params, setParams] = useSearchParams()
    const paramToken = params.get('token')  
    const paramId = params.get('id')  
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('Sprawdzanie danych..')
    const downloadBookFile = async () => {
        try {
            setMessage('Pobieranie pliku...')
            const response = await axiosClient.get(`/Library/download/${paramId}`, {
                headers: {
                    'Authorization': `Bearer ${paramToken}`,
                },
                responseType: 'arraybuffer',
            })
            const blob = new Blob([response.data], { type: 'application/pdf' })
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = 'book.pdf'
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            setLoading(false)
            setMessage('Plik został pobrany')
        } catch (error) {
            console.log(error)
            setLoading(false)
            setMessage('Błąd podczas pobierania pliku')
        }
    }
    useEffect(() => {
        if(paramToken && paramId){
            downloadBookFile()
        }
    },[paramToken])
  
  return (
    <div className='default-page-wrapper'>
        <div className='default-page-container min-h-[80vh] flex items-center justify-center flex-col'>
            {loading && <Spinner />}
            <h1>{message}</h1>
        </div>
    </div>
  )
}

export default DownloadBook
