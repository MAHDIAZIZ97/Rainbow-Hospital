import React from 'react'

const NoticeList = () => {
  return (
    <div>
    <h3>Available Notices:</h3>
        {notices.map((notice) => (
            <div key={notice.id} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
                <h4>{notice.noticeName}</h4> {/* Display label */}
                <p>{notice.fileName}</p>
                <iframe src={`data:application/pdf;base64,${notice.fileData}`} width="400" height="500"></iframe>
                <br />
                <button onClick={() => handleDelete(notice.id)}>Delete</button>
            </div>
        ))}
        </div>
  )
}

export default NoticeList
