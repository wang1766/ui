import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '@/api/model/baseModel';
import { TkTargetFunInfo, TkTargetFunListResp } from './model/tkTargetFunModel';

enum Api {
  CreateTkTargetFun = '/tklive-api/tk_target_fun/create',
  UpdateTkTargetFun = '/tklive-api/tk_target_fun/update',
  GetTkTargetFunList = '/tklive-api/tk_target_fun/list',
  DeleteTkTargetFun = '/tklive-api/tk_target_fun/delete',
  GetTkTargetFunById = '/tklive-api/tk_target_fun',
}

/**
 * @description: Get tk target fun list
 */

export const getTkTargetFunList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkTargetFunListResp>>(
    { url: Api.GetTkTargetFunList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new tk target fun
 */
export const createTkTargetFun = (params: TkTargetFunInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateTkTargetFun, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the tk target fun
 */
export const updateTkTargetFun = (params: TkTargetFunInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateTkTargetFun, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete tk target funs
 */
export const deleteTkTargetFun = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteTkTargetFun, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get tk target fun By ID
 */
export const getTkTargetFunById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkTargetFunInfo>>(
    { url: Api.GetTkTargetFunById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
