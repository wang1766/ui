import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: TkBloggerHistory info response
 */
export interface TkBloggerHistoryInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  createId?: string;
  departmentId?: string;
  accountUd?: string;
  accountPrivateMessageCount?: number;
  accountCommentsCount?: number;
  accountSuccessCount?: number;
  startTime?: number;
  endTime?: number;
}

/**
 *  @description: TkBloggerHistory list response
 */

export type TkBloggerHistoryListResp = BaseListResp<TkBloggerHistoryInfo>;
