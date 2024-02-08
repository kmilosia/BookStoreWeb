import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axiosClient from '../../utils/api/axiosClient'
import Spinner from '../../components/elements/Spinner'

function DownloadInvoice() {
    const [params, setParams] = useSearchParams()
    const paramToken = params.get('token')  
    const paramId = params.get('id')  
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('Sprawdzanie danych..')
    const downloadInvoice = async () => {
        try {
            setMessage('Pobieranie pliku...')
            const response = await axiosClient.get(`/Order/Invoice?orderId=${paramId}`, {
                headers: {
                    'Authorization': `Bearer ${paramToken}`,
                    'Content-Type': 'application/json',
                },
                responseType: 'arraybuffer',
            })
            const blob = new Blob([response.data], { type: 'application/pdf' })
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = 'invoice.pdf'
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            setLoading(false)
            setMessage('Plik został pobrany')
        } catch (error) {
            console.error(error)
            setLoading(false)
            setMessage('Błąd podczas pobierania pliku')
        }
    }
    useEffect(() => {
        if(paramToken && paramId){
            downloadInvoice()
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

export default DownloadInvoice
