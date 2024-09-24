import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '@/api/model/baseModel';
import { TkNicknameInfo, TkNicknameListResp } from './model/tkNicknameModel';

enum Api {
  CreateTkNickname = '/tklive-api/tk_nickname/create',
  UpdateTkNickname = '/tklive-api/tk_nickname/update',
  GetTkNicknameList = '/tklive-api/tk_nickname/list',
  DeleteTkNickname = '/tklive-api/tk_nickname/delete',
  GetTkNicknameById = '/tklive-api/tk_nickname',
}

/**
 * @description: Get tk nickname list
 */

export const getTkNicknameList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkNicknameListResp>>(
    { url: Api.GetTkNicknameList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new tk nickname
 */
export const createTkNickname = (params: TkNicknameInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateTkNickname, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the tk nickname
 */
export const updateTkNickname = (params: TkNicknameInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateTkNickname, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete tk nicknames
 */
export const deleteTkNickname = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteTkNickname, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get tk nickname By ID
 */
export const getTkNicknameById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkNicknameInfo>>(
    { url: Api.GetTkNicknameById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
