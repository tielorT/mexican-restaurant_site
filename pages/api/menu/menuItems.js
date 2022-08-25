
import clientPromise from "../../../mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("RESTAURANT");

      const menu = await db.collection("menuItems").find({}).toArray();
      res.json({ status: 200, data: menu });
}
