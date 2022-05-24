import { Request, Response } from "express";
import Puppy from "../models/Puppy";

export const allPuppies = async (_req: Request, res: Response) => {
  try {
    const allPuppies = await Puppy.find();
    return res.status(200).json(allPuppies);
  } catch (error: Error | any) {
    return res.status(error.status).json({ error: error.message });
  }
};

export const specificPuppy = async (_req: Request, res: Response) => {
  try {
    const targetPuppy = await Puppy.findById(_req.params.id);
    return res.status(200).json(targetPuppy);
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
export const newPuppy = async (_req: Request, res: Response) => {
  try {
    const newPuppy = await Puppy.create({
      name: _req.body.name,
      breed: _req.body.breed,
      birthday: _req.body.birthday,
    });
    return res.status(201).json({ test: newPuppy });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const updatePuppies = async (_req: Request, res: Response) => {
  try {
    if (!_req.body.name || !_req.body.breed || !_req.body.birthday)
      return res.status(400).json({ error: "Missing properties" });

    const updatedPuppy = {
      name: _req.body.name,
      breed: _req.body.breed,
      birthday: _req.body.birthday,
    };
    await Puppy.findByIdAndUpdate(_req.params.id, updatedPuppy);
    return res.status(204).json(updatedPuppy);
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
export const deletePuppy = async (_req: Request, res: Response) => {
  try {
    await Puppy.findByIdAndDelete(_req.params.id);
    return res.status(204).end();
  } catch (error) {
    return res.status(204).end();
  }
};
