
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
        let item = req.body
        let newItem = {
            id: dummyData.length,
            completed: false,
            text: item.text
        }
        res.status(200).json(JSON.stringify([...dummyData, newItem]))
    }else if (req.method === 'GET') {
        res.status(200).json(JSON.stringify(dummyData))
    }
}
  