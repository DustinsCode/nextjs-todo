
export default function handler(req, res) {
    let dummyData = [
        {
            id: 0,
            completed: false,
            text: "Do the thing"
        },
        {
            id: 1,
            completed: false,
            text: "Do the thing"
        },
        {
            id: 2,
            completed: false,
            text: "Do the thing"
        },
        {
            id: 3,
            completed: false,
            text: "Do the thing"
        },
        {
            id: 4,
            completed: false,
            text: "Do the thing"
        }
    ]

    if (req.method === 'POST') {
        //TODO: do something with incoming request
        
        res.status(200).json(JSON.stringify(dummyData))
    }else if (req.method === 'GET') {
        // res.status(200).json({name: "correct"})
        res.status(200).json(JSON.stringify(dummyData))
    }
}
  