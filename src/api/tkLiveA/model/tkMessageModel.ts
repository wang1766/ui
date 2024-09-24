import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: TkMessage info response
 */
export interface TkMessageInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  createId?: string;
  departmentId?: string;
  messageId?: number;
  messageDetails?: string;
  categoryId?: number;
  usedCount?: number;
}

/**
 *  @description: TkMessage list response
 */

export type TkMessageListResp = BaseListResp<TkMessageInfo>;
