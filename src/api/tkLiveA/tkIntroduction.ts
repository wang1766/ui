import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '@/api/model/baseModel';
import { TkIntroductionInfo, TkIntroductionListResp } from './model/tkIntroductionModel';

enum Api {
  CreateTkIntroduction = '/tklive-api/tk_introduction/create',
  UpdateTkIntroduction = '/tklive-api/tk_introduction/update',
  GetTkIntroductionList = '/tklive-api/tk_introduction/list',
  DeleteTkIntroduction = '/tklive-api/tk_introduction/delete',
  GetTkIntroductionById = '/tklive-api/tk_introduction',
}

/**
 * @description: Get tk introduction list
 */

export const getTkIntroductionList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkIntroductionListResp>>(
    { url: Api.GetTkIntroductionList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new tk introduction
 */
export const createTkIntroduction = (params: TkIntroductionInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateTkIntroduction, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the tk introduction
 */
export const updateTkIntroduction = (params: TkIntroductionInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateTkIntroduction, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete tk introductions
 */
export const deleteTkIntroduction = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteTkIntroduction, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get tk introduction By ID
 */
export const getTkIntroductionById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkIntroductionInfo>>(
    { url: Api.GetTkIntroductionById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
