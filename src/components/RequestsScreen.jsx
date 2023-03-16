import React, { useState, useEffect } from 'react'

const RequestsScreen = () => {
  const [requests, setRequests] = useState([])

  const getRequests = async () => {
    try {
      const response = await fetch('http://localhost:5000/requests')
      const jsonData = await response.json()

      setRequests(jsonData)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getRequests()
  }, [])
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {requests.map((request) => (
        <div className="mt-2 flex flex-col justify-between" key={request.id}>
          <div className="mr-10 bg-red-400">{request.start_date}</div>
          <div className="mr-10 bg-red-400">{request.end_date}</div>
          <div className="">{request.house_id}</div>
          <div className="">{request.user_id}</div>
        </div>
      ))}
    </div>
  )
}

export default RequestsScreen
