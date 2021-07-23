import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	console.log(req.body);
	const inputan = req.body.nama;

	return res.status(200).json({ status: 'OK', message: 'data diterima boss', data: inputan });
};
