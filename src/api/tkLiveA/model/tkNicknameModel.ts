import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: TkNickname info response
 */
export interface TkNicknameInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  createId?: string;
  departmentId?: string;
  nicknameId?: number;
  nicknameDetails?: string;
  categoryId?: number;
  usedCount?: number;
}

/**
 *  @description: TkNickname list response
 */

export type TkNicknameListResp = BaseListResp<TkNicknameInfo>;
