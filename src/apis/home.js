import httpInstance from '@/utils/http'

export function getBannerApi(){
  return httpInstance({
    url:'/home/banner'
  })
}
export function getNewApi(){
  return httpInstance({
    url:'/home/new'
  })
}
export function getHotApi(){
  return httpInstance({
    url:'/home/hot'
  })
}
export function getGoodsAPi(){
  return httpInstance({
    url:'/home/goods'
  })
}