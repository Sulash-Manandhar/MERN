const asyncHandler = require("express-async-handler");

//@desc Get goals
//@route Get/api/goals
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

//@desc Set goals
//@route POST/api/goals
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.goal) {
    res.status(400);
    throw new Error("Please add a goal.");
  }
  res.status(200).json({ message: "Create Goals" });
});

//@desc Update goals
//@route PUT/api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

//@desc Delete goals
//@route Delete/api/goals/:id
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
