import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '@/api/model/baseModel';
import { TkBloggerHistoryInfo, TkBloggerHistoryListResp } from './model/tkBloggerHistoryModel';

enum Api {
  CreateTkBloggerHistory = '/tklive-api/tk_blogger_history/create',
  UpdateTkBloggerHistory = '/tklive-api/tk_blogger_history/update',
  GetTkBloggerHistoryList = '/tklive-api/tk_blogger_history/list',
  DeleteTkBloggerHistory = '/tklive-api/tk_blogger_history/delete',
  GetTkBloggerHistoryById = '/tklive-api/tk_blogger_history',
}

/**
 * @description: Get tk blogger history list
 */

export const getTkBloggerHistoryList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkBloggerHistoryListResp>>(
    { url: Api.GetTkBloggerHistoryList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new tk blogger history
 */
export const createTkBloggerHistory = (params: TkBloggerHistoryInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateTkBloggerHistory, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the tk blogger history
 */
export const updateTkBloggerHistory = (params: TkBloggerHistoryInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateTkBloggerHistory, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete tk blogger historys
 */
export const deleteTkBloggerHistory = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteTkBloggerHistory, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get tk blogger history By ID
 */
export const getTkBloggerHistoryById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkBloggerHistoryInfo>>(
    { url: Api.GetTkBloggerHistoryById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
