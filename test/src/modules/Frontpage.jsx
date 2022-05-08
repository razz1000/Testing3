import { useEffect } from "react"
import {useState} from "react"
import QuotesSection from "./QuotesSection"

let Frontpage = () => {
    
    const [quotes, setQuotes] = useState([])

    let fetchData = async () => {
        
        let response = await fetch("https://the-dune-api.herokuapp.com/quotes/50")
        if (response.ok) {
            let body = await response.json()
            console.log(body)
            setQuotes(body)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <div>
        <QuotesSection quotes={quotes}/>
        </div>
    )
}

export default Frontpage 