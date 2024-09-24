import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: TkPrivateMessageHistory info response
 */
export interface TkPrivateMessageHistoryInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  createId?: string;
  departmentId?: string;
  accountUd?: string;
  accountNickname?: string;
  messageDetails?: string;
  targetUd?: string;
  targetNickname?: string;
  sendStatus?: number;
  errorMessage?: string;
}

/**
 *  @description: TkPrivateMessageHistory list response
 */

export type TkPrivateMessageHistoryListResp = BaseListResp<TkPrivateMessageHistoryInfo>;
