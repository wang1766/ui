import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '@/api/model/baseModel';
import { TkPrivateMessageHistoryInfo, TkPrivateMessageHistoryListResp } from './model/tkPrivateMessageHistoryModel';

enum Api {
  CreateTkPrivateMessageHistory = '/tklive-api/tk_private_message_history/create',
  UpdateTkPrivateMessageHistory = '/tklive-api/tk_private_message_history/update',
  GetTkPrivateMessageHistoryList = '/tklive-api/tk_private_message_history/list',
  DeleteTkPrivateMessageHistory = '/tklive-api/tk_private_message_history/delete',
  GetTkPrivateMessageHistoryById = '/tklive-api/tk_private_message_history',
}

/**
 * @description: Get tk private message history list
 */

export const getTkPrivateMessageHistoryList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkPrivateMessageHistoryListResp>>(
    { url: Api.GetTkPrivateMessageHistoryList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new tk private message history
 */
export const createTkPrivateMessageHistory = (params: TkPrivateMessageHistoryInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateTkPrivateMessageHistory, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the tk private message history
 */
export const updateTkPrivateMessageHistory = (params: TkPrivateMessageHistoryInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateTkPrivateMessageHistory, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete tk private message historys
 */
export const deleteTkPrivateMessageHistory = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteTkPrivateMessageHistory, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get tk private message history By ID
 */
export const getTkPrivateMessageHistoryById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkPrivateMessageHistoryInfo>>(
    { url: Api.GetTkPrivateMessageHistoryById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
