
/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
import { authClient } from './../../lib/sanity';

export default async (req, res) => {
    const { formContents } = req.body;
    console.log(req.body)

    if (!req.body.email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const { organization, firstName, lastName, email, address, phone } = req.body
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)

    try {

        const doc = {
            _type: 'bulkOrder',
            title: `${organization}-${firstName}-${lastName}`,
            status: 'received',
            dateRecieved: today,
            organization,
            firstName,
            lastName,
            email,
            address,
            phone
        };

        const emailResult = await authClient.create(doc)
        const result = await axios.post(`http:localhost:3000/api/send-email`,
            { ...emailResult }
        )
        return res.status(201).json(result)

    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
};