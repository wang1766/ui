import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '@/api/model/baseModel';
import { TkCategoryInfo, TkCategoryListResp } from './model/tkCategoryModel';

enum Api {
  CreateTkCategory = '/tklive-api/tk_category/create',
  UpdateTkCategory = '/tklive-api/tk_category/update',
  GetTkCategoryList = '/tklive-api/tk_category/list',
  DeleteTkCategory = '/tklive-api/tk_category/delete',
  GetTkCategoryById = '/tklive-api/tk_category',
}

/**
 * @description: Get tk category list
 */

export const getTkCategoryList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkCategoryListResp>>(
    { url: Api.GetTkCategoryList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new tk category
 */
export const createTkCategory = (params: TkCategoryInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateTkCategory, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the tk category
 */
export const updateTkCategory = (params: TkCategoryInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateTkCategory, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete tk categorys
 */
export const deleteTkCategory = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteTkCategory, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get tk category By ID
 */
export const getTkCategoryById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkCategoryInfo>>(
    { url: Api.GetTkCategoryById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
