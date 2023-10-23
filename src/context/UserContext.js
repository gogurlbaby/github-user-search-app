import React, { createContext, useState } from "react"
import axios from "axios"

export const GitHubContext = createContext()
const UserContext = ({children}) => {
    const [searchTerm,   setSearchTerm] = useState("")
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const GitHubToken = "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"

    const getGitHubUser = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`https://api.github.com/users/${searchTerm}`, {
                headers: {
                    Authorization: `Bearer ${GitHubToken}`
                }
            })
            const data = await response.data
            console.log("data", data)
            setLoading(false)
            setUser(data)
        } catch (error) {
           setError("no result", error)
        } finally {
            setLoading(false)
        }
    }

  return (
    <GitHubContext.Provider value={{
        user, searchTerm, setSearchTerm, loading, error, getGitHubUser
     }}>
     {children}
    </GitHubContext.Provider>
  )
}

export default UserContext