import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: TkWatchTask info response
 */
export interface TkWatchTaskInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  createId?: string;
  departmentId?: string;
  taskId?: string;
  taskStatus?: number;
  categoryId?: number;
  startTime?: number;
  endTime?: number;
  maxPrivateMessageCount?: number;
  maxPrivateMessageFrequency?: number;
  minTargetFunCount?: number;
  maxTargetFunCount?: number;
  minTargetFollowersCount?: number;
  maxTargetFollowersCount?: number;
  targetUserOptions?: string;
  commentsOptions?: string;
  keywordsOptions?: string;
}

/**
 *  @description: TkWatchTask list response
 */

export type TkWatchTaskListResp = BaseListResp<TkWatchTaskInfo>;
