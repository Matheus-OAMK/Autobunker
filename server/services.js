import { opendB } from "./db.js";
const pool = opendB();
const queryServices = "SELECT * FROM services";
const querySubServices = "SELECT * FROM sub_services WHERE service = $1";

const getServices = async (req, res) => {
  try {
    const queryResult = await pool.query(queryServices);
    res.status(200).json(queryResult.rows);
  } catch (error) {
    res.statusMessage = "Something went wrong with the DB.";
    res.status(500).json({ error: error.message });
  }
};

const getSubServices = async (req, res) => {
  const { service } = req.params;
  try {
    const queryResult = await pool.query(querySubServices, [service]);
    res.status(200).json(queryResult.rows);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong with the DB." });
  }
};

export { getServices, getSubServices };
