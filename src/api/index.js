import request from '@/utils/request'

export function getWolfGlobal() {
    return request({
      url: `/indefi/v1/global/v2`,
      method: 'get',
    })
  }