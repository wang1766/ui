import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '@/api/model/baseModel';
import { TkAccountUserInfo, TkAccountUserListResp } from './model/tkAccountUserModel';

enum Api {
  CreateTkAccountUser = '/tklive-api/tk_account_user/create',
  UpdateTkAccountUser = '/tklive-api/tk_account_user/update',
  GetTkAccountUserList = '/tklive-api/tk_account_user/list',
  DeleteTkAccountUser = '/tklive-api/tk_account_user/delete',
  GetTkAccountUserById = '/tklive-api/tk_account_user',
}

/**
 * @description: Get tk account user list
 */

export const getTkAccountUserList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkAccountUserListResp>>(
    { url: Api.GetTkAccountUserList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new tk account user
 */
export const createTkAccountUser = (params: TkAccountUserInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateTkAccountUser, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the tk account user
 */
export const updateTkAccountUser = (params: TkAccountUserInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateTkAccountUser, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete tk account users
 */
export const deleteTkAccountUser = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteTkAccountUser, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get tk account user By ID
 */
export const getTkAccountUserById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkAccountUserInfo>>(
    { url: Api.GetTkAccountUserById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
