import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: TkAccountUser info response
 */
export interface TkAccountUserInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  createId?: string;
  departmentId?: string;
  accountUd?: string;
  accountNickname?: string;
  categoryId?: number;
  categoryDetails?: string;
  accountMessageCount?: number;
  accountSuccessCount?: number;
  accountJn?: string;
  images?: string;
  accountIntroduction?: string;
  hasFollowedFun?: boolean;
  hasGetFun?: boolean;
  hasBeUsed?: boolean;
  maxFollowsCount?: number;
  maxPrivateMessageCount?: number;
  accountSecud?: string;
  uniqueid?: string;
  shortid?: string;
  nickname?: string;
  dumperversion?: string;
  password?: string;
  appver?: string;
  xtttoken?: string;
  cookiestr?: string;
  commonparams?: string;
  signextra?: string;
  bundleid?: string;
  timestamp?: number;
}

/**
 *  @description: TkAccountUser list response
 */

export type TkAccountUserListResp = BaseListResp<TkAccountUserInfo>;
