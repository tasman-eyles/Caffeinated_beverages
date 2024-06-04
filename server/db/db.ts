import connection from './connection'
import { Video, VideoData } from '../../models/videos'

const db = connection

export function getVideos(): Promise <Video[]> {
  return db('videos').select()
}

export function getVideosById(id: number): Promise<Video> {
  return db('videos').where({ id }).select().first()
}

export function deleteVideo(id: number) {
  return db('videos').where({ id }).del()
}

export function createVideo(video: VideoData) {
return db('videos').insert(video)
}