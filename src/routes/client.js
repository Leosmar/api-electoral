const { Router } = require("express");

const route = Router();

const Client = require("../model/Client");

//creating client
route.post("/post-client", async (req, res) => {
  try {
    let { name, lastName, telf, dni, dir, comment } = req.body;

    const client = await Client.create({
      name,
      lastName,
      telf,
      dni,
      dir,
      comment,
    });

    res.json({ error: "false", data: client.toJSON() });
  } catch (err) {
    res.json({ error: true, err });
  }
});

//Select client

route.get("/get-client", async (req, res) => {
  try {
    const findClient = await Client.findAll({});

    return res.json({
      error: "false",
      data: findClient,
    });
  } catch (err) {
    res.json({ error: true, err });
  }
});

//update client
route.put("/put-client", async (req, res) => {
  try {
    let { id, name, lastName, telf, dni, dir, comment } = req.body;

    await Client.update(
      {
        name,
        lastName,
        telf,
        dni,
        dir,
        comment,
      },
      {
        where: {
          id,
        },
      }
    );

    res.json({ error: "false", data: "" });
  } catch (err) {
    res.json({ error: true, err });
  }
});

//delete client
route.delete("/delete-client/:id", async (req, res) => {
  try {
    let { id } = req.params;

    const deleteProv = await Client.destroy({
      where: {
        id,
      },
    });

    res.json({ error: "false", data: "" });
  } catch (err) {
    res.json({ error: true, err });
  }
});

module.exports = route;
