import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: TkCategory info response
 */
export interface TkCategoryInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  createId?: string;
  departmentId?: string;
  categoryType?: number;
  categoryId?: number;
  categoryDetails?: string;
  categoryCounts?: number;
  categoryUsed?: boolean;
}

/**
 *  @description: TkCategory list response
 */

export type TkCategoryListResp = BaseListResp<TkCategoryInfo>;
