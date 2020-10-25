import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../database/entity';

export async function getUsers(req: Request, res: Response) {
  const users = await getRepository(User).find();
  res.json(users);
}

export async function getUser(req: Request, res: Response) {
  const results = await getRepository(User).findOne(req.params.id);
  return res.send(results);
}

export async function postUser(req: Request, res: Response) {
  const user = getRepository(User).create(req.body);
  const results = await getRepository(User).save(user);
  return res.send(results);
}

export async function putUser(req: Request, res: Response) {
  const user = await getRepository(User).findOne(req.params.id);
  getRepository(User).merge(user, req.body);
  const results = await getRepository(User).save(user);
  return res.send(results);
}

export async function deleteUser(req: Request, res: Response) {
  const results = await getRepository(User).delete(req.params.id);
  return res.send(results);
}
