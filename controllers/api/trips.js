const Trip = require("../../models/trip");
const User = require("../../models/user");

module.exports = {
    index,
    show,
    create,
    delete: deleteTrip,
    update
};

async function index(req, res) {
    const trips = await Trip.find({});
    res.status(200).json(trips);
}

async function show(req, res) {
    const trip = await Trip.findById(req.params.id);
    res.status(200).json(trip);
}
