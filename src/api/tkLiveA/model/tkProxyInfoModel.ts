import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: TkProxyInfo info response
 */
export interface TkProxyInfoInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  createId?: string;
  departmentId?: string;
  proxyId?: string;
  proxyName?: string;
  proxyAddress?: string;
  country?: string;
}

/**
 *  @description: TkProxyInfo list response
 */

export type TkProxyInfoListResp = BaseListResp<TkProxyInfoInfo>;
