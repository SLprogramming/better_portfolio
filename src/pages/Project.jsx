import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
const Project = () => {
    const {id} = useParams()
  return (<>
    <div>Project</div>
    {id}
  </>
  )
}

export default Project