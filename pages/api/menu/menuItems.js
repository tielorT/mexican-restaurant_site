
import clientPromise from "../../../mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("RESTAURANT");

      const menu = await db.collection("menuItems").find({}).toArray();
      res.status(200).json(menu);
}
