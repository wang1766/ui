import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '@/api/model/baseModel';
import { TkMessageInfo, TkMessageListResp } from './model/tkMessageModel';

enum Api {
  CreateTkMessage = '/tklive-api/tk_message/create',
  UpdateTkMessage = '/tklive-api/tk_message/update',
  GetTkMessageList = '/tklive-api/tk_message/list',
  DeleteTkMessage = '/tklive-api/tk_message/delete',
  GetTkMessageById = '/tklive-api/tk_message',
}

/**
 * @description: Get tk message list
 */

export const getTkMessageList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkMessageListResp>>(
    { url: Api.GetTkMessageList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new tk message
 */
export const createTkMessage = (params: TkMessageInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateTkMessage, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the tk message
 */
export const updateTkMessage = (params: TkMessageInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateTkMessage, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete tk messages
 */
export const deleteTkMessage = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteTkMessage, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get tk message By ID
 */
export const getTkMessageById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkMessageInfo>>(
    { url: Api.GetTkMessageById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
