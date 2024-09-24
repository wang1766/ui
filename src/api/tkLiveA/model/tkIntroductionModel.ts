import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: TkIntroduction info response
 */
export interface TkIntroductionInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  createId?: string;
  departmentId?: string;
  introductionId?: number;
  introductionDetails?: string;
  categoryId?: number;
  usedCount?: number;
}

/**
 *  @description: TkIntroduction list response
 */

export type TkIntroductionListResp = BaseListResp<TkIntroductionInfo>;
