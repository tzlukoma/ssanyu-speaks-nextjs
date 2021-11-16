
/* eslint-disable import/no-anonymous-default-export */
import { authClient } from './../../lib/sanity';

export default async (req, res) => {
    const { formContents } = req.body;
    console.log(req.body)

    if (!req.body.email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const { organization, firstName, lastName, email, address, shippingAddress, numberOfBooks, phone } = req.body
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
            shippingAddress,
            numberOfBooks: parseInt(numberOfBooks),
            phone
        };

        const result = await authClient.create(doc)

        return res.status(201).json(result)

    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
};