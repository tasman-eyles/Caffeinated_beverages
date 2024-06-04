import { Router } from 'express'
import * as db from '../db/db'
import { VideoData } from '../../models/videos'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const data = await db.getVideos()
    res.json(data)
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const data = await db.getVideosById(id)
    res.json(data)
  } catch (error) {
    console.error(`Database error ${error}`) 
  }
}) 

router.post('/', async (req, res) => {
  try {
    const data: VideoData = req.body
    await db.createVideo(data)
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  try {
  const id = Number(req.params.id)
  await db.deleteVideo(id)
  res.json('deleted video')
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(500)
  }
})



export default router
