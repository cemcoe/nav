import {request} from './request'

export function getKeywords() {
  return request({
    url: '/keywords'
  })
}