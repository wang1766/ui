import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: TkTargetFun info response
 */
export interface TkTargetFunInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  createId?: string;
  departmentId?: string;
  taskId?: string;
  categoryId?: number;
  accountUd?: string;
  targetUd?: string;
  targetSecUd?: string;
  targetNickname?: string;
  backConcern?: boolean;
  privateMessage?: boolean;
}

/**
 *  @description: TkTargetFun list response
 */

export type TkTargetFunListResp = BaseListResp<TkTargetFunInfo>;
