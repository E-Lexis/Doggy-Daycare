const { Appointment } = require("../models");

const appointmentdata = [
  {
    user_id: 1,
    dog_id: 1,
    startDate: "2022-05-21",
  },
  {
    user_id: 1,
    dog_id: 2,
    startDate: "2022-05-22",
  },
  {
    user_id: 3,
    dog_id: 3,
    startDate: "2022-05-23",
  },
  {
    user_id: 2,
    dog_id: 4,
    startDate: "2022-05-24",
  },
  {
    user_id: 4,
    dog_id: 5,
    startDate: "2022-05-25",
  },
  {
    user_id: 4,
    dog_id: 6,
    startDate: "2022-05-25",
  },
  {
    user_id: 6,
    dog_id: 6,
    startDate: "2022-05-27",
  },
];

const seedAppointments = () => Appointment.bulkCreate(appointmentdata);

module.exports = seedAppointments;