const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
//@desc Get goals
//@route Get/api/goals
const getGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.find();

  res.status(200).json(goal);
});

//@desc Set goals
//@route POST/api/goals
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a goal.");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

//@desc Update goals
//@route PUT/api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error(`Goal with id ${req.params.id} is not found.`);
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

//@desc Delete goals
//@route Delete/api/goals/:id
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error(`Goal with id ${req.params.id} is not found.`);
  }
  const deletedGoal = await goal.remove();

  if (!deletedGoal) {
    return res
      .status(500)
      .json({ message: `Failed to delete goal with id ${req.params.id}` });
  }
  return res
    .status(200)
    .json({ message: `Successfully deleted goal with id ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
