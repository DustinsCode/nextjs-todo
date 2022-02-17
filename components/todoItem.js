import { useEffect } from "react"

export default function TodoItem({item}) {

    useEffect(() => {
        console.log(item)
    }, [])

    return(
        <div>
            {item.text}    
        </div>
    )
}